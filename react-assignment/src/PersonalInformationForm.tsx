import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PersonalInformationForm: React.FC = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <Field type="text" name="fullName" className="form-input" />
        <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs italic" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Field type="email" name="email" className="form-input" />
        <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <Field type="date" name="dob" className="form-input" />
        <ErrorMessage name="dob" component="div" className="text-red-500 text-xs italic" />
      </div>
    </>
  );
};

export default PersonalInformationForm;
