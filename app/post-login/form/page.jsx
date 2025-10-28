"use client";
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";

export default function Page() {
  const [students, setStudents] = useState([
    {
      name: "Umar Nazir",
      age: 24,
      email: "umar@example.com",
      rollNo: "1",
      address: "Baramulla",
    },
    {
      name: "Aurangzaib",
      age: 23,
      email: "aurang@example.com",
      rollNo: "2",
      address: "Srinagar",
    },
    {
      name: "Syed Owais",
      age: 24,
      email: "owais@example.com",
      rollNo: "3",
      address: "Budgam",
    },
    {
      name: "Khalid Jan",
      age: 24,
      email: "khalid@example.com",
      rollNo: "4",
      address: "Sopore",
    },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null); // to hold data when editing

  const handleFormSubmit = (values) => {
    console.log("Form Submitted:", values);

    // Check if student already exists (by rollNo)
    setStudents((prevStudents) => {
      const existingIndex = prevStudents.findIndex(
        (student) => student.rollNo === values.rollNo
      );

      if (existingIndex !== -1) {
        // Update existing student
        const updated = [...prevStudents];
        updated[existingIndex] = values;
        return updated;
      } else {
        // Add new student
        return [...prevStudents, values];
      }
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEditingStudent(null); // reset edit mode
  };

  const handleEdit = (rollNo) => {
    const studentToEdit = students.find((s) => s.rollNo === rollNo);
    if (studentToEdit) {
      setEditingStudent(studentToEdit);
    }
  };

  const handleDelete = (rollNo) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.rollNo !== rollNo)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center pt-14 min-h-screen bg-gray-100 p-4">
      <StudentForm onSubmit={handleFormSubmit} editingStudent={editingStudent} />

      {submitted && (
        <div className="mt-6 text-green-600 font-semibold text-lg">
          ✅ Student record saved successfully!
        </div>
      )}

      <div className="mt-10 text-black w-250 h-85 bg-white shadow-lg rounded-xl p-6 overflow-y-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Student List</h3>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Roll No</th>
              <th className="border p-2">Address</th>
              <th className="border p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rollNo} className="hover:bg-gray-100">
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.age}</td>
                <td className="border p-2">{student.email}</td>
                <td className="border p-2">{student.rollNo}</td>
                <td className="border p-2">{student.address}</td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(student.rollNo)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.rollNo)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-3">
                  No students available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
