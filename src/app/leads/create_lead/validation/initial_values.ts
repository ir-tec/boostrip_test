import { lead_props } from "@/domain/entities/lead_entitiy";
import * as Yup from "yup";
const phoneRgx = new RegExp("^[0][9][0-9]{9}$");

export const initialValues:lead_props = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  notes: "",
};
export const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRgx, "Wrong phone number- IR Format Required"),
});

export const stepTwoValidationSchema = Yup.object({
  notes: Yup.string().optional(),
});
