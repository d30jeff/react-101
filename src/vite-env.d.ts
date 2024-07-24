/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAT_HOSTNAME: string
  readonly VITE_CAT_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
