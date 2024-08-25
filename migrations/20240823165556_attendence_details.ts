import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("attendence_details", function (table) {
    table.increments("id").primary();
    table.string("employee_id").notNullable();
    table.timestamp("check_in").notNullable().defaultTo(knex.fn.now());
    table.timestamp("check_out").nullable();
    table.timestamp("date").notNullable().defaultTo(knex.fn.now());
    table.foreign("employee_id").references("employeeId").inTable("employee");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("attendence_details");
}
