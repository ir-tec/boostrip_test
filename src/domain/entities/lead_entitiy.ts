export type lead_props = {
  lead_id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  notes: string;
  assignments?: {
    sales_person_id: string;
  };
};

export class LeadEntity {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  notes: string;

  constructor({ first_name, last_name, email, phone, notes }: lead_props) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.notes = notes;
  }
}
