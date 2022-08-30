person = {
    name: "james",
    dataFun: function (thing) {
        console.log(this.name + " hello dear" + thing);
    },
};

person.dataFun("world");

person.dataFun.call({ name: "raj" }, "world");
person.dataFun("world");

var func = person.dataFun.bind({ name: "james" });

func("world");

