import React, { useState } from "react";
import "../../styles/Step2.css";

export default function Step2({ rooms, setRooms, slots, setSlots, onNext, onBack }) {
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");

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
    <>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

        {/* Exam Rooms */}
        <div className="card">

          <h3 className="text-sm" style={{ marginBottom: '16px' }}>Exam rooms</h3>

          <div className="form-grid">
            <div>
              <label className="label">Room name</label>
              <input
                className="input-field"
                placeholder="e.g. Hall A"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Capacity</label>
              <input
                className="input-field"
                placeholder="e.g. 100"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', marginTop: '16px' }} onClick={addRoom}>
            + Add room
          </button>

          <div className="table-container" style={{ marginTop: '24px' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Capacity</th>
                  <th>Utilization</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: 500 }}>{room.name}</td>
                    <td>{room.capacity} seats</td>
                    <td>
                      <div style={{ background: '#f3f4f6', height: '6px', borderRadius: '3px', overflow: 'hidden', width: '100px' }}>
                        <div style={{ background: '#4f46e5', height: '100%', width: `${room.utilization}%` }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Time Slots */}
        <div className="card">

          <h3 className="text-sm" style={{ marginBottom: '16px' }}>Time slots</h3>

          <div className="form-grid">
            <div>
              <label className="label">Day</label>
              <input
                className="input-field"
                placeholder="e.g. Monday"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Time</label>
              <input
               className="input-field"
                placeholder="e.g. 9 AM – 11 AM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', marginTop: '16px' }} onClick={addSlot}>
            + Add slot
          </button>

          <div className="table-container" style={{ marginTop: '24px' }}>
             <table className="data-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {slots.map((slot, index) => (
                  <tr key={index}>
                    <td>
                      <strong style={{ display: 'block', fontSize: '0.875rem' }}>{slot.day}</strong>
                      <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>{slot.time}</span>
                    </td>
                    <td style={{ fontWeight: 500 }}>{slot.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>
          Next — Review & generate
        </button>
      </div>

    </>
  );
}