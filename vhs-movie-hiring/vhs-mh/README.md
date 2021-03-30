# VHS-Movie Hiring

VHS-Movie Hiring is a Web App which provides individuals with an on-demand web store for hiring  movies.

## Frontend Application:
The frontend application, built using JavaScript; Is based on Vercel's Next JS. A framework based off facebook's React. This provides frontenders with infamous tools for client side rendering such as Fast refresh among others.

    Official website(s) and more: https://nextjs.org/
    To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
    
    
## Backend Application:
The backend is built using JSON server for quick back-end prototyping and mocking.

    Official website(s) and more: https://www.npmjs.com/package/json-server#getting-started


## Testing:
Testing and Quality Assurance for the frontend application is achieved using jest-enzyme, an npm package making testing easier and convenient for developers.

    Official website(s) and more: https://www.npmjs.com/package/jest-enzyme#jest-enzyme-environment


## Starting the frontend application

First, install all package dependencies by running from the root folder:
```bash
npm install
# or
yarn install
```

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Starting the backend application

First, navigate from the root folder into the database/ and run

```bash
json-server -w db.json -p 7000
```

The application will now be fully online and functional.

## Default authentication credentials

Login as admin: 
Email: Admin.mail@vh.com
Username: @Adminforvhsmh
Password: Admin@this.vh


Login as user:
Email: User.mail@vh.com
Username: @Userinvhsmh
Password: User@this.vh
