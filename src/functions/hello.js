import { app } from "@azure/functions";

app.http("hello", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "hello",
  handler: async () => {
    return {
      status: 200,
      jsonBody: {
        message: "Hello World",
      },
    };
  },
});
