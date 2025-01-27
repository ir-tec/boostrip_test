import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

interface catchErrorReturnType {
  message: string;
  status: number;
  data?: unknown;
}
export function catch_prisma_error(error: unknown): catchErrorReturnType {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2000":
        return { message: "asdaaaa", status: 400 };
      case "P2002":
        return {
          message: `The operation failed due to the uniqueness of filed ${error?.meta?.target}`,
          status: 400,
        };
      case "P2003":
        return {
          message: `${error?.meta?.field_name} is Foreign key in other tables`,
          status: 400,
        };
      case "P2025":
        return { message: error.message, status: 400 };

      default:
        return { message: error.message, status: 400 };
    }
  }

  return { message: `${error}`, status: 400 };
}
