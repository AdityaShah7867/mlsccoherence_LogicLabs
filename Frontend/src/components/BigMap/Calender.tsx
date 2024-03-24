'use client'
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios'; // Import axios for making HTTP requests

const MyCalendar = () => {
  const [events, setEvents] = useState([]); // Initialize events state as an empty array

  useEffect(() => {
    // Use useEffect to fetch data when component mounts
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/schedule/getAll');
        // Extract events data from response
        const eventData = response.data.map(item => ({
          id: item._id,
          title: item.title,
          start: new Date(item.date),
          end: new Date(item.date), // Assuming events are single-day, so start and end are the same
          color: "#FF5722", // Example color
        }));
        setEvents(eventData); // Update events state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData(); // Call the function to fetch data
  }, []); // Empty dependency array to ensure useEffect runs only once

  const localizer = momentLocalizer(moment);

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="mr-12"
        style={{ height: 500 }}
        onSelectEvent={(event) => {
          console.log(event);
          alert(`You selected "${event.title}" from the calendar.`);
        }}
      />
    </div>
  );
};

export default MyCalendar;
