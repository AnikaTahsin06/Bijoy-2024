"use client";

import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    // Validate Fullname
    if (!formData.fullname) {
      newErrors.fullname = 'Fullname is required';
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate Zip Code
    const zipCodePattern = /^\d+$/;
    if (!formData.zipCode || !zipCodePattern.test(formData.zipCode)) {
      newErrors.zipCode = 'Zip code must be a number';
      isValid = false;
    }

    // Validate Password
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    // Validate Confirm Password
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    } else if (formData.confirmPassword.length < 8) {
      newErrors.confirmPassword = 'Confirm password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle successful form submission
      setConfirmationMessage('Signup successful!'); // Set confirmation message
      setFormData({
        fullname: '',
        email: '',
        zipCode: '',
        password: '',
        confirmPassword: '',
      }); // Clear form fields
      setErrors({
        fullname: '',
        email: '',
        zipCode: '',
        password: '',
        confirmPassword: '',
      }); // Clear errors
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen p-4 max-w-lg mx-auto">
      {confirmationMessage && (
        <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md">
          {confirmationMessage}
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Signup Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Fullname</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
