import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PersonalInformationForm from './PersonalInformationForm';
import AddressInformationForm from './AddressInformationForm';
import AccountInformationForm from './AccountInformationForm';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          dob: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          username: '',
          password: '',
        }}
        validationSchema={
          step === 1
            ? Yup.object().shape({
                fullName: Yup.string().min(3, 'Full Name must be at least 3 characters').required('Full Name is required'),
                email: Yup.string().email('Invalid email format').required('Email is required'),
                dob: Yup.date()
                  .required('Date of Birth is required')
                  .test('is-at-least-one-year-old', 'Must be at least 1 year old', function (value) {
                    const today = new Date();
                    const birthDate = new Date(value);
                    const age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                      return age - 1 >= 1;
                    }
                    return age >= 1;
                  }),
              })
            : step === 2
            ? Yup.object().shape({
                streetAddress: Yup.string().required('Street Address is required'),
                city: Yup.string().matches(/^[^\d]+$/, 'City cannot contain numbers').required('City is required'),
                state: Yup.string().matches(/^[^\d]+$/, 'State cannot contain numbers').required('State is required'),
                zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid zip code').required('Zip Code is required'),
              })
            : Yup.object().shape({
                username: Yup.string().required('Username is required'),
                password: Yup.string()
                  .required('Password is required')
                  .min(8, 'Password must be at least 8 characters long')
                  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, and one number'),
              })
        }
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            // Simulating API call delay
            alert(JSON.stringify(values, null, 2)); // Handle form submission, e.g., make API call
            setSubmitting(false);
          }, 1000); // Adjust the delay as needed
        }}
      >
        {({ isValid, validateForm, dirty, errors, isSubmitting }) => (
          <Form>
            {/* Progress Indicator */}
            <div className="mb-8 flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">Step {step}</p>
                <div className="flex mt-2">
                  {[1, 2, 3].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      className={`w-6 h-6 rounded-full flex items-center justify-center bg-blue-500 text-white ${
                        step === stepNumber ? 'font-bold' : 'font-semibold opacity-50'
                      }`}
                    >
                      {stepNumber}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-gray-600">
                {step === 1 ? 'Personal Information' : step === 2 ? 'Address Information' : 'Account Information'}
              </div>
            </div>

            {/* Display Required Fields Message */}
            {dirty && Object.keys(errors).length > 0 && (
              <div className="mb-4 text-red-500">Please fill in all required fields and correct any validation errors.</div>
            )}

            {/* Render Form Based on Step */}
            {step === 1 && <PersonalInformationForm />}
            {step === 2 && <AddressInformationForm />}
            {step === 3 && <AccountInformationForm />}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step !== 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Previous
                </button>
              )}
              {step !== 3 && (
                <button
                  type="button"
                  onClick={() => {
                    validateForm().then((errors) => {
                      if (Object.keys(errors).length === 0) {
                        nextStep();
                      }
                    });
                  }}
                  className={`${
                    dirty && Object.keys(errors).length === 0 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 pointer-events-none'
                  } text-white font-bold py-2 px-4 rounded`}
                  disabled={!dirty || Object.keys(errors).length > 0 || isSubmitting}
                >
                  Next
                </button>
              )}
              {step === 3 && (
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;

