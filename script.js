class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        this.updateAttendance(true);
    }

    absent() {
        this.updateAttendance(false);
    }

    updateAttendance(isPresent) {
        const lastIndex = this.attendance.findIndex(element => element === undefined);
        if (lastIndex !== -1) {
            this.attendance[lastIndex] = isPresent;
        } else {
            console.log("Масив відвідуваності повністю заповнений.");
        }
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRatio = this.calculateAttendanceRatio();

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 70 || attendanceRatio > 0.7) {
            return "Добре, але можна краще.";
        } else {
            return "Редиска!";
        }
    }

    calculateAttendanceRatio() {
        const presentCount = this.attendance.filter(isPresent => isPresent === true).length;
        const totalClasses = this.attendance.length;

        if (totalClasses === 0) {
            return 0;
        }

        return presentCount / totalClasses;
    }
}


const student1 = new Student("Іван", "Петров", 2000);
const student2 = new Student("Марія", "Іванова", 2001);
const student3 = new Student("Петро", "Сидоров", 1999);

student1.grades = [95, 88, 92, 97];
student2.grades = [78, 85, 89, 94];
student3.grades = [60, 70, 75, 80];

student1.present();
student1.absent();
student1.present();
student1.present();
student1.absent();

console.log(student1.summary());
console.log(student2.summary()); 
console.log(student3.summary());
