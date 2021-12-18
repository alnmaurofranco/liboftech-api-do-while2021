const AuthConfig = {
  secret: process.env.JWT_SECRET_KEY,
  tokenExpiresIn: "24h",
};

export { AuthConfig };
