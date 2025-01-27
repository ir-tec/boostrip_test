"use client";
import React from "react";
import { OptTable } from "opt-table";
import { update_lead_sale_man_api } from "./data";
import SelectBox from "@/shared/components/select_box";
import useLeads from "./hook/use_leads";
import useSalesMan from "./hook/use_sales_man";
const Page = () => {
  const { leads, loader, set_leads, set_loader } = useLeads();
  const { sales_man } = useSalesMan();

  return (
    <div className="flex w-full p-36 h-full justify-center items-center capitalize text-white">
      <div className="min-w-full h-full shadow-2xl max-w-sm p-6 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <OptTable
          data={leads}
          container_style={{ color: "white" }}
          loading={loader}
          table_head_list={[
            {
              table_key: "first_name",
              title: "First Name",
            },
            {
              table_key: "last_name",
              title: "Last Name",
            },
            {
              table_key: "email",
              title: "Email",
            },
            {
              table_key: "phone",
              title: "Phone",
            },
            {
              table_key: "notes",
              title: "Notes",
            },
            {
              table_key: "sales_person",
              title: "Sales Man",
              Render: ({ renderData }) => {
                return (
                  <SelectBox
                    disabled={loader}
                    value={renderData.assignments?.sales_person_id}
                    options={[
                      { title: "Select a Sales man", value: "" },
                      ...sales_man.map((sale) => {
                        return {
                          title: `${sale.first_name} ${sale.last_name}`,
                          value: sale.sales_person_id || "",
                        };
                      }),
                    ]}
                    onchange={(val) => {
                      set_loader(true);
                      update_lead_sale_man_api({
                        lead_id: renderData.lead_id,
                        sales_man_id: val,
                      })
                        .then(() => {
                          set_leads((pre) =>
                            pre.map((lead) => {
                              if (lead.lead_id !== renderData.lead_id)
                                return lead;
                              return {
                                ...lead,
                                assignments: { sales_person_id: val },
                              };
                            })
                          );
                        })
                        .catch(() => {})
                        .finally(() => {
                          set_loader(false);
                        });
                    }}
                  />
                );
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
