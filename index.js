const obj = {

    myFunction: function () {

        return this

    },

    coolFunction: () => {

        return this

    }

}

console.log(obj.myFunction())

console.log(obj.coolFunction())