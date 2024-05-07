'use client'
import MeetLanding from '@/components/MeetLanding';
import React from 'react';
import { useParams } from 'next/navigation'


const MeetingID = () => {
    const params = useParams();
    const uid = params.meetlink;
   console.log(uid)
  return (
    <div>
      <MeetLanding meetID={uid} /> 
    </div>
  );
};

export default MeetingID;
