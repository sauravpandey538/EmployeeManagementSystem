import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("attendence_details").del();

  // Inserts seed entries
  await knex("attendence_details").insert([
    {
      employee_id: "E001",
      check_in: new Date("2024-08-21T08:00:00Z"),
      check_out: new Date("2024-08-21T17:00:00Z"),
      date: new Date("2024-08-21T00:00:00Z"),
    },
    {
      employee_id: "E002",
      check_in: new Date("2024-08-21T09:00:00Z"),
      check_out: new Date("2024-08-21T18:00:00Z"),
      date: new Date("2024-08-21T00:00:00Z"),
    },
    {
      employee_id: "E003",
      check_in: new Date("2024-08-21T10:00:00Z"),
      check_out: new Date("2024-08-21T19:00:00Z"),
      date: new Date("2024-08-21T00:00:00Z"),
    },
    {
      employee_id: "E004",
      check_in: new Date("2024-08-21T07:00:00Z"),
      check_out: new Date("2024-08-21T16:00:00Z"),
      date: new Date("2024-08-21T00:00:00Z"),
    },
  ]);
}
