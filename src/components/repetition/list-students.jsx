import React from "react";
import Students from "../../data/students";

const ListStudents = (props) => {
  const lis = Students.map((student, i) => {
    return (
      <li key={i}>
        {student.id}) {student.nome} -&gt; {student.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
};

export default ListStudents;
