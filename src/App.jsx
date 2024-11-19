import React, { useState } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    image: null,
  });

  const [isEditable, setIsEditable] = useState(true);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setIsEditable(false); // Disable editing after submission
    console.log("Submitted Data:", formData);
  };

  // Enable edit mode
  const handleEdit = () => {
    setIsEditable(true); // Allow editing
  };

  // Handle delete
  const handleDelete = (field) => {
    setFormData({ name: "", email: "", number: "", image: "" });

  };
  

  return (
    <div className="profilesumbitform max-w-md mx-auto mt-10 bg-gray-600 shadow-lg rounded-lg p-6">
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
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleEdit}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => setFormData({ name: "", email: "", number: "", image: null })}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete All
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
