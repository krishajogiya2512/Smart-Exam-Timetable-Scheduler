import React, { useState } from "react";
import "../../styles/Step2.css";
import "../../styles/Modal.css";

// Helper to format 24h to 12h AM/PM
const formatTime = (time24) => {
  if (!time24) return "";
  const [hourStr, minute] = time24.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  return `${hour}:${minute} ${ampm}`;
};

export default function Step2({ rooms, setRooms, slots, setSlots, onNext, onBack }) {
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (!date || !startTime || !endTime) return;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // We add timezone adjustment or parse correctly by splitting, 
    // simply new Date(date) can offset in JS depending on local timezone, better to use fixed formatting
    const [year, month, dayObj] = date.split('-');
    const dateObj = new Date(year, month - 1, dayObj);
    const derivedDay = days[dateObj.getDay()];

    const formattedTime = `${formatTime(startTime)} – ${formatTime(endTime)}`;

    const newSlot = {
      id: `T${slots.length + 1}`,
      day: derivedDay,
      date: date,
      time: formattedTime
    };

    setSlots([...slots, newSlot]);
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

        {/* Exam Rooms */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>

          <h3 className="text-sm" style={{ marginBottom: '16px' }}>Exam rooms</h3>

          <div className="form-grid" style={{ marginBottom: '16px' }}>
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
                type="number"
                className="input-field"
                placeholder="e.g. 100"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', alignSelf: 'flex-start' }} onClick={addRoom}>
            + Add room
          </button>

          {rooms.length > 0 && (
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
          )}

        </div>

        {/* Time Slots */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>

          <h3 className="text-sm" style={{ marginBottom: '16px' }}>Time slots</h3>

          <div className="form-grid" style={{ marginBottom: '16px' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label className="label">Date</label>
              <input
                type="date"
                className="input-field"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Start time</label>
              <input
               type="time"
               className="input-field"
               value={startTime}
               onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <label className="label">End time</label>
              <input
               type="time"
               className="input-field"
               value={endTime}
               onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', alignSelf: 'flex-start' }} onClick={addSlot}>
            + Add slot
          </button>

          {slots.length > 0 && (
            <div style={{ marginTop: '24px', padding: '16px', background: '#f9fafb', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="text-sm" style={{ color: 'var(--text-gray)' }}>Total Slots: <strong style={{ color: 'var(--text-dark)' }}>{slots.length}</strong></span>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', background: 'white' }} onClick={() => setIsModalOpen(true)}>View Slots</button>
            </div>
          )}

        </div>

      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>
          Next — Review & generate
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Time Slots</h3>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              {slots.map((slot, index) => (
                <div key={index} className="modal-item">
                  <div>
                    <span className="modal-item-title">{slot.day}, {slot.date}</span>
                    <span className="modal-item-subtitle">{slot.time}</span>
                  </div>
                  <strong style={{ fontSize: '0.875rem' }}>[{slot.id}]</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  );
}