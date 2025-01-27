import { NextApiRequest, NextApiResponse } from "next";
import { lead_data_access } from "./data";
// import rateLimit from "express-rate-limit";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const response = await lead_data_access.create(req.body);
    res.status(response.status).json(response);
  }

  if (req.method === "GET") {
    res.status(200).json("ping");
  }
}

export default handler;
