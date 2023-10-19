let a = +prompt('Son kiriting')
while (isNaN(a) || a == 0) {
    a = +prompt("Sonni qaytadan kiriting")
}
let b = +prompt('Darajani kiriting')
while (isNaN(b) || b == 0) {
    b = +prompt("Darajani qaytadan kiriting")
}
let c = 1;
for (let i = 1; i <= b; i++) {
    c *= a
}
alert(c)