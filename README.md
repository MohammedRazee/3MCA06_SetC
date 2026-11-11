# CA Lab Exam - Section 3MCA06 - Set C

**Store Product Inventory**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** store
- **Collection:** products
- **Fields:** name (text), category (text), price (number), stock (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use store
db.products.insertMany([
  { name: "Wireless Mouse", category: "Electronics", price: 699, stock: 25 },
  { name: "Notebook Pack", category: "Stationery", price: 150, stock: 8 },
  { name: "Steel Bottle", category: "Kitchen", price: 450, stock: 30 },
  { name: "Bluetooth Speaker", category: "Electronics", price: 1899, stock: 6 },
  { name: "Gel Pen Set", category: "Stationery", price: 120, stock: 40 },
  { name: "Non-stick Pan", category: "Kitchen", price: 1250, stock: 4 },
  { name: "USB Charger", category: "Electronics", price: 549, stock: 18 },
  { name: "Desk Organizer", category: "Stationery", price: 399, stock: 12 },
  { name: "Mixing Bowl", category: "Kitchen", price: 299, stock: 9 },
  { name: "Headphones", category: "Electronics", price: 2499, stock: 3 },
  { name: "Sketch Book", category: "Stationery", price: 220, stock: 15 },
  { name: "Lunch Box", category: "Kitchen", price: 350, stock: 22 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Products".  
   Expected: 12 products.
3. **Search.** Choose Kitchen and click Search.  
   Expected: 4 products: Steel Bottle, Non-stick Pan, Mixing Bowl, Lunch Box.
4. **Filter.** Type 10 in "Stock less than" and click Filter.  
   Expected: 5 products: Notebook Pack, Bluetooth Speaker, Non-stick Pan, Mixing Bowl, Headphones.
5. **3 Costliest Products.** Click "3 Costliest Products".  
   Expected: Headphones (2499), Bluetooth Speaker (1899), Non-stick Pan (1250), in this order.
6. **Add Product.** Fill the form with Name: Laptop Stand, Category: Electronics, Price: 999, Stock: 14. Click "Add Product".  
   Expected: The message "Product saved" appears and the list shows 13 products, including Laptop Stand.
