function myName() {

    return this.myname

}

const myNameButArrow = () => console.log(this.myname)

const person1 = { myname: "Mehul", myName }

const person2 = { myname: "James", myName }

const person3 = { myname: "Enzo", myName: myNameButArrow }

console.log(person1.myName())

console.log(person2.myName())

console.log(person3.myName())