import { useState, useEffect, useRef } from "react";
import { Reveal, SlideReveal } from "../../utils/Reveal";
import "./services.css";
import "../../assets/css/modal.css";
import data from "./data";

const Services = () => {
  // Mapping data
  const services = data;

  // Display correct data in each modal
  const [selectedService, setSelectedService] = useState(null);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modal")) {
        closeModal();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // Close modal when slide on touchscreen
  const modalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };
  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
    touchEndY.current = event.touches[0].clientY;
  };
  const handleTouchEnd = () => {
    const touchDistanceX = touchEndX.current - touchStartX.current;
    const touchDistanceY = touchEndY.current - touchStartY.current;
    const threshold = 50; // Adjust this value to control the sensitivity of the swipe
    if (
      Math.abs(touchDistanceX) > threshold ||
      Math.abs(touchDistanceY) > threshold
    ) {
      closeModal();
    }
  };

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <section className="services section">
      <Reveal>
        <span className="section__subtitle">Services</span>
        <h2 className="section__title">À votre service</h2>
      </Reveal>

      <div className="services__container container grid">
        {services.map((service) => (
          <SlideReveal key={service.id}>
            <div className="services__card" onClick={() => openModal(service)}>
              <h3 className="services__title">
                {service.title1}
                <br />
                {service.title2}
              </h3>
              <span className="services__button">
                Plus
                <i className="bx bx-right-arrow-alt services__icon"></i>
              </span>
            </div>
          </SlideReveal>
        ))}
        <div
          className={`modal ${isModalOpen ? "modal-visible" : ""}`}
          ref={modalRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <div className="modal-content">
            <i className="bx bx-x modal-close" onClick={closeModal}></i>
            <h3 className="modal-title">{selectedService?.title}</h3>
            <p className="modal-description">{selectedService?.desc}</p>
            <ul className="modal-list">
              <li className="modal-item">
                <i className="bx bx-check modal-icon"></i>
                <p className="modal-info">{selectedService?.info1}</p>
              </li>
              <li className="modal-item">
                <i className="bx bx-check modal-icon"></i>
                <p className="modal-info">{selectedService?.info2}</p>
              </li>
              <li className="modal-item">
                <i className="bx bx-check modal-icon"></i>
                <p className="modal-info">{selectedService?.info3}</p>
              </li>
              <li className="modal-item">
                <i className="bx bx-check modal-icon"></i>
                <p className="modal-info">{selectedService?.info4}</p>
              </li>
              <li className="modal-item">
                <i className="bx bx-check modal-icon"></i>
                <p className="modal-info">{selectedService?.info5}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
