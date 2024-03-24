"use client"
import axios from 'axios';
import React, { useState } from 'react';

const page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    platforms: ['linkedin']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    const respone=await axios.post(`http://localhost:4000/api/schedule/create`,{
        title:formData.title,
        description:formData.description,
        date:formData.date,
        time:formData.time,
        platforms:formData.platforms
        
    })

    console.log(respone)
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Platforms
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="platforms"
                value="linkedin"
                checked={formData.platforms.includes('linkedin')}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    platforms: checked
                      ? [...prevFormData.platforms, 'linkedin']
                      : prevFormData.platforms.filter((p) => p !== 'linkedin')
                  }));
                }}
              />
              <span className="ml-2">LinkedIn</span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
