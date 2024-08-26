"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Function to fetch user data
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Check if the response is not ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data); // Set users data to state
      } catch (error) {
        setError(error.message); // Set error message to state
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchUsers(); // Call the function to fetch data

  }, []); // Empty dependency array to run the effect only once
  return (
    <div className="container mx-auto min-h-screen p-4">
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">City</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="5" className="text-center py-4">Loading...</td>
            </tr>
          )} {/* Show loading indicator */}

          {error && (
            <tr>
              <td colSpan="5" className="text-center text-red-500 py-4">Error: {error}</td>
            </tr>
          )} {/* Show error message if there is an error */}

          {!loading && !error && (
            users.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.address.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
