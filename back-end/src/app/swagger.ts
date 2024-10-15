import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'Back-End Solution',
    description:
      'This is a test assessment for Full-Stack JS engineer position. The project consists of a Backend (BE) created using Node.js (Express) and a Frontend (FE) developed with React (Next.js).',
  },
  host: 'localhost:3333/api/v1',
}

const outputFile = './swagger/swagger-output.json'

const routes = ['./src/http/controllers/routes.ts']
swaggerAutogen()(outputFile, routes, doc)
