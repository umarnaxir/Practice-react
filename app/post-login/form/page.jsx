"use client";
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";

const initialStudents = [
  {
    name: "Umar Nazir",
    age: 24,
    email: "umar@example.com",
    rollNo: "1",
    address: "Baramulla",
    activities: [
      {
        name: "Reading",
        code: "RDG",
        duration: { startTime: "2024-01-01T09:00", endTime: "2024-01-01T10:00" },
      },
    ],
  },
  {
    name: "Aurangzaib",
    age: 23,
    email: "aurang@example.com",
    rollNo: "2",
    address: "Srinagar",
    activities: [
      {
        name: "Gaming",
        code: "GMG",
        duration: { startTime: "2024-01-01T20:00", endTime: "2024-01-01T22:00" },
      },
    ],
  },
];

export default function Page() {
  const [students, setStudents] = useState(initialStudents);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleFormSubmit = (values) => {
    const exists = students.find((s) => s.rollNo === values.rollNo);

    if (exists) {
      setStudents((prev) =>
        prev.map((s) => (s.rollNo === values.rollNo ? values : s))
      );
    } else {
      setStudents((prev) => [...prev, values]);
    }

    setEditingStudent(null);
  };

  const handleEdit = (rollNo) => {
    const studentToEdit = students.find((s) => s.rollNo === rollNo);
    if (studentToEdit) setEditingStudent(studentToEdit);
  };

  const handleDelete = (rollNo) => {
    setStudents((prev) => prev.filter((s) => s.rollNo !== rollNo));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-30">
      <h1 className="text-2xl font-bold text-center mb-6">Student Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <StudentForm onSubmit={handleFormSubmit} editingStudent={editingStudent} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Students List</h2>
          {students.length === 0 ? (
            <p className="text-gray-400">No students added yet.</p>
          ) : (
            <div className="space-y-3 max-h-[70vh] overflow-y-auto">
              {students.map((student) => (
                <div
                  key={student.rollNo}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-3"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{student.name}</h3>
                      <p className="text-gray-400 text-sm">
                        Roll No: {student.rollNo}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEdit(student.rollNo)}
                        className="bg-yellow-500 px-2 py-1 rounded text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.rollNo)}
                        className="bg-red-600 px-2 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-sm">
                    <p>Age: {student.age}</p>
                    <p>Email: {student.email}</p>
                    <p>Address: {student.address}</p>
                  </div>

                  <div className="mt-2">
                    <p className="text-gray-400 text-xs mb-1">Activities:</p>
                    {student.activities.map((a, i) => (
                      <div key={i} className="bg-blue-900 p-2 rounded mb-1">
                        <p>
                          {a.name} ({a.code})
                        </p>
                        <p className="text-xs text-gray-300">
                          Start: {a.duration.startTime} <br />
                          End: {a.duration.endTime}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
