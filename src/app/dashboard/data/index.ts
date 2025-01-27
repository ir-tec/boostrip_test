import { axios_instance } from "@/shared/http/axios_instance";

export const get_leads_api = async () => {
  try {
    const { data } = await axios_instance.get("/dashboard/leads");

    return data.data;
  } catch (error) {
    throw error;
  }
};
export const get_sales_man_api = async () => {
  try {
    const { data } = await axios_instance.get("/dashboard/sales_man");

    return data.data;
  } catch (error) {
    throw error;
  }
};
export const update_lead_sale_man_api = async (props: {
  lead_id?: string;
  sales_man_id: string;
}) => {
  try {
    const { data } = await axios_instance.put("/dashboard/leads", props);

    return { data: data.data, message: data.message };
  } catch (error) {
    throw error;
  }
};
