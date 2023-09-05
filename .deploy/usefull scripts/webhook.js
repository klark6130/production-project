const port = process.env.PORT_WEB_HOOKS || 8100
const http = require('http')
const crypto = require('crypto')
const exec = require('child_process').exec

const triggerBranch = 'master' // main
const githubAccountName = 'some'
const githubPersonalAccessToken = 'ghp_cyVXjCON4qsmmjlFUiSShTLNfnwVuIsome'
const githubRepos = [
  {
    githubRepo: 'some1',
    secret: '$wsshd@y&*sZf^3p4Z4GdHZ9$z6some', // random
    pm2Cmd: 'some',
    packageManager: 'npm', // yarn
    installCmd: 'install', // 'ci --force'
  },
  {
    githubRepo: 'some2',
    secret: 's4m$rY$z4mhxYP*5Nx4rs3ea7^7some2',
    pm2Cmd: 'some2',
    packageManager: 'npm',
	installCmd: 'install',
  },
]

const BUILD_CMD = 'NODE_ENV=production npm run build'

http
  .createServer(function (req, res) {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      const jsonData = JSON.parse(data);
      //console.log(data);

      for (const item of githubRepos) {
        const signature =
          'sha1=' +
          crypto
            .createHmac('sha1', item.secret)
            .update(data.toString())
            .digest('hex')

        if (
            (req.headers['x-hub-signature'] === signature) &&
            (jsonData.ref.indexOf(triggerBranch) != -1)
           ) {
          try {
            exec(
              `cd ~/${item.githubRepo}/` +
                ` && pm2 stop ${githubRepos[0].pm2Cmd}` +
                ` && pm2 stop ${githubRepos[1].pm2Cmd}` +
                //` && pm2 stop ${githubRepos[2].pm2Cmd}` +
                ` && git pull https://${githubPersonalAccessToken}@github.com/${githubAccountName}/${item.githubRepo}.git` +
                ` && ${item.packageManager} ${item.installCmd} && ${BUILD_CMD}` +
                ` && pm2 restart ${githubRepos[1].pm2Cmd}` +
                ` && pm2 restart ${githubRepos[0].pm2Cmd}`
            )
          } catch (error) {
            console.log(error)
          }
        }
      }
    })

    res.end(`Completed successfully!`)
  })
  .listen(port)
