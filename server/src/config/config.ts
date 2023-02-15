import * as dotenv from "dotenv";

dotenv.config();

interface ConfigInterface {
  SERVER_PORT: string;
  NODE_ENV: string;
  UNSPLASH_KEY: string;
  UNSPLASH_SECRET: string;
  PEXELS_KEY: string;
  PER_PAGE: string;
  ALLOW_ORIGIN: string[];
}

export const config: ConfigInterface = {
  SERVER_PORT: process.env.PORT || "",
  NODE_ENV: process.env.NODE_ENV || "",
  UNSPLASH_KEY: process.env.UNSPLASH_KEY || "",
  UNSPLASH_SECRET: process.env.UNSPLASH_SECRET || "",
  PEXELS_KEY: process.env.PEXELS_KEY || "",
  PER_PAGE: process.env.PER_PAGE || "9",
  ALLOW_ORIGIN: process.env.ALLOW_ORIGIN?.split(",")?.map((el) =>
    el.trim()
  ) || ["http://localhost:3000"],
};
