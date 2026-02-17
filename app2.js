 let { URL } = require ('url');

let url = new URL ("https://localhost:30000/path/abc?username='abc'#contact");

console.log(url.host);
console.log(url.hash);
console.log(url.hostname);
console.log(url.href);
console.log(url.searchParams.get('username'));
console.log(url.pathname);
console.log(url.port);
console.log(url.protocol);

let url1 = new URL ("https://example.com:8000/test/home?username='pqr'&id=12121#login");

console.log(url1.host);
console.log(url1.hash);
console.log(url1.hostname);
console.log(url1.href);
console.log(url1.searchParams.get('username'));
console.log(url1.pathname);
console.log(url1.port);
console.log(url1.protocol);