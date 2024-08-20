import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("otp_records", function (table) {
    table.increments("id").primary();
    table.string("email").notNullable();
    table.integer("otp").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("expires_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("otp_records");
}
