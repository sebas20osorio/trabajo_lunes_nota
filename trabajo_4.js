// Una función que imprima el cuadrado de n x n

let size = 10; 
let row = ""; 

for (let i = 1; i <= size; i++) {
  row += "n";
}
console.log(row);

for (let i = 2; i < size; i++) {
  row = "n";
  for (let j = 2; j < size; j++) {
    row += " ";
  }
  row += "n";
  console.log(row);
}

row = "";
for (let i = 1; i <= size; i++) {
  row += "n";
}
console.log(row); 
  