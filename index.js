class ILoveNumbers {

    constructor(num) {

        this.anothernum = num

    }

    getNum() {

        console.log(this.anothernum)

    }

};

class IHateNumbers extends ILoveNumbers {

    constructor(num) {

        super(num ** num)

        this.num = num

    }

    getNum() {

        console.log(this.num)

    }

    getNumFromParent() {

        console.log(super.getNum())

    }

};

let obj = new IHateNumbers(5)

obj.getNum()

obj.getNumFromParent()