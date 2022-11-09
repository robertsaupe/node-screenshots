import {openbrowser} from './module.js';

const name = "robertsaupe";
const url = "https://robertsaupe.de";

export default async function batch_open() {
    openbrowser(name + "_1024_500", url, 1024, 500, 'jpg', 1000);
    openbrowser(name + "_500_1024", url, 500, 1024, 'png', 1000);
}

batch_open();
