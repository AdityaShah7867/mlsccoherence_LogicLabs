'use client'
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

// Define Event type
interface MyEvent extends Event {
  // Define your event properties here
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<MyEvent[]>([]);
  const [calendarVisible, setCalendarVisible] = useState(true);
  const localizer = momentLocalizer(moment);

  const getAllEvents = async () => {
    try {
      const res = await axios.get<{ events: MyEvent[] }>(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/events/get`, {
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
      {/* <button
        onClick={toggleCalendarVisibility}
        className="p-2 bg-blue-500 text-white mt-2 rounded-md mb-2"
      >
        {calendarVisible ? "Hide Calendar" : "Show Calendar"}
      </button> */}
      {calendarVisible && (
        <div style={{ height: "500px" }}>
          <Calendar<MyEvent>
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className=""
            style={{ height: 300, width: 300}}
            onSelectEvent={(event: MyEvent) => {
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
