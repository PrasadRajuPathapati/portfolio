import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Modal Component
const ImageModal = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <button
      className="absolute top-4 right-6 text-white text-2xl font-bold"
      onClick={onClose}
    >
      ✕
    </button>
    <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
  </div>
);

const projects = [
  {
    title: "🍿 Movie Hub",
    description: (
      <div>
        <ul className="list-none pl-5 text-black-300 text-sm space-y-1">
          <li>Explore movies & trailers in a modern UI.</li>
          <li>Integrated TMDB API for real-time content.</li>
          <li>Responsive design with full-screen video previews.</li>
        </ul>
        <a
          href="https://my-movie-hub-2025.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-green-700 hover:text-green-900 font-medium underline"
        >
          👉 Click here to test the website
        </a>
      </div>
    ),
    images: ["/screenshots/movie1.png", "/screenshots/movie2.png"],
  },
  {
    title: "🥗 Diet Tracker",
    description: (
      <div>
        <ul className="list-none pl-5 text-black-300 text-sm space-y-1">
          <li>Track meals, weight & calories visually.</li>
          <li>MongoDB + Express backend for persistence.</li>
          <li>Chat with AI coach & get daily plans.</li>
        </ul>
        <a
          href="https://dietplannerapp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-green-700 hover:text-green-900 font-medium underline"
        >
          👉 Click here to test the website
        </a>
      </div>
    ),
    images: [
      "/screenshots/diet1.png",
      "/screenshots/diet2.png",
      "/screenshots/diet3.png",
      "/screenshots/diet4.png",
      "/screenshots/diet5.png",
      "/screenshots/diet6.png",
      "/screenshots/diet7.png",
      "/screenshots/diet8.png",
    ],
  },
  {
    title: "🔥 Calorie Tracker",
    description: (
      <div>
        <ul className="list-none pl-5 text-black-300 text-sm space-y-1">
          <li>Track your daily calorie intake with an intuitive and responsive interface.</li>
          <li>Log meals, view nutritional summaries, and monitor progress with real-time charts.</li>
          <li>Built using MERN stack with personalized goal recommendations and visual insights.</li>
        </ul>
        <a
          href="https://calorie-app-chi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-green-700 hover:text-green-900 font-medium underline"
        >
          👉 Click here to test the website
        </a>
      </div>
    ),
    images: [
      "/screenshots/calorie1.png",
      "/screenshots/calorie2.png",
      "/screenshots/calorie3.png",
      "/screenshots/calorie4.png",
      "/screenshots/calorie5.png",
    ],
  },
];


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: true,
};

const ProjectCarousel = () => {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <div className="space-y-14 max-w-4xl mx-auto px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-xl shadow-lg overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-6"
        >
          <h3 className="text-2xl font-semibold text-black-400 mb-2">{project.title}</h3>
          <div className="mb-4">{project.description}</div>
          <Slider {...sliderSettings}>
            {project.images.map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`${project.title} Slide ${i + 1}`}
                  onClick={() => setModalSrc(src)}
                  className="w-full cursor-pointer h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}

      {modalSrc && (
        <ImageModal
          src={modalSrc}
          alt="Fullscreen Preview"
          onClose={() => setModalSrc(null)}
        />
      )}
    </div>
  );
};

export default ProjectCarousel;
