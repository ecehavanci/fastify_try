export default async function (fastify, opts) {
    fastify.get('/ecePath2', async function (request, reply) {
        reply.code(200).send("got to eces rout2");
    });

}