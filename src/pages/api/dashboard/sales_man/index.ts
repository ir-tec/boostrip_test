import { NextApiRequest, NextApiResponse } from "next";
import { sales_person_data_access } from "./data";
// import rateLimit from "express-rate-limit";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const response = await sales_person_data_access.get_all();
    res.status(response.status).json(response);
  }

  if (req.method === "POST") {
    const response = await sales_person_data_access.create_many();
    res.status(response.status).json(response);
  }
}

export default handler;
