import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AddressInformationForm: React.FC = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
          Street Address
        </label>
        <Field type="text" name="streetAddress" className="form-input" />
        <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-xs italic" />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <Field type="text" name="city" className="form-input" />
        <ErrorMessage name="city" component="div" className="text-red-500 text-xs italic" />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          State
        </label>
        <Field type="text" name="state" className="form-input" />
        <ErrorMessage name="state" component="div" className="text-red-500 text-xs italic" />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
          Zip Code
        </label>
        <Field type="text" name="zipCode" className="form-input" />
        <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs italic" />
      </div>
    </>
  );
};

export default AddressInformationForm;
