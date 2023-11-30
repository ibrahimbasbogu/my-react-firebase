import React from 'react';
import { auth, analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

const Profile = () => {

  const currentUser = auth.currentUser;

  const handleDashboard = async () => {
    try {
      logEvent(analytics, 'dashboard_open')
      console.log('Dashboard Açıldı');
    } catch (error) {
      console.error('Dashboard Error = ', error.message);
    }
  };

  const handleCourses = async () => {
    try {
      logEvent(analytics, 'course_open')
      console.log('Dersler Açıldı');
    } catch (error) {
      console.error('Course Error = ', error.message);
    }
  };

  return (
    <div>
      <h2>Profil Ekranı</h2>
      {currentUser ? (
        <>
          <p>Email: {currentUser.email}</p>
          {/* Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz */}
        </>
      ) : (
        <p>Kullanıcı oturumu açık değil.</p>
      )}
      <button onClick={handleDashboard} className="bg-green-500 text-blue px-4 py-2 rounded focus:outline-none hover:bg-blue-700">
        Dashboard
      </button>
      <button onClick={handleCourses} className="bg-green-500 text-blue px-4 py-2 rounded focus:outline-none hover:bg-blue-700">
        Courses
      </button>
    </div>
  );
};

export default Profile;