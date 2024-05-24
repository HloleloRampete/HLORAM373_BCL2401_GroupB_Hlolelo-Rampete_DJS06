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

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

