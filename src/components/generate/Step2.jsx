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

// Reverse format from 12h to 24h for the input value
const reverseFormatTime = (time12) => {
  if (!time12) return "";
  const [time, modifier] = time12.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};

export default function Step2({ rooms, setRooms, slots, setSlots, onNext, onBack }) {
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);

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

  const editRoom = (index) => {
    const item = rooms[index];
    setRoomName(item.name);
    setCapacity(item.capacity);
    setRooms(rooms.filter((_, i) => i !== index));
    setIsRoomModalOpen(false);
  };

  const addSlot = () => {
    if (!date || !startTime || !endTime) return;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [year, month, dayObj] = date.split('-');
    const dateObj = new Date(year, month - 1, dayObj);
    const derivedDay = days[dateObj.getDay()];

    const formattedTime = `${formatTime(startTime)} – ${formatTime(endTime)}`;

    const newSlot = {
      id: `T${slots.length + 1}`,
      day: derivedDay,
      date: date,
      time: formattedTime,
      _rawStart: startTime,
      _rawEnd: endTime
    };

    setSlots([...slots, newSlot]);
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  const editSlot = (index) => {
    const item = slots[index];
    setDate(item.date);
    setStartTime(item._rawStart);
    setEndTime(item._rawEnd);
    setSlots(slots.filter((_, i) => i !== index));
    setIsModalOpen(false);
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
                placeholder=""
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Capacity</label>
              <input
                type="number"
                className="input-field"
                placeholder=""
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', alignSelf: 'flex-start' }} onClick={addRoom}>
            + Add room
          </button>

          {rooms.length > 0 && (
            <div style={{ marginTop: '24px', padding: '16px', background: '#f9fafb', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="text-sm" style={{ color: 'var(--text-gray)' }}>Total Rooms: <strong style={{ color: 'var(--text-dark)' }}>{rooms.length}</strong></span>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', background: 'white' }} onClick={() => setIsRoomModalOpen(true)}>View Rooms</button>
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
              {slots.length === 0 ? <p className="text-gray text-sm">No slots added yet.</p> : slots.map((slot, index) => (
                <div key={index} className="modal-item">
                  <div>
                    <span className="modal-item-title">{slot.day}, {slot.date}</span>
                    <span className="modal-item-subtitle">{slot.time} • [{slot.id}]</span>
                  </div>
                  <div className="modal-actions">
                    <button className="modal-icon-btn" onClick={() => editSlot(index)}>Edit</button>
                    <button className="modal-icon-btn delete" onClick={() => setSlots(slots.filter((_, i) => i !== index))}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isRoomModalOpen && (
        <div className="modal-overlay" onClick={() => setIsRoomModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Exam Rooms</h3>
              <button className="modal-close" onClick={() => setIsRoomModalOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              {rooms.length === 0 ? <p className="text-gray text-sm">No rooms added yet.</p> : rooms.map((room, index) => (
                <div key={index} className="modal-item">
                  <div>
                    <span className="modal-item-title">{room.name}</span>
                    <span className="modal-item-subtitle">Capacity: {room.capacity} seats</span>
                  </div>
                  <div className="modal-actions">
                    <button className="modal-icon-btn" onClick={() => editRoom(index)}>Edit</button>
                    <button className="modal-icon-btn delete" onClick={() => setRooms(rooms.filter((_, i) => i !== index))}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  );
}