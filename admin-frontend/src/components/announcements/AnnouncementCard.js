import React from "react";
import AnnouncementImg from "../../assets/announcement.png";

const AnnouncementCard = ({ subject, message, date }) => {
  return (
    <div
      id="alert-additional-content-1"
      className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
      role="alert"
    >
      <div className="flex items-center">
        <img
          className="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          viewBox="0 0 20 20"
          src={AnnouncementImg}
        />

        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{subject}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{message}</div>
      <div className="flex">
        <div className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700">
          {date ? new Date(date).toISOString().split("T")[0] : ""}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
