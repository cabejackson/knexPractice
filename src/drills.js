require("dotenv").config();

const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

// Drill #1
// const searchTerm = "burger";

// knexInstance
//   .select("item_id", "name", "price", "category")
//   .from("shopping_list")
//   .where("name", "ILIKE", `%${searchTerm}%`)
//   //   .where({ category: "Main" })
//   //   .first()
//   .then((result) => {
//     console.log(result);
//   });

// searchByProduceName('holo')

// Drill #2
// function paginateProducts(page) {
//   const productsPerPage = 6;
//   const offset = productsPerPage * (page - 1);
//   knexInstance
//     .select("item_id", "name", "price", "category")
//     .from("shopping_list")
//     .limit(productsPerPage)
//     .offset(offset)
//     .then((result) => {
//       console.log(result);
//     });
// }

// paginateProducts(2);

// Drill #3
// getProductsWithImages()

// function itemsAddedAfterXDay(daysAgo) {
//   knexInstance
//     .select("name", "price")
//     .count("date_added AS days")
//     .where(
//       "date_added",
//       ">",
//       knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
//     )
//     .from("shopping_list")
//     .groupBy("name", "price")
//     .orderBy([
//       { column: "name", order: "ASC" },
//       { column: "price", order: "DESC" }
//     ])
//     .then((result) => {
//       console.log(result);
//     });
// }

// itemsAddedAfterXDay(7);

// Drill #4

function totalCostPerCategory() {
  knexInstance
    .select("category")
    .sum("price as Total")
    .from("shopping_list")
    .groupBy("category")
    .orderBy([
      //   { column: "category", order: "ASC" },
      { column: "category", order: "DESC" }
      //   { column: "checked" }
    ])
    .then((result) => {
      console.log(result);
    });
}
totalCostPerCategory();

function totalCostPerCategory2() {
  knexInstance
    .select("category")
    .sum("price as Total-2")
    .from("shopping_list")
    .groupBy("category")
    .orderBy([
      //   { column: "category", order: "ASC" },
      { column: "category", order: "ASC" }
      //   { column: "checked" }
    ])
    .then((result) => {
      console.log(result);
    });
}
totalCostPerCategory2();

//testinggg
