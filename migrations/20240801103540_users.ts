import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user", function (table) {
    table.increments("id").primary();
    table.string("fullName").notNullable();
    table.string("employeeId").notNullable().unique();
    table.string("facultyType").notNullable();
    table.integer("salary").notNullable();
    table.string("additionalInfo").defaultTo("");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user");
}
