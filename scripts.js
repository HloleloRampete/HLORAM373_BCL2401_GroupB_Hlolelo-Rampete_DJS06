// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Log each name and each province to the console
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));

// Log uppercase transformation of provinves 
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Create and log a new array containing the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sort and log the provinces alphabetically using the sort
provinces.sort((a, b) => a.localeCompare(b));
console.log(provinces);

// Filter out the provinces containing "Cape" and log the count of remaining provinces.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Number of provinces without "Cape":', filteredProvinces.length);

// Create a boolean array using map and some to determine if a name contains the letter 'S'
const namesContainS = names.map(name => name.includes('S'));
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
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(
  // 1. Log Products
  // Use map to get an array of product names and join them into a single string separated by commas.
  products.map((product) => product.product),

  // 2. Filter by Name Length
  // Use filter to create a new array with products whose names are 5 characters or fewer.
  products.filter((product) => product.product.length <= 5),

)
