import { useState } from "react";
import "./Step2.css";

export default function Step2() {

  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");

  const [slots, setSlots] = useState([]);

  const [date, setDate] = useState("");
  const [dayName, setDayName] = useState("");

  const [fromTime, setFromTime] = useState("");
  const [fromPeriod, setFromPeriod] = useState("AM");

  const [toTime, setToTime] = useState("");
  const [toPeriod, setToPeriod] = useState("AM");


  const handleDateChange = (value) => {
    setDate(value);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const selectedDate = new Date(value);
    const day = days[selectedDate.getDay()];
    setDayName(day);
  };


  const addRoom = () => {

    if (!roomName || !capacity) return;

    const newRoom = {
      name: roomName,
      capacity: capacity,
      utilization: Math.floor(Math.random() * 100)
    };

    setRooms([...rooms, newRoom]);
    setRoomName("");
    setCapacity("");
  };


  const addSlot = () => {

    if (!date || !fromTime || !toTime) return;

    const newSlot = {
      id: `T${slots.length + 1}`,
      date,
      day: dayName,
      from: `${fromTime} ${fromPeriod}`,
      to: `${toTime} ${toPeriod}`
    };

    setSlots([...slots, newSlot]);

    setDate("");
    setFromTime("");
    setToTime("");
  };


  return (

    <div className="step2-wrapper">

      <div className="step2-container">

        {/* Exam Rooms */}

        <div className="card">

          <h3>Exam rooms</h3>

          <div className="labels">
            <label>Room name</label>
            <label>Capacity</label>
          </div>

          <div className="inputs">

            <input
              placeholder="e.g. Hall A"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />

            <input
              placeholder="e.g. 100"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />

          </div>


          <button className="add-btn" onClick={addRoom}>
            + Add room
          </button>


          <div className="table-header">
            <span>Room</span>
            <span>Capacity</span>
            <span>Utilization</span>
          </div>


          {rooms.map((room, index) => (

            <div key={index} className="room-row">

              <span>{room.name}</span>

              <span>{room.capacity} seats</span>

              <div className="util-bar">
                <div
                  className="util-fill"
                  style={{ width: `${room.utilization}%` }}
                />
              </div>

            </div>

          ))}

        </div>



        {/* Time Slots */}

        <div className="card">

          <h3>Time slots</h3>


          <div className="labels">
            <label>Date</label>
            <label>Day</label>
          </div>


          <div className="inputs">

            <input
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
            />

            <input
              value={dayName}
              readOnly
            />

          </div>



          <div className="labels">
            <label>From</label>
            <label>Until</label>
          </div>



          <div className="inputs">


            <div className="time-box">

              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
              />

              <select
                value={fromPeriod}
                onChange={(e) => setFromPeriod(e.target.value)}
              >
                <option>AM</option>
                <option>PM</option>
              </select>

            </div>



            <div className="time-box">

              <input
                type="time"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
              />

              <select
                value={toPeriod}
                onChange={(e) => setToPeriod(e.target.value)}
              >
                <option>AM</option>
                <option>PM</option>
              </select>

            </div>

          </div>



          <button className="add-btn" onClick={addSlot}>
            + Add slot
          </button>



          {slots.map((slot, index) => (

            <div key={index} className="slot-card">

              <div>
                <strong>{slot.day}</strong>
                <p>{slot.from} - {slot.to}</p>
              </div>

              <span className="slot-id">{slot.id}</span>

            </div>

          ))}

        </div>


      </div>



      {/* Bottom Buttons */}

      <div className="bottom-buttons">

        <button className="back-btn">
          Back
        </button>

        <button className="next-btn">
          Next — Review & generate
        </button>

      </div>


    </div>

  );

}