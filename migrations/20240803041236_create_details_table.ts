import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("employee", function (table) {
    table.increments("id").primary();
    table.string("employeeId").unique();
    table.string("fullName").notNullable();
    table.string("email").notNullable();
    table.string("address").notNullable();
    table.string("type").notNullable();
    table.specificType("holiday", "JSON").notNullable();
    table.text("info").notNullable();
    table.string("joinedAt").notNullable();
    table.string("workingTime").notNullable();
    table.string("cv").notNullable();
    table.string("image").notNullable();
    table.string("phoneNumber").notNullable();
    table.string("specialist").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("employee");
}
// step1: don function lai  comment garne ani npm run migrate:down garne.
// step1: don function lai  comment off garne  ani npm run migrate:up garne.
