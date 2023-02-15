import { config } from "../config/config";

export const CorsOption = {
  origin: config.ALLOW_ORIGIN,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
