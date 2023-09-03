const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');
const https = require('https');

// генерация сертификата при помощи https://letsencrypt.org/ru/getting-started/#%D0%B5%D1%81%D1%82%D1%8C-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF-%D0%BF%D0%BE-ssh
// а именно https://certbot.eff.org/instructions?ws=nginx&os=ubuntubionic&tab=standard

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'privkey1.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert1.pem'))
}

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// задержка работы сервера
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 400)
  });
  next();
});

server.use(jsonServer.defaults());

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
      const { username, password } = req.body;
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
      const { users = [] } = db;

      const userFromBd = users.find(
          (user) => user.username === username && user.password === password,
      );

      if (userFromBd) {
          return res.json(userFromBd);
      }

      return res.status(403).json({ message: 'User not found' });
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
      return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

if(process.argv.slice(2).includes('--https')){
  
  const httpsServer = https.createServer(options, server);

  const PORT = 8443;

  httpsServer.listen(PORT, () => {
    console.log(`Server https is running on ${PORT} port`);
  })
} else {
  const PORT = 8000;

  server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  })
}

