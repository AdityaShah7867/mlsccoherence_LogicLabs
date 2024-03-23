import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
       <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Room Status</h1>
  {/* Task Management Section */}
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h2 className="text-lg font-semibold mb-2">Task Management</h2>
    <div className="flex items-center space-x-4 mb-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Task</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add Contractor</button>
    </div>
  </div>
  {/* Professional Dashboard Section */}
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-lg font-semibold mb-2">Room Dashboard</h2>
    <table className="w-full">
      <thead>
        <tr className="border-b text-left">
          <th className="py-2">Work Title</th>
          <th className="py-2">Contractor Status</th>
          <th className="py-2">Priority</th>
          <th className="py-2">Date</th>
          <th className="py-2">Budget</th>
        </tr>
      </thead>
      <tbody>
        {/* Example row */}
        <tr className="border-b">
          <td className="py-2">Project X</td>
          <td className="py-2">Contractor Name - <span className="text-orange-500 font-semibold">In Progress</span></td>
          <td className="py-2">High</td>
          <td className="py-2">2024-03-03</td>
          <td className="py-2">$5000</td>
        </tr>
        {/* Example row */}
        <tr className="border-b">
          <td className="py-2">Project Y</td>
          <td className="py-2">Contractor Name - <span className="text-green-500 font-semibold">Completed</span></td>
          <td className="py-2">Medium</td>
          <td className="py-2">2024-03-05</td>
          <td className="py-2">$3000</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default page;
