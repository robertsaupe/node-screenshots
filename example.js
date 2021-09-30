const {sleep, openbrowser} = require("./module");

const name = "robertsaupe";
const url = "https://robertsaupe.de";

(async function() {
    openbrowser(name + "_1024_500", url, 1024, 500, 'jpg', 11000);
    //await sleep(15000);
    openbrowser(name + "_500_1024", url, 500, 1024, 'png', 11000);
})();