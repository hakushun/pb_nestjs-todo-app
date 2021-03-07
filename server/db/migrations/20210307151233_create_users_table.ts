import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
		return knex.schema.createTable('users', table => {
		table.increments();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
		table.string('username').notNullable();
		table.string('password').notNullable();
		table.string('salt').notNullable();
	})
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users');

}

