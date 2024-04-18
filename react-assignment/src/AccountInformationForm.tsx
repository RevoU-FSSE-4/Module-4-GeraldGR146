import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AccountInformationForm: React.FC = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <Field type="text" name="username" className="form-input" />
        <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <Field type="password" name="password" className="form-input" />
        <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
      </div>
    </>
  );
};

export default AccountInformationForm;
