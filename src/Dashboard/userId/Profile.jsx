import { SignOut } from "@/components";
import { useJobs } from "@/contexts/JobContext";
import { userAuth } from "@/contexts/AuthContextProvider";

const Profile = () => {
  const { firstName, lastName } = useJobs();
  const { session } = userAuth();
  const userEmail = session.user.user_metadata.email;

  return (
    <div className="fixed top-0 right-0 w-80 min-h-screen bg-white dark:bg-[#111111] border-l border-gray-100 dark:border-gray-800 transition-colors duration-300 overflow-y-auto">
      {/* Header */}
      <div className="pt-20 p-8 border-b border-gray-50 dark:border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="/dummy.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-[#111111]"></div>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {firstName} {lastName}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {userEmail}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-8 py-4 border-b border-gray-50 dark:border-gray-800">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 dark:text-white">
              12
            </div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Applied
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 dark:text-white">
              5
            </div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Saved
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-8 py-4 space-y-2 pb-32 md:pb-8">
        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Edit Profile
          </span>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Settings
          </span>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Help & Support
          </span>
        </button>

        {/* Sign Out - Moved inside menu section */}
        <div className="pt-6 border-t border-gray-50 dark:border-gray-800">
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Profile;
