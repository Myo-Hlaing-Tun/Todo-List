let regex = /^([a-z]+)[\d]+(\.[a-z]+)*@[a-z]+\.([a-z]+)$/;
let string = "razor@gmail.com";
console.log(regex.test(string))