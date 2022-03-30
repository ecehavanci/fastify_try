import Fastify from "fastify";
import Route from "./test/route.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import Autoload from "fastify-autoload";

const fastify = Fastify();
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

fastify.register(Autoload,{
    dir:join(_dirname,"routes")
});

fastify.register(Route);//registeres the route
/*fastify.get("/", async function (request, reply) {
    return "hello";
}); */
const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          someKey: { type: 'string' },
          someOtherKey: { type: 'number' }
        }
      }
    }
  }
  
  fastify.post('/', opts, async (request, reply) => {
    return request.body;
  });

fastify.listen(3000, () => {
    console.log("running on port");
});
