import { verifySession } from "supertokens-node/recipe/session/framework/fastify";

export default async function (fastify, opts) {
  fastify.get('/', {
    preHandler: verifySession(),
}, async (request, reply) => {
    const userId = request.session.getUserId();
    return `nuggets for ${userId}`
  })
}
