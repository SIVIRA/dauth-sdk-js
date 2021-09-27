import { DAuthConfig } from "./types";

export const dAuthConfigs: { [env: string]: DAuthConfig } = {
  prod: {
    baseURL: "https://id.dauth.world",
    authURL: "https://id.dauth.world/authorize",
    wsAPIURL: "wss://ws-api.admin.id.dauth.world",
  },
  dev: {
    baseURL: "https://id-dev.dauth.world",
    authURL: "https://id-dev.dauth.world/authorize",
    wsAPIURL: "wss://ws-api.admin.id-dev.dauth.world",
  },
  local: {
    baseURL: "http://localhost:4200",
    authURL: "http://localhost:4200/authorize",
    wsAPIURL: "wss://ws-api.admin.id-dev.dauth.world",
  },
};
