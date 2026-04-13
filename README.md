# hello-func

Minimal Azure Functions (Node.js v4) project that returns Hello World.

## Run locally

```powershell
cd hello-func
npm install
npm run start
```

## Endpoint

```text
GET http://localhost:7071/api/hello
```

Expected response:

```json
{
  "message": "Hello World"
}
```

## GitHub Actions deployment

Workflow file:
- `.github/workflows/deploy-hello-func.yml`

Set this repository secret before running:
- `AZURE_FUNCTIONAPP_PUBLISH_PROFILE`

Also update `app-name` in the workflow if your Azure Function App name is not `hello-func`.
