const students = [
    {
        name: "John", grade: 9, subjects: ["Math", "Science", "History"]
    },
    {
        name: "Alice", grade: 10, subjects: ["Math", "Biology", "Physics"]
    },
    {
        name: "Bob", grade: 11, subjects: ["Chemistry", "Physics", "Literature"]
    }
];
function TransformStudents(students){
    return students.reduce((result,student) => {
        student.subjects.forEach(subject => {
            result[subject] = result[subject] || [];
            result[subject].push(student.name);
        });
        return result;
    },{});
};
console.log(TransformStudents(students))