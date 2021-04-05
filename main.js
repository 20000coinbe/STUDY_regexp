const str = ` HA ha Ha hA,
my name is kim, yes it is my last name 'kim',
the The email is a kimdks12@gmail.com
http://www.naver.com
https://daum.net
The hoop 010-1234-5678
fox is a dog
nnnnmmmmmm`;

const regexp1 = new RegExp("ha", "gi");

console.log(str.match(regexp1));

console.log(regexp1.test("ha")); // true

const regexp2 = /the/;

console.log(str.match(regexp2));

const regexp3 = /the/gi;

console.log(str.match(regexp3));

const text = str.replace(regexp1, "hello");

console.log(text);

const regexp4 = /\,$/gm; // g옵션이 있어야 2개, 없으면 1개

console.log(str.match(regexp4));

console.log(str.match(/^t/gim)); // the The
console.log(str.match(/^T/gm)); // The

console.log(str.match(/m$/g)); // 문자열전체를 한문자로 보기때문에
console.log(str.match(/m$/gm)); // [m, m]

console.log(str.match(/h..p/g)); // [http, http, hoop]
console.log(str.match(/https?/g)); // [http, https]

console.log(str.match(/fox|dog/g)); // [dog, fox]

console.log(str.match(/n{3}/g)); // ['nnn']
console.log(str.match(/m{3,5}/g)); // ['mmmmm']

console.log(str.match(/\w{2,3}/gi)); // Array(46) 두글자씩 쪼개서
console.log(str.match(/\b\w{2,3}\b/gi)); // \b 숫자와 알파벳이 아닌 글자로 경계를 만들어낸다
