const http = require('node:http')
const fs = require('node:fs')
const server = http.createServer((reg, res) => {
    const name = "SOAD Hamdan";
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // fs.createReadStream('./soad.html').pipe(res);
    let html = fs.readFileSync('./soad.html', 'utf-8');
    html = html.replace(`{{name}}`, name)

    res.end(html);

})
server.listen(7000, () => {
    console.log('The Web Page Work in Port:7000 ')
})