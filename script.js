(() => {
  function multiplicationTable(num) {
    console.log(`%c---Multiplication Table of ${num}`, "color: green");
    for (let iteration = 1; iteration <= 10; iteration++) {
      const product = num * iteration;
      console.log(`${num} x ${iteration} = %c${product}`, "color: yellow");
    }
  }
  // test 1
  multiplicationTable(5);
  // test 2
  multiplicationTable(3);
  // test 3
  multiplicationTable(8);
  // test 4
  multiplicationTable(19);
  // test 5
  multiplicationTable(29);
})();
