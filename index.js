import Fastify from "fastify";
import Route from "./test/route.js";
const fastify = Fastify();

fastify.register(Route);//registeres the route
fastify.get("/", async function (request, reply) {
    return "hello";
});
fastify.listen(3000, () => {
    console.log("running on port");
});

fastify.post();