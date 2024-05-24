// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// Log each name and each province to the console
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

// Log uppercase transformation of provinves
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// Create and log a new array containing the length of each name
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Sort and log the provinces alphabetically using the sort
provinces.sort((a, b) => a.localeCompare(b));
console.log(provinces);

// Filter out the provinces containing "Cape" and log the count of remaining provinces.
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log('Number of provinces without "Cape":', filteredProvinces.length);

// Create a boolean array using map and some to determine if a name contains the letter 'S'
const namesContainS = names.map((name) => name.includes("S"));
console.log(namesContainS);

// Initialize an empty object to store the name-province mappings
const namesToProvinces = names.reduce((acc, name, index) => {
  // Add a new key-value pair to the accumulator object for each name and its corresponding province
  acc[name] = provinces[index];
  // Return the accumulator object for the next iteration
  return acc;
}, {});
console.log(namesToProvinces);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  // 1. Log Products
  // Use map to get an array of product names and join them into a single string separated by commas.
  products.map((product) => product.product).join(", "),

  // 2. Filter by Name Length
  // Use filter to create a new array with products whose names are 5 characters or fewer.
  products.filter((product) => product.product.length <= 5),

  // 3. Price Manipulation
  // Filter products to exclude those with empty prices.
  // Map the remaining products to convert the price to a number.
  // Use reduce to sum up the prices of the products.
  products
    .filter((product) => String(product.price).trim() !== "")
    .map((product) => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0),

  // 4. Concatenate Product Names
  // Use reduce to accumulate a string that includes all product names concatenated together.
  products.reduce((acc, product) => acc + product.product, ""),

  // 5. Find Extremes in Prices
  // Filter and map products to ensure prices are numeric.
  // Use reduce to find the product with the highest price.
  // Use reduce to find the product with the lowest price.
  // Return a formatted string with the names of the highest and lowest priced products.
  (() => {
    const pricedProducts = products
      .filter((product) => String(product.price).trim() !== "")
      .map((product) => ({ ...product, price: Number(product.price) }));
    const highest = pricedProducts.reduce((max, product) =>
      product.price > max.price ? product : max
    );
    const lowest = pricedProducts.reduce((min, product) =>
      product.price < min.price ? product : min
    );
    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })(),

  // 6. Object Transformation
  // Use reduce to transform the products array into a new array with objects having 'name' and 'cost' keys.
  products.reduce((acc, { product, price }) => {
    acc.push({ name: product, cost: price });
    return acc;
  }, [])
);
