cd ~/production-project

echo "Building project as prod"
npm run build:prod

echo "Removing folder /var/www/production-project/html"
rm -rf /var/www/production-project/html

echo "move build folder to /var/www/production-project/html/"
mv ~/production-project/build/ /var/www/production-project/html/