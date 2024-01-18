function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["js", "java", "c++"],
        sayName: function () {
            console.log(this.name);
        }
    };
    console.log(member.skills[0]);
    member.sayName();
}