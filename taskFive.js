// 1. Create an object `student` with the following properties:
//    A - `firstName` (string)
//    B - `lastName` (string)
//    C - `age` (number)
//    D - `grades` (an array of numbers representing test score

const student = {
    firstName: "Ali",
    lastName: "Abdeljawad",
    age: 32,
    grades: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],


    // 2. Add methods to the `student` object:
    // A - `fullName`: This method should return the student's full name by combining `firstName` and `lastName`.
    // B - `calculateAverage`: This method should return the average grade from the `grades` array.
    // C - `getStudentInfo`: This method should return a string like "Student: [fullName], Age: [age], Average Grade: [averageGrade]."

    fullName: function (){
        return `${this.firstName} ${this.lastName}`;
    },

    calculateAverage: function (){
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    },

    getStudentInfo: function (){
        return `Student: ${this.fullName()}, Age: ${this.age}, Average Grade: ${this.calculateAverage()}`;
    }
}

// 3. Call the `getStudentInfo` method.
student.getStudentInfo();
