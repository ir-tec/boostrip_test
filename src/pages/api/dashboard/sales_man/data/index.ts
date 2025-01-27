import { db_client } from "@/core/db_client";
import { catch_prisma_error } from "@/shared/http/error_catcher";

import { response_helper } from "@/shared/http/response_helper";

export const sales_person_data_access = {
  create_many: async () => {
    try {
      await db_client.salesPerson.createMany({
        skipDuplicates: true,
        data: [
          {
            email: "email1@email.com",
            first_name: "Amin",
            last_name: "Hoseiny",
            phone: "09904505485",
          },
          {
            email: "email2@email.com",
            first_name: "Ali",
            last_name: "Karimi",
            phone: "09904505568",
          },
        ],
      });

      return response_helper({ status: 200, message: "Mock Sales man" });
    } catch (error) {
      throw error;
    }
  },
  get_all: async () => {
    try {
      const sales_man = await db_client.salesPerson.findMany();

      return response_helper({ status: 200, data: sales_man });
    } catch (error) {
      return catch_prisma_error(error);
    }
  },
};
