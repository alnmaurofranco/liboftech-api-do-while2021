import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  const age = new Date();

  return response.json({
    message: "Welcome to API CLEAN with Node.js + Express.js + TypeScript",
    date: age,
    age: new Date("2021").getFullYear() - 1998,
  });
});

export { router };