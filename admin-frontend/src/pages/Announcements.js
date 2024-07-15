import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import {
  deleteeAnnouncement,
  getAllAnnouncements,
  postAnnouncement,
  updateAnnouncement,
} from "../Services/AnnouncementApi";
import Loading from "../components/common/Loading";
import AnnouncementCard from "../components/announcements/AnnouncementCard";
import EmptyImg from "../assets/empty.png";
import AnnouncementModal from "../components/announcements/AnnouncementModal";
import AnnouncementDeleteModal from "../components/announcements/AnnouncementDeleteModal";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [announcementModalData, setAnnouncementModalData] = useState({
    announcementId: null,
    subject: null,
    expiresOn: null,
    content: null,
  });

  const setInitialAnnouncementModalData = () => {
    setAnnouncementModalData({
      announcementId: null,
      subject: null,
      expiresOn: null,
      content: null,
    });
  };

  const handleOpenAnnouncementModal = () => {
    setIsAnnouncementModalOpen(true);
  };

  const handleCloseAnnouncementModal = () => {
    setInitialAnnouncementModalData();
    setIsEditMode(false);
    setIsAnnouncementModalOpen(false);
  };

  const handleCloseAnnouncementDeleteModal = () => {
    setInitialAnnouncementModalData();
    setIsDeleteModalOpen(false);
  };

  const saveNewAnnouncement = async (data) => {
    try {
      const response = await postAnnouncement(data);
      fetchAnnouncemnts();
      handleCloseAnnouncementModal();
    } catch (error) {
      console.error("Error saving announcement:", error);
    }
  };

  const updateExistingAnnouncement = async (data) => {
    try {
      const response = await updateAnnouncement(data);
      fetchAnnouncemnts();
      handleCloseAnnouncementModal();
    } catch (error) {
      console.error("Error updating announcement:", error);
    }
  };

  const deleteExistingAnnouncement = async (announcementId) => {
    try {
      const response = await deleteeAnnouncement(announcementId);
      fetchAnnouncemnts();
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const fetchAnnouncemnts = async () => {
    setIsLoading(true);
    try {
      const fetched = await getAllAnnouncements();
      setAnnouncements(fetched);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncemnts();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Announcements" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <button
            type="button"
            className="focus:outline-none text-white bg-[#013a63] hover:bg-[#0f283a] focus:ring-4 focus:ring-[#013a63] rounded-lg  px-5 py-3 mb-2"
            onClick={handleOpenAnnouncementModal}
          >
            Add Announcement
          </button>
        </div>
        {isLoading && <Loading />}
        {!isLoading && announcements?.length === 0 && (
          <div className="flex flex-col items-center gap-1 md:w-[96.4%] my-[25px]">
            <img src={EmptyImg} alt="empty-img" />
            <div className="text-gray-500 text-center mt-5">
              No announcements available.
            </div>
          </div>
        )}
        {!isLoading &&
          announcements?.length > 0 &&
          announcements?.map((announ) => {
            return (
              <div
                key={announ.announcementId}
                className="flex flex-col md:w-[96.4%] my-[15px] bg-[#d7e7fa] min-h-[220px] px-5 p-4 rounded-md"
              >
                <AnnouncementCard
                  subject={announ.subject}
                  date={announ.expiresOn}
                  message={announ.content}
                />
                <div className="flex flex-row mt-1 justify-end gap-x-5">
                  <button
                    type="button"
                    className="bg-[#497cc9] py-2 px-5 rounded-lg text-white font-medium"
                    onClick={() => {
                      setAnnouncementModalData(announ);
                      setIsEditMode(true);
                      handleOpenAnnouncementModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-[#ed1b24] py-2 px-5 rounded-lg text-white font-medium"
                    onClick={() => {
                      setAnnouncementModalData(announ);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        {isAnnouncementModalOpen && (
          <AnnouncementModal
            handleCancelModal={handleCloseAnnouncementModal}
            announcement={announcementModalData}
            setAnnouncement={setAnnouncementModalData}
            saveNewAnnouncement={saveNewAnnouncement}
            updateExistingAnnouncement={updateExistingAnnouncement}
            isEditMode={isEditMode}
          />
        )}
        {isDeleteModalOpen && (
          <AnnouncementDeleteModal
            closeModal={handleCloseAnnouncementDeleteModal}
            announcement={announcementModalData}
            deleteAnnouncement={deleteExistingAnnouncement}
          />
        )}
      </div>
    </div>
  );
};

export default Announcements;
