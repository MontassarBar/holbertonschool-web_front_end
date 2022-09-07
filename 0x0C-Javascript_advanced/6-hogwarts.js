class studentHogwarts {
    constructor(name) {
        this.privateScore = 0;
        this.name = name;
    }
    changeScoreBy(points) {
        this.privateScore = this.privateScore + points;
    }
    setName(newName) {
        this.name = newName;
    }
    rewardStudent() {
        this.changeScoreBy(1);
    }
    penalizeStudent() {
        this.changeScoreBy(-1);
    }
    getScore() {
        return this.name+ ": " + this.privateScore;
    }
}
let harry = new studentHogwarts('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
