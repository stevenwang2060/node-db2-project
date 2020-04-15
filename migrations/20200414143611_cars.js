
exports.up = function (knex) {
    return knex.schema.createTable("cars", (table) => {
      table.increments();
      table.integer("VIN").notNullable;
      table.string("make").notNullable;
      table.string("model").notNullable;
      table.integer("mileage").notNullable;
      table.text("transmission-type").notNullable;
      table.text("status");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
  };