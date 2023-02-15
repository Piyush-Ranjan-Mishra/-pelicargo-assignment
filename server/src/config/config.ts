import * as dotenv from "dotenv";

dotenv.config();

interface ConfigInterface {
  SERVER_PORT: string;
  NODE_ENV: string;
  PEXELS_KEY: string;
  PER_PAGE: string;
  ALLOW_ORIGIN: string[];
  TOKEN_KEY: string;
}

export const config: ConfigInterface = {
  SERVER_PORT: process.env.PORT || "",
  NODE_ENV: process.env.NODE_ENV || "",
  PEXELS_KEY: process.env.PEXELS_KEY || "",
  PER_PAGE: process.env.PER_PAGE || "9",
  ALLOW_ORIGIN: process.env.ALLOW_ORIGIN?.split(",")?.map((el) =>
    el.trim()
  ) || ["http://localhost:3000"],
  TOKEN_KEY: process.env.TOKEN_KEY || "",
};
