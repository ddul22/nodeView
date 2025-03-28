// js with server/03_sort.js
let fruits = ["Banana", "Orange",
              "Apple", "Mango"];
fruits.sort();
console.log(fruits);

let points = [40, 100, 1, 25, 5, 10];
points.sort();
console.log(points);

points.sort(function(a,b){ //내림차순 정렬
  return a-b;
});
console.log(points);