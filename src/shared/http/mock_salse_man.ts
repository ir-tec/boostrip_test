import { axios_instance } from "./axios_instance";

export const create_moch_salesman = async () => {
  try {
    const { data } = await axios_instance.post("/dashboard/sales_man");
    return data.message;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
