import { db_client } from "@/core/db_client";
import { lead_props } from "@/domain/entities/lead_entitiy";
import { catch_prisma_error } from "@/shared/http/error_catcher";
import { response_helper } from "@/shared/http/response_helper";

export const lead_data_access = {
  create: async (lead_data: lead_props) => {
    try {
      await db_client.$connect();

      const new_lead = await db_client.lead.create({
        data: { ...lead_data, assignments: undefined },
      });

      return response_helper({
        status: 200,
        message: "Lead Created",
        data: new_lead,
      });
    } catch (error) {
      return catch_prisma_error(error);
    } finally {
      await db_client.$disconnect();
    }
  },
  get_all: async () => {
    try {
      await db_client.$connect();
      const leads = await db_client.lead.findMany({
        include: { assignments: { select: { sales_person_id: true } } },
      });

      return response_helper({
        status: 200,
        data: leads,
      });
    } catch (error) {
      return catch_prisma_error(error);
    } finally {
      await db_client.$disconnect();
    }
  },
  update_lead_sales_man: async ({
    lead_id,
    sales_man_id,
  }: {
    lead_id: string;
    sales_man_id: string;
  }) => {
    try {
      await db_client.$connect();
      const lead = await db_client.lead.findUnique({
        where: { lead_id },
        select: { assignments: { select: { assignment_id: true } } },
      });
      if (lead?.assignments?.assignment_id) {
        await db_client.assignment.delete({
          where: { assignment_id: lead.assignments.assignment_id },
        });
      }
      await db_client.assignment.create({
        data: {
          lead_id,
          sales_person_id: sales_man_id,
        },
      });
      return response_helper({
        status: 200,
        message: "Assignment Created",
      });
    } catch (error) {
      return catch_prisma_error(error);
    } finally {
      await db_client.$disconnect();
    }
  },
};
