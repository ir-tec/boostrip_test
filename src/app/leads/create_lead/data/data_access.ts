
import { lead_props } from "@/domain/entities/lead_entitiy";
import { axios_instance } from "@/shared/http/axios_instance";

export const create_lead_api = async (params: lead_props) => {
  try {
    const { data } = await axios_instance.post("/lead", params); 

    return { message: data?.message };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
