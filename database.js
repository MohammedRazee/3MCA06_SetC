// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: store



// Step 3: Create the schema and the model here.
//         Model name: Product   (Mongoose saves it in the "products" collection)
//         Fields: name (String), category (String), price (Number), stock (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the products in the collection.
export async function getAllProducts() {

}


// category comes from the "Search by category" box on the page, for example "Kitchen".
// Return the products whose category matches it.
export async function findProductsByCategory(category) {

}


// maxStock is a number typed on the page, for example 10.
// Return the products whose stock is less than maxStock.
export async function findLowStockProducts(maxStock) {

}


// Return the 3 products with the highest price, highest first.
export async function getThreeCostliestProducts() {

}


// product comes from the "Add Product" form, for example:
//   { name: "Table Lamp", category: "Electronics", price: 999, stock: 14 }
// Save it in the database and return the saved product.
export async function addProduct(product) {

}
