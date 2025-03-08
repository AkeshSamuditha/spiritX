'use client'
import { useState, useEffect } from 'react'


const ProfilePage = () => {
    const [userData, setUserData] = useState({
        name: 'Loading...',
        email: 'Loading...',
        bio: 'Loading...',
        avatar: '/default-avatar.png'
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setUserData({
                    name: 'Sarah Johnson',
                    email: 'sarah.j@example.com',
                    bio: 'Full-stack developer passionate about creating meaningful web experiences.',
                    avatar: '/avatar.png'
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen p-4 bg-gradient-to-b from-blue-100 to-purple-100 flex justify-center items-center">
            <div className="max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">My Profile</h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full overflow-hidden p-1">
                            <img src={userData.avatar} alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-purple-800">{userData.name}</h2>
                            <p className="text-blue-600">{userData.email}</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">About Me</h3>
                        <p className="text-gray-700 text-center">{userData.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage