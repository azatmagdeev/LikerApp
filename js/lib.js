
export class Liker {
    constructor() {
        this.mems = [];
    }

    addNewMem(id, image) {
        this.mems.push(new Mem(id, image,))
    }

    sortByCount() {

        return this.mems.sort((a, b) => b.score - a.score);

    }

}

export class Mem {
    constructor(id, image, score = 0,) {
        this.id = id;
        this.image = image;
        this.score = score;
        this.btnPlus = document.createElement("button");
        this.btnPlus.textContent = '👍';

        this.btnMinus = document.createElement("button");
        this.btnMinus.textContent = '👎'
    }

    like() {
        this.score = this.score + 1;
        console.log(this.score);


    }

    dislike() {
        this.score = this.score - 1;
    }
}