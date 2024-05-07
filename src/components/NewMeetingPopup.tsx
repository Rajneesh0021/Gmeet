import React from "react";
import { useRouter } from "next/navigation";
interface Props {
  onClose: () => void;
}

const NewMeetingPopup: React.FC<Props> = ({ 
    onClose }) => {
        const router=useRouter()
  const handleJoinNow = () => {
    
    router.push('/meeting')
  };

  const handleScheduleMeet = () => {
  
    router.push('/createmeet')
  };

  return (
    <div className="new-meeting-popup">
      <div className="popup-content">
        <h2>New Meeting</h2>
        <p>This is where you can create a new meeting.</p>
        <div>
          <button onClick={handleJoinNow}>Join Now</button>
          <button onClick={handleScheduleMeet}>Schedule Meet</button>
        </div>
        <button id="cl" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NewMeetingPopup;
