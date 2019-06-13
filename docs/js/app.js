import {Liker} from "./lib.js";

const liker = new Liker();
const rootEl = document.getElementById('root');

liker.addNewMem(1, 'img/img10.jpg');
liker.addNewMem(2, 'img/img20.jpg');
liker.addNewMem(3, 'img/img30.jpg');
liker.addNewMem(4, 'img/img40.jpg');
liker.addNewMem(5, 'img/img50.jpg');

liker.mems[0].like();
liker.mems[4].like();
liker.mems[4].like();
liker.mems[2].dislike();

console.log(liker.sortByCount());


class Widget {
    constructor(liker, parentEl) {
        this.liker = liker;
        this.parentEl = parentEl;
        this.init();
    }

    init() {
        this.parentEl.innerHTML = `<div><h1>Liker App</h1></div>
                                    <div id="list"></div>`;

        this.listEl = document.getElementById('list');
        this.showMems()
    }

    showMems() {
        this.listEl.textContent = '';
        this.liker.sortByCount();
        for (const mem of this.liker.mems) {
            if (mem.score < -10) continue;
            const newMem = document.createElement('div');
            newMem.innerHTML = `<div class="border">
     <div><img src="${mem.image}" alt=""></div>
    `;
            this.listEl.appendChild(newMem);
            this.listEl.appendChild(mem.btnPlus);
            this.listEl.append(mem.score);
            this.listEl.appendChild(mem.btnMinus);

            mem.btnPlus.addEventListener('click', (event) => {
                mem.like();
                event.stopImmediatePropagation();
                this.showMems()
            });
            mem.btnMinus.addEventListener('click', (event) => {
                mem.dislike();
                event.stopImmediatePropagation();
                this.showMems()
            });

        }

    }

}

const widget = new Widget(liker, rootEl);
console.log(widget);