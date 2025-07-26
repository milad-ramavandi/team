"use client";
import { useState } from "react";
import { VIDEO_URL } from "../../../../data/constants";
import Modal from "../modal";


interface Props {
  youtubeId: string;
}

const BlogModalWrapper = ({ youtubeId }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    if (youtubeId) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
       className="position-absolute top-0 bottom-0 start-0 end-0 cursor-pointer"
      ></div>

      {isModalOpen && youtubeId && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="embed-responsive embed-responsive-16by9 w-100">
            <iframe
              className="embed-responsive-item rounded"
              src={VIDEO_URL.replace("youtubeId", youtubeId)}
              title="YouTube Video Player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              // className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BlogModalWrapper;
