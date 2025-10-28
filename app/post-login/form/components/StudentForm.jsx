"use client";
import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";

export default function StudentForm({ onSubmit, editingStudent }) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number().required("Age is required").positive().integer(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    rollNo: Yup.string().required("Roll No is required"),
    address: Yup.string().required("Address is required"),
    activities: Yup.array().of(Yup.string().required("Activity is required")),
  });

  const defaultValues = {
    name: "",
    age: "",
    email: "",
    rollNo: "",
    address: "",
    activities: [""],
  };

  return (
    <Formik
      enableReinitialize
      initialValues={editingStudent || defaultValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm({ values: defaultValues });
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="bg-white shadow-md text-black rounded-xl p-6 w-250 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {editingStudent ? "Edit Student" : "Add Student"}
          </h2>

          <div className="mb-4">
            <FormField label="Full Name" name="name" type="text" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormField label="Age" name="age" type="number" />
            <FormField label="Email" name="email" type="email" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormField label="Roll No" name="rollNo" type="text" />
            <FormField label="Address" name="address" type="text" />
          </div>

          {/* Dynamic Activities Section */}
          <div className="mb-4">
            <label className="font-semibold mb-2 block">Activities</label>
            <FieldArray name="activities">
              {({ push, remove }) => (
                <div>
                  {values.activities.map((activity, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => {
                          const updated = [...values.activities];
                          updated[index] = e.target.value;
                          setFieldValue("activities", updated);
                        }}
                        className="border border-gray-300 rounded-lg p-2 flex-grow focus:outline-none focus:border-blue-500"
                        placeholder="Enter activity (e.g. Reading)"
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          ❌
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push("")}
                    className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    ➕ Add Activity
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          <button
            type="submit"
            className={`${
              editingStudent
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white py-2 px-4 rounded-xl mt-2 w-full transition-all`}
          >
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
