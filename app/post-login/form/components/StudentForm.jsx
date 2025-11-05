"use client";
import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";

//  Form validation rules using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  age: Yup.number().required("Age required").positive(),
  email: Yup.string().email("Invalid email").required("Email required"),
  rollNo: Yup.string().required("Roll No required"),
  address: Yup.string(),
  activities: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Activity name required"),
      code: Yup.string().required("Code required"),
      duration: Yup.object({
        startTime: Yup.string().required("Start time required"),
        endTime: Yup.string().required("End time required"),
      }),
    })
  ),
});

//  Default form structure
const defaultValues = {
  name: "",
  age: "",
  email: "",
  rollNo: "",
  address: "",
  activities: [
    { name: "", code: "", duration: { startTime: "", endTime: "" } },
  ],
};

export default function StudentForm({ onSubmit, editingStudent }) {
  return (
    <Formik
      enableReinitialize
      initialValues={editingStudent || defaultValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-3 text-center">
            {editingStudent ? "Edit Student" : "Add Student"}
          </h2>

          {/* 🧠 Basic Fields */}
          <FormField name="name" type="text" placeholder="Full Name" />
          <FormField name="age" type="number" placeholder="Age" />
          <FormField name="email" type="email" placeholder="Email" />
          <FormField
            name="rollNo"
            type="text"
            placeholder="Roll No"
            disabled={!!editingStudent}
          />
          <FormField name="address" type="text" placeholder="Address" />

          {/* 🎯 Activities Section */}
          <FieldArray name="activities">
            {(arrayHelpers) => (
              <div>
                <h3 className="text-sm font-semibold mt-3 mb-2">
                  Activities:
                </h3>
                {values.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-3 rounded mb-2 border border-gray-700"
                  >
                    {/* Name and Code */}
                    <div className="flex gap-2 mb-2">
                      <Field
                        name={`activities.${index}.name`}
                        placeholder="Activity Name"
                        className="flex-1 bg-gray-700 p-2 rounded text-sm"
                      />
                      <Field
                        name={`activities.${index}.code`}
                        placeholder="Code"
                        className="w-1/3 bg-gray-700 p-2 rounded text-sm"
                      />
                    </div>

                    {/* Duration */}
                    <Field
                      type="datetime-local"
                      name={`activities.${index}.duration.startTime`}
                      className="w-full bg-gray-700 p-2 rounded text-sm mb-2"
                    />
                    <Field
                      type="datetime-local"
                      name={`activities.${index}.duration.endTime`}
                      className="w-full bg-gray-700 p-2 rounded text-sm"
                    />

                    {/* Buttons */}
                    <div className="flex justify-end mt-2 gap-2">
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className="bg-red-600 text-xs px-2 py-1 rounded"
                      >
                        Remove
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            name: "",
                            code: "",
                            duration: { startTime: "", endTime: "" },
                          })
                        }
                        className="bg-green-600 text-xs px-2 py-1 rounded"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </FieldArray>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full mt-3 py-2 rounded text-white ${
              editingStudent
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
