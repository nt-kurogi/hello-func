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

app.http("rag-search", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "rag-search",
  handler: async (req) => {
    let payload = null;
    if (req.method === "POST") {
      try {
        payload = await req.json();
      } catch {
        payload = null;
      }
    }

    return {
      status: 200,
      jsonBody: {
        message: "rag-search endpoint is alive",
        route: "/api/rag-search",
        method: req.method,
        payload,
      },
    };
  },
});
