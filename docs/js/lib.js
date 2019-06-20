export class Liker {
    constructor() {
        this.mems = [];
    }

    addNewMem(id, image) {
        this.mem = new Mem(id, image,);
        this.mems.push(this.mem)
    }

    sortByCount() {

        this.mems.sort((a, b) => b.score - a.score);
        return this.mems;
    }



}

export class Mem {
    constructor(id, image, score = 0,) {
        this.id = id;
        this.image = image;
        this.score = score;
    }

    like() {
        this.score = this.score + 1;
        console.log(this.score);
    }

    dislike() {
        this.score = this.score - 1;
        console.log(this.score);
    }
}