import { fetchApi } from "./fectchApi.js";
import { theloai } from "./documents.js";
import { objectBien } from "./variable.js";
import { drawProducts } from "./draw.js";

export const drawCate = () => {
    const api = `https://demo-web3-xi.vercel.app/categories`;
    fetchApi(api)
    .then(data => {
        const newArray = data.map(item => {
            return `
            <div class="item">${item}</div>
           `
        });
        theloai.innerHTML = newArray.join("");

        const chon = document.querySelectorAll(".categories .item");
        chon.forEach(item => {
            item.addEventListener("click", () => {
                objectBien.category = item.innerHTML;
                drawProducts();
            })
        })
    })
}
