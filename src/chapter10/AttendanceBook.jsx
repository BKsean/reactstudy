import React from "react";

const students = [
{
    id: 1,
    name : "test1",
},
{
    id: 2,
    name : "test2",
},
{
    id: 3,
    name : "test3",
},
{
    id: 4,
    name : "test4",
},
{
    id: 5,
    name : "test5",
},

];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student,index) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;