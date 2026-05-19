export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center 
                bg-linear-to-r from-gray-700 via-gray-950 to-gray-700">
            <div className="text-center space-y-6">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent 
                    rounded-full animate-spin mx-auto"></div>
                <h2 className="text-2xl font-semibold text-white">
                    Loading ...
                </h2>
                <p className="text-gray-400">
                    Please wait while we fetch the latest cars
                </p>
            </div>
        </div>
    );
} 