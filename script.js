function convertTemp (temp, scale) {
	if (scale === "C") {
      return ((temp - 32) * (5/9));
    }
    else {
      return ((temp * (9/5) + 32));
    }
 }

var result = convertTemp(212, "C");
console.log(result);

var result = convertTemp(32, "C");
console.log(result);

var result = convertTemp(65, "C");
console.log(result);

var result = convertTemp(-40, "F");
console.log(result);

/*C = ((temp - 32) * (5/9))
F = (temp * (9/5) + 32))*/