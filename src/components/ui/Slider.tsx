import React, { useState } from 'react';
import Image from 'next/image';

interface MeetingFeature {
  image: string;
  desc: string;
  heading: string;
}

const meetingFeatures: MeetingFeature[] = [
  { image: '/image/gmeetlink.svg', heading: "Get a link that you can share", desc: 'Click New meeting to get a link that you can send to people that you want to meet with' },
  { image: '/image/gmeetschedule.svg', heading: "Plan ahead", desc: 'Click New meeting to schedule meetings in Google Calendar and send invitations to participants' },
  { image: '/image/gmeetsafe.svg', heading: "Your meeting is safe", desc: 'No one can join a meeting unless invited or admitted by the host' },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % meetingFeatures.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + meetingFeatures.length) % meetingFeatures.length);
  };

  return (
    <div className="container cards active">
      <svg id="left-btn" xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 320 512" onClick={handlePrevSlide}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      <span className="card">
        <span className="content">
          <Image
            src={meetingFeatures[currentIndex].image}
            alt="gmeetlink"
            width={200}
            height={200}
          />
        </span>
        <span className="details">
          <h1>{meetingFeatures[currentIndex].heading}</h1>
          <p>{meetingFeatures[currentIndex].desc}</p>
        </span>
      </span>
      <svg id="right-btn" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={handleNextSlide}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
  );
};
