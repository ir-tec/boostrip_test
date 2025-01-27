import React from "react";
import { get_sales_man_api } from "../data";
import { sales_person_props } from "@/domain/entities/sales_man";

const useSalesMan = () => {
  const [sales_man, set_sales_man] = React.useState<sales_person_props[]>([]);

  React.useEffect(() => {
    get_sales_man_api()
      .then((res) => {
        set_sales_man(res);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);
  return { sales_man };
};

export default useSalesMan;
