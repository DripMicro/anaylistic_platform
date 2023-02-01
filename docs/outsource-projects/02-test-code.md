1 - Fix error 

fix https://affiliate-com.netlify.app/affiliates/creative
500 error 

Jan 31, 02:05:00 PM: e7686c2c INFO   prisma:error
Invalid `prisma.merchants_creative.findMany()` invocation:


Inconsistent query result: Field category is required to return data, got `null` instead.

2 - Support page - Very much like app/src/components/affiliates/profiles/Profiles.tsx

3 - Report Page

4 - Login

5 - Documents - app/src/components/affiliates/profiles/Profiles.tsx

6 - HOLD - Fix Promotion Search

Hi, 

Thanks for your answer, 

will love to talk to go over the project and show you around

let me know when available

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


