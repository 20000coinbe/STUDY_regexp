const str = ` HA ha Ha hA
my name is kim, yes it is my last name 'kim'
the The email is a kimdks12@gmail.com
`;

const regexp1 = new RegExp("ha", "gi");

console.log(str.match(regexp1));

console.log(regexp1.test("ha")); // true

const regexp2 = /the/;

console.log(str.match(regexp2));

const regexp3 = /the/gi;

console.log(str.match(regexp3));

const text = str.replace(regexp1, "hello");

console.log(text);
