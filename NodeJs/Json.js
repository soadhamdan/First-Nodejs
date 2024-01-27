const http = require('node:http');
const superHero = {
    firstName: 'Soad',
    lastName: "Alzen"
}
const server = http.createServer((reg, res) => {
    res.writeHead(200, { "content-Type": "application/json" });
    //console.log(reg)

    res.end("Hello  Super Hero " + JSON.stringify(superHero.firstName + " " + superHero.lastName + "  Queen").toUpperCase())
})
server.listen(1000, () => {
    console.log("the page Work in Port:1000")
})