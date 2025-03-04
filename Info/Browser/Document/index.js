function sayHi() {
  alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
