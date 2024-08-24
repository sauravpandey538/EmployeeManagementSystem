import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_details", function (table) {
    table.increments("id").primary();
    table.string("email").unique().notNullable().index();
    table.string("firebase_id").unique().notNullable();
    table.timestamp("token_expires_at").nullable();
    table.enum("role", ["Admin", "Employee"]).notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_details");
}
