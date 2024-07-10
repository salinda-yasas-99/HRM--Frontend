import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import CheckInAndOutCard from "../components/dashboard/CheckInAndOutCard";
import PayPeriodDetailCard from "../components/dashboard/PayPeriodDetailCard";
import MyAttendenceCard from "../components/dashboard/MyAttendenceCard";
import MyLeavesCard from "../components/dashboard/MyLeavesCard";
import AnnouncementCard from "../components/announcements/AnnouncementCard";
import { getAllAnnouncements } from "../Services/AnnouncementService";
import EmptyImg from "../assets/announcement/empty.png";

const DashBoard = () => {
  const [announcements, setAnnouncements] = useState([
    {
      subject: "Announcement 1",
      date: "2024-07-01",
      message: "This is the first announcement message.",
    },
    {
      subject: "Announcement 2",
      date: "2024-07-02",
      message: "This is the second announcement message.",
    },
    {
      subject: "Announcement 3",
      date: "2024-07-03",
      message: "This is the third announcement message.",
    },
  ]);

  const fetchAnnouncemnts = async () => {
    const response = await getAllAnnouncements();
    setAnnouncements(response);
  };

  // useEffect(() => {
  //   fetchAnnouncemnts();
  // }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Dashboard" />
        <div className="flex flex-row mt-[25px] md:w-[96.4%] gap-5">
          <div className="bg-white flex rounded-xl w-1/4 h-[10rem]">
            <CheckInAndOutCard />
          </div>
          <div className="bg-white flex rounded-xl w-1/4 h-[10rem]">
            <PayPeriodDetailCard />
          </div>
          <div className="bg-white flex rounded-xl w-1/4 h-[10rem]">
            <MyAttendenceCard />
          </div>
          <div className="bg-white flex rounded-xl w-1/4 h-[10rem]">
            <MyLeavesCard />
          </div>
        </div>
        <div className="flex flex-col bg-white p-10  md:w-[96.4%]  mt-10 rounded-xl">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">
            Your Announcements
          </h4>
          {announcements?.length > 0 ? (
            announcements.map((announcement, key) => (
              <AnnouncementCard
                key={key}
                subject={announcement.subject}
                message={announcement.message}
                date={announcement.date}
              />
            ))
          ) : (
            <div className="flex flex-col items-center gap-1">
              <img src={EmptyImg} alt="empty-img" />
              <div className="text-gray-500 text-center mt-5">
                No announcements available.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
