import React, { useEffect, useState } from 'react';

function StudentProfile() {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const response = await fetch('/api/student/profile');
    const data = await response.json();
    setProfile(data.profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Profile</h2>
      <div className="border p-4 rounded">
        <p>Name: {profile.studentName}</p>
        <p>Registration Number: {profile.registrationNumber}</p>
        <p>Course: {profile.course}</p>
        <p>Branch: {profile.branch}</p>
        <p>Email: {profile.email}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
