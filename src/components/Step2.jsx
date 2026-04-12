import { useState } from "react";
import "./Step2.css";

export default function Step2() {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");

  const [slots, setSlots] = useState([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

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
    if (!day || !time) return;

    const newSlot = {
      id: `T${slots.length + 1}`,
      day,
      time
    };

    setSlots([...slots, newSlot]);
    setDay("");
    setTime("");
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
            <label>Day</label>
            <label>Time</label>
          </div>

          <div className="inputs">
            <input
              placeholder="e.g. Monday"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />

            <input
              placeholder="e.g. 9 AM – 11 AM"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <button className="add-btn" onClick={addSlot}>
            + Add slot
          </button>

          {slots.map((slot, index) => (
            <div key={index} className="slot-card">

              <div>
                <strong>{slot.day}</strong>
                <p>{slot.time}</p>
              </div>

              <span className="slot-id">{slot.id}</span>

            </div>
          ))}

        </div>

      </div>


      {/* Bottom Buttons */}

      <div className="bottom-buttons">
        <button className="back-btn">Back</button>

        <button className="next-btn">
          Next — Review & generate
        </button>
      </div>

    </div>
  );
}