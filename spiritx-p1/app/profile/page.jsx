const ProfilePage = () => {
    return (
        <div className="min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div>
                        <h2 className="text-xl font-semibold">John Doe</h2>
                        <p className="text-gray-600">john.doe@example.com</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage