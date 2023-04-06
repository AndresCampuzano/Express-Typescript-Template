# Express Typescript Template

This is a template for creating a new Express project using Typescript.

In this project, users can create, update, delete and list their diary flights. The diaries are stored in a MongoDB
database and the images are stored in a S3 bucket.

## Technologies Used

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [S3 AWS Amazon](https://aws.amazon.com/s3/)
- [Multer](https://www.npmjs.com/package/multer)

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` to start the development server
4. Run `npm run build` to build the project
5. Run `npm start` to start the production server

## API Routes

- POST /diaries
- GET /diaries
- GET /diaries/:id
