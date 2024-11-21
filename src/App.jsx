import React, { useState } from "react";
import axios from "axios";

const UpdateProfile = () => {
  const API_URL = "https://user-login-rose.vercel.app/";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    image: null,
  });


  const fetchdata = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  const [isEditable, setIsEditable] = useState(true);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setIsEditable(false); 
    console.log("Submitted Data:", formData);
  };

  const handleEdit = () => {
    setIsEditable(true); 
  };

  const handleDelete = (field) => {
    setFormData({ name: "", email: "", number: "", image: "" });

  };
  

  return (
    <div className="profilesumbitform max-w-md mx-auto mt-10 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Profile
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditable}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {/* <button
            type="button"
            onClick={() => handleDelete("name")}
            className="text-red-500 mt-1 text-sm"
          >
            Delete
          </button> */}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditable}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {/* <button
            type="button"
            onClick={() => handleDelete("email")}
            className="text-red-500 mt-1 text-sm"
          >
            Delete
          </button> */}
        </div>

        {/* Number Field */}
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number:
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            disabled={!isEditable}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {/* <button
            type="button"
            onClick={() => handleDelete("number")}
            className="text-red-500 mt-1 text-sm"
          >
            Delete
          </button> */}
        </div>

        {/* Image Field */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            disabled={!isEditable}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {formData.image && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <button
                type="button"
                onClick={() => handleDelete("image")}
                className="text-red-500 mt-1 text-sm"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleEdit}
            className="bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => setFormData({ name: "", email: "", number: "", image: null })}
            className="bg-gradient-to-r from-red-600 via-red-700 to-red-900 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete All
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
