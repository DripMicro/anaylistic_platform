# Access legacy systems

#### PHP but with new design for affliate dashbaord, partially working
```
http://go.gamingaffiliates.co/admin/
user: mulyoved@gmail.com
pass: ask
```

#### PHP but with old design for affliate dashbaord, some stuff work only on this version

```
https://go.best-brokers-partners.com/admin/?act=main
user: admin
pass: ask
```

once you login to admin, 

select Affiliate->Affiliate List->Search affiliate 500->Login

![login-to-affiliate-dashboard.png](02-screenshots%2Flogin-to-affiliate-dashboard.png)

### Database
to connect to database 

create ./app/.env
ask for the content, include env variable to connect to database

### can also import locally from sql dump file 

from: https://drive.google.com/file/d/1do_egfrSgnYCgpqr10b5yH6aKFM7JXUY/view?usp=share_link 

### PHP code

We need to translate all the PHP code under

`https://github.com/affiliatets-com/FocusOption/tree/main/site/affiliate`

Some already converted, see 

`app/src/server/api/routers/affiliates`

## Notes

- We use prettier for code formatting, make sure to configure your IDE
to reformat on save for best DX
- when push to main code automaticly deploy to netlify  
`https://affiliate-com.netlify.app/`
- I managed to run PHP version locally and log SQL queries done using docker
let me know if you need this and I can help (need to have docker)
