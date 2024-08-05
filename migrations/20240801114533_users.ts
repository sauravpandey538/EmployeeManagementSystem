import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("details", function (table) {
    table.increments("id").primary();
    table.string("employeeId").notNullable();
    table.string("phoneNumber").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("linkedIn").notNullable().unique();
    table.string("image").defaultTo("");
    table.string("cv").defaultTo("");

    // Set up foreign key constraint
    table
      .foreign("employeeId")
      .references("employeeId")
      .inTable("user")
      .onDelete("CASCADE"); // Adjust "CASCADE" based on desired behavior
  });
}
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("details");
}
