import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
    basePath: "lp-crc",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
  {
    name: "home",
    label: "Home",
    path: "content",
    format: "json",
    match: { include: "home" },
    ui: { allowedActions: { create: false, delete: false } },
    fields: [
      {
        type: "object",
        name: "hero",
        label: "Hero",
        fields: [
          { type: "string", name: "title", label: "Título" },
          { type: "string", name: "subtitle", label: "Subtítulo", ui: { component: "textarea" } },
          { type: "string", name: "cta", label: "Botón" },
        ],
      },
    ],
  },
],
  },
});
