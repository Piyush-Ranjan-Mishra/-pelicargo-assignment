import { logger } from "./../helpers/logger";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { NextFunction, Request, Response } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.body.token || req.query.token;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded: any = jwt.verify(token, config.TOKEN_KEY);
    if (decoded.user !== "Piyush") throw new Error("Invalid Token");
  } catch (err) {
    logger.error({ err });
    return res.status(401).send("Invalid Token");
  }
  return next();
};
