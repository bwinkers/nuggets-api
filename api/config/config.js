import fp from 'fastify-plugin'
import fastifyEnv from '@fastify/env'

export default fp(async (fastify) => {

    const schema = {
        type: "object",
        // required: [
        //   "HTTP_PORT",
        // ],
        properties: {
          HTTP_PORT: {
            type: "number",
            default: 3000,
          },
          HTTP_HOST: {
            type: "string",
            default: "0.0.0.0",
          },
          CORS_ORIGIN_URL: {
            type: "string",
          },
          API_PGHOST: {
            type: "string",
          },
          API_PGUSER: {
            type: "string",
          },
          API_PGPASSWORD: {
            type: "string",
          },
          API_PGDATABASE: {
            type: "string",
          },
          SMTP_HOST: {
            type: "string",
          },
          SMTP_USER: {
            type: "string",
          },
          SMTP_PASSWORD: {
            type: "string",
          },
          SMTP_PORT: {
            type: "string",
          },
          SMTP_FROM: {
            type: "string",
          },
          SMTP_EMAIL: {
            type: "string",
          },
          SMTP_SECURE: {
            type: "boolean",
          },
        },
      };

    console.log('PROCESS ENV', process.env)
    
    const configOptions = {
        // decorate the Fastify server instance with `config` key
        // such as `fastify.config('PORT')
        confKey: "config",
        // schema to validate
        schema: schema,
        // source for the configuration data
        data: process.env,
        // will read .env in root folder
        // dotenv: true,
        // will remove the additional properties
        // from the data object which creates an
        // explicit schema
        removeAdditional: true,
    };


    fastify.register(fastifyEnv, configOptions)
    .ready((err) => {
        if (err) console.error(err)

        console.log(fastify.config) // or fastify[options.confKey]
    })
})
