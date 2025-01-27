
import React from "react";
import { create_moch_salesman } from "../http/mock_salse_man";

const useMockSalesman = () => {
  const [loader, set_loader] = React.useState(false);

  React.useEffect(() => {
    set_loader(true);
    create_moch_salesman()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        set_loader(false);
      });
  }, []);

  return { loader };
};

export default useMockSalesman;
