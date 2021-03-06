#!/bin/sh

if [ $(ps aux | grep $USER | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
  export PATH=/usr/local/bin:$PATH
  export NODE_ENV=production
  cd /var/www/artistly-sails && forever --spinSleepTime 10000 start app.js >> forever.log 2>&1                      
fi
