'use client'
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(true);
  const localizer = momentLocalizer(moment);

  const getAllEvents = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/events/get`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
        },
      });
      setEvents(res.data.events);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const toggleCalendarVisibility = () => {
    setCalendarVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
     
      {calendarVisible && (
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
              alert(`You selected an event from the calendar.`);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyCalendar;