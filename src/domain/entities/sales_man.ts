export type sales_person_props = {
  sales_person_id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export class SalesPersonEntity {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;

  constructor({ first_name, last_name, email, phone }: sales_person_props) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
  }
}
