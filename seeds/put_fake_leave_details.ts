import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("leave_details").del();

  // Inserts seed entries
  return knex("leave_details").insert([
    {
      id: 1,
      employee_id: "E001",
      leave_type: "Sick",
      start_date: "2024-09-01",
      end_date: "2024-09-05",
      applied_date: knex.fn.now(),
      reason: "Flu",
    },
    {
      id: 2,
      employee_id: "E002",
      leave_type: "Vaccation",
      start_date: "2024-12-15",
      end_date: "2024-12-25",
      applied_date: knex.fn.now(),
      reason: "Family vacation",
    },
    {
      id: 3,
      employee_id: "E003",
      leave_type: "PersonalEvents",
      start_date: "2024-10-10",
      end_date: "2024-10-12",
      applied_date: knex.fn.now(),
      reason: "Wedding ceremony",
    },
  ]);
}
