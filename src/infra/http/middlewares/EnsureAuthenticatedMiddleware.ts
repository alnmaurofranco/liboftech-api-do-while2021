import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AuthConfig } from "../../../config/AuthConfig";

type EnsureAuthenticatedMiddlewareResponse = Response | NextFunction;

type TokenPayload = {
  sub: string;
};

const EnsureAuthenticatedMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): EnsureAuthenticatedMiddlewareResponse => {
  const { secret } = AuthConfig;

  const authHeaders = request.headers.authorization;

  if (!authHeaders) {
    return response.status(401).json({ error: "Token invalid" });
  }

  const [, token] = authHeaders.split(" ");

  try {
    const { sub } = verify(token, secret) as TokenPayload;

    request.user_id = sub;

    next();
  } catch (err) {
    return response.status(401).json({ error: "Token expired" });
  }
};

export { EnsureAuthenticatedMiddleware };
