function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }
    let students = [];
    for (i = 0; i < numbersOfStudents; i++) {
        students[i] = studentSeat(i + 1);
    }
    return students;
}
// if "Identifier 'classRoom' has already been declared" error is displayed just replace 'classRoom' with another word
let classRoom = createClassRoom(10);
