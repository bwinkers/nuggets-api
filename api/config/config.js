import fp from 'fastify-plugin'
import fastifyEnv from '@fastify/env'

export default fp(async (fastify) => {

    const schema = {
        type: "object",
        // required: [
        //   "HTTP_PORT",
        //   "SUPERTOKENS_CONNECTION_URI",
        //   "SUPERTOKENS_API_KEY",
        //   "SUPERTOKENS_APPNAME",
        //   "SUPERTOKENS_API_DOMAIN",
        //   "SUPERTOKENS_API_BASE_PATH",
        //   "SUPERTOKENS_WEBSITE_DOMAIN",
        //   "SUPERTOKENS_WEBSITE_BASE_PATH",
        //   "SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_ID",
        //   "SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_SECRET",
        //   "SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_ID",
        //   "SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_SECRET",
        //   "CORS_ORIGIN_URL",
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
          SUPERTOKENS_CONNECTION_URI: {
            type: "string",
          },
          SUPERTOKENS_API_KEY: {
            type: "string",
          },
          SUPERTOKENS_APPNAME: {
            type: "string",
          },
          SUPERTOKENS_API_DOMAIN: {
            type: "string",
          },
          SUPERTOKENS_API_BASE_PATH: {
            type: "string",
          },
          SUPERTOKENS_WEBSITE_DOMAIN: {
            type: "string",
          },
          SUPERTOKENS_WEBSITE_BASE_PATH: {
            type: "string",
          },
          SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_ID: {
            type: "string",
          },
          SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_SECRET: {
            type: "string",
          },
          SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_ID: {
            type: "string",
          },
          SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_SECRET: {
            type: "string",
          },
          CORS_ORIGIN_URL: {
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
          API_POSTGRES_URI: {
            type: "string",
          }
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
