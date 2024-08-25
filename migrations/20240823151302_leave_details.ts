import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("leave_details", function (table) {
    table.increments("id").primary();
    table.string("employee_id").notNullable;
    table
      .enum("leave_type", ["Sick", "PersonalEvents", "Vaccation"])
      .defaultTo("Sick");
    table.date("start_date").notNullable();
    table.date("end_date").notNullable();
    table.timestamp("applied_date").notNullable();
    table.string("reason").notNullable();
    table.foreign("employee_id").references("employeeId").inTable("employee");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("leave_details");
}

// {
//   "employee_id": "E004",
//   "leave_type": "Sick",
//   "start_date": "2024-08-25 08:00:00",
//   "end_date": "2024-08-25 08:00:00",
//   "applied_date": "2024-08-25 08:00:00",
//   "reason": "I am so sick to work, thank you"
// }
