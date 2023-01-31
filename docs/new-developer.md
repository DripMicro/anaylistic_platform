# Convert PHP Affliate Dashboard from PHP to NodeJS

## General
We have a legacy MySQL,PHP affiliate management system we want 
to convert to modern technology, 

this project is to convert part of it, Affiliate dashboard
and mainly the backend part, database access/API

At this stage, UI work is minimal and just to demonstrate the API, we will have separate project to finalize the UI

### Software stack
- MySQL - Same and shard with  legacy PHP database, cannot change
- NodeJS
- Prisma - ORM
- TypeScript
- TRPC for API
- React, client side code
- Chakra-UI - Design System/Components/Theme

### Experience Needed
- PHP - To read existing code 
- NodeJS
- MySQL
- Prisma - Most of the work is to convert SQL queries to prisma API 
- TypeScript

### Scope
- https://affiliate-com.netlify.app/ Around 30% of the code already converted and NextJS, Prisma, TRPC, React are in place and working fine
- Need to convert other parts of the code include
  - Signup/Sign-in
  - Documents/Upload files
  - Main dashboard screen
  - Reports
  - Support
  - Pixel Monitor

### Code

Share GitHub user name and will give you access to code

#### PHP

https://github.com/affiliatets-com/FocusOption/tree/main/site/affiliate

#### New, NextJS

https://github.com/affiliatets-com/aff/tree/main/app

Install

```bash
yarn install
cd app
yarn dev
```