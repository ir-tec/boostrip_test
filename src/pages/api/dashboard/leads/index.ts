import { NextApiRequest, NextApiResponse } from "next";
import { lead_data_access } from "../../lead/data";
// import rateLimit from "express-rate-limit";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const response = await lead_data_access.create(req.body);
    res.status(response.status).json(response);
  }

  if (req.method === "GET") {
    const response = await lead_data_access.get_all();
    res.status(response.status).json(response);
  }
  if (req.method === "PUT") {
    const response = await lead_data_access.update_lead_sales_man({
      lead_id: req.body.lead_id,
      sales_man_id: req.body.sales_man_id,
    });
    res.status(response.status).json(response);
  }
}

export default handler;
