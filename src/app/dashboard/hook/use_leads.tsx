import React from "react";
import { get_leads_api } from "../data";
import { lead_props } from "@/domain/entities/lead_entitiy";

const useLeads = () => {
  const [leads, set_leads] = React.useState<lead_props[]>([]);
  const [loader, set_loader] = React.useState<boolean>(false);

  React.useEffect(() => {
    set_loader(true);
    get_leads_api()
      .then((res) => {
        set_leads(res);
      })
      .catch(() => {})
      .finally(() => {
        set_loader(false);
      });
  }, []);
  return { leads, loader ,set_leads,set_loader};
};

export default useLeads;
