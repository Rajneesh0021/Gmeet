'use client'
import { useState } from 'react';

const TimeSelectorPage = () => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [error, setError] = useState<string>('');
  let timesArray = JSON.parse(localStorage.getItem('selectedTime') || '[]');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedTime) {
      setError('Please select a time.');
      return;
    }

    const [hours, minutes] = selectedTime.split(":").map(Number); 
    const selectedDateTime = new Date(); 
    selectedDateTime.setHours(hours, minutes, 0, 0); 

    const currentDateTime = new Date();
    const thirtyMinutesFromNow = new Date(currentDateTime.getTime() + 30 * 60000);

    if (selectedDateTime.getTime() < thirtyMinutesFromNow.getTime()) {
      timesArray.push(selectedDateTime.toISOString());
      localStorage.setItem('selectedTime', JSON.stringify(timesArray));
      setError('');
      alert('Your MeetingID is:- '+selectedDateTime.toISOString())
    } else {
      setError('Please select a time within the next 30 minutes.');
    }
  };

  return (
    <div className='bg  h-[100vh]'>
      <h1 className='text-black'>Select Time For Your Meet</h1>
      <form className='containercr' onSubmit={handleSubmit}>
        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TimeSelectorPage;
