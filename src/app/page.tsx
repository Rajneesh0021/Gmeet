'use client'
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Slider } from "@/components/ui/Slider";
import NewMeetingPopup from "@/components/NewMeetingPopup";
import { useRouter } from "next/navigation";
export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [meetingLink, setMeetingLink] = useState<string>("");
  const router=useRouter();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingLink(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    
    const meetingLinks = JSON.parse(localStorage.getItem('selectedTime'));

    const linkIndex = meetingLinks.indexOf(meetingLink);
    if (linkIndex !== -1) {
     
      router.push("/meeting/" + meetingLink);
    } else {
      
      alert("Meeting link not found!");
     
    }
  };

  return (
    
    <>
      <Navbar />
      <section className="hero">
        <div>
          <h1>Video calls and meetings for everyone</h1>
          <p>Google Meet provides secure, easy-to-use video calls and meetings for everyone, on any device.</p>
          <div className="meetlink">
          <button onClick={togglePopup}>NEW MEETING</button>
          <form onSubmit={handleFormSubmit}>
          
             
              <input 
                type="text" 
                placeholder="Enter Your Meeting Link" 
                value={meetingLink} 
                onChange={handleInputChange} 
              />
              <input type="submit" value="JOIN" />
           
          </form>
          </div>
        </div>
        <div>
          <Slider />
        </div>
      </section>
      {isPopupOpen && (
        <>
          <div className="popup-overlay" onClick={togglePopup} />
          <NewMeetingPopup onClose={togglePopup} />
        </>
      )}
    </>
  );
}
