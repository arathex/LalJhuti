import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import { Star } from "lucide-react";
import { useState } from "react";

// Images
// import image01 from "/public/01.jpg";
// import image02 from "";
// import image03 from "";
// import image04 from "";
// import image05 from "";
// import image06 from "";
// import image07 from "";
// import image08 from "";
// import image09 from "";
// import image10 from "";
// import image11 from "";
// import image12 from "";
// import image13 from "";
// import image14 from "";
// import image15 from "";
// import image16 from "";
// import image17 from "";
// import image18 from "";
// import image19 from "";



const photos = [
  { img: "/01.jpg", title: "Breakfast", featured: true },
  { img: "/02.jpg", title: "Burger" },
  { img: "/03.jpg", title: "Camera" },
  { img: "/04.jpg", title: "Coffee" },
  { img: "/05.jpg", title: "Hats" },
  { img: "/06.jpg", title: "Honey" },
  { img: "/07.jpg", title: "Fern", featured: true },
  { img: "/08.jpg", title: "Basketball" },
  { img: "/09.jpg", title: "Mushrooms" },
  { img: "/10.jpg", title: "Tomato basil" },
  { img: "/11.jpg", title: "Sea star", featured: true },
  { img: "/12.jpg", title: "Bike" },
  { img: "/13.jpg", title: "Bike" },
  { img: "/14.jpg", title: "Bike" },
  { img: "/15.jpg", title: "Bike" },
  { img: "/16.jpg", title: "Bike" },
  { img: "/17.jpg", title: "Bike" },
  { img: "/18.jpg", title: "Bike" },
  { img: "/19.jpg", title: "Bike" },
  { img: "/20.jpg", title: "Bike" },
  { img: "/21.jpg", title: "Bike" },
  { img: "/22.jpg", title: "Bike" },
  { img: "/23.jpg", title: "Bike" },
  { img: "/24.jpg", title: "Bike" },
  { img: "/25.jpg", title: "Bike" },
  { img: "/26.jpg", title: "Bike" },
  { img: "/27.jpg", title: "Bike" },
  { img: "/28.jpg", title: "Bike" },
  { img: "/29.jpg", title: "Bike" },
  { img: "/30.jpg", title: "Bike" },
  { img: "/31.jpg", title: "Bike" },
  { img: "/32.jpg", title: "Bike" },
  { img: "/33.jpg", title: "Bike" },
  { img: "/34.jpg", title: "Bike" },
  { img: "/35.jpg", title: "Bike" },
  { img: "/36.jpg", title: "Bike" },
  { img: "/37.jpg", title: "Bike" },
  { img: "/38.jpg", title: "Bike" },
  { img: "/39.jpg", title: "Bike" },
  { img: "/40.jpg", title: "Bike" },
  { img: "/41.jpg", title: "Bike" },
  { img: "/42.jpg", title: "Bike" },
  { img: "/43.jpg", title: "Bike" },
  { img: "/44.jpg", title: "Bike" },
  { img: "/45.jpg", title: "Bike" },
  { img: "/46.jpg", title: "Bike" },
  { img: "/47.jpg", title: "Bike" },
  { img: "/48.jpg", title: "Bike" },
  { img: "/49.jpg", title: "Bike" },
  { img: "/50.jpg", title: "Bike" },
  { img: "/51.jpg", title: "Bike" },
  { img: "/52.jpg", title: "Bike" },
  { img: "/53.jpg", title: "Bike" },
  { img: "/54.jpg", title: "Bike" },
  { img: "/55.jpg", title: "Bike" },
  { img: "/56.jpg", title: "Bike" },
  { img: "/57.jpg", title: "Bike" },
  { img: "/58.jpg", title: "Bike" },
];



export default function PhotoShowcase() {
   const [open, setOpen] = React.useState(false);
   const fullscreenRef = React.useRef(null);
   const slideshowRef = React.useRef(null);

   const [startIndex, setStartIndex] = useState(0);
   const handleImageClick = (index) => {
      setStartIndex(index);
      setOpen(true);
   };


   return (
      <>
         <div className="lg:h-[400px] lg:w-[1000px]">
            <button type="button" onClick={() => setOpen(true)} className={`overflow-y-auto h-[700px] lg:pb-[300px]`}>
               <div className="grid lg:py-5 md:grid-cols-3 gap-2 lg:max-w-[1000px] mx-auto p-4">
                  {photos.map((item, i) => (
                     <div
                        className={`relative group overflow-hidden  rounded-xl shadow-md ${item.featured ? "md:col-span-2 md:row-span-2" : ""
                           }`}

                     >
                        <img
                           src={item.img}
                           alt={item.title}
                           onClick={() => handleImageClick(i)}
                           className="w-full h-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 group-hover:opacity-90 transition"></div>
                        <div className="absolute top-2 left-2 flex items-center gap-2 text-white">
                           <Star className="w-5 h-5 opacity-70 hover:text-yellow-400 transition" />
                           <span className="font-semibold">{item.title}</span>
                        </div>
                     </div>
                  ))}
               </div>

            </button>
         </div>

         {/* <Lightbox
            open={open}
            plugins={[Fullscreen, Slideshow]}
            index={startIndex}
            close={() => setOpen(false)}
            on={{
               click: () => {
                  fullscreenRef.current?.enter(),
                     (slideshowRef.current?.playing
                        ? slideshowRef.current?.pause
                        : slideshowRef.current?.play)?.();
               }
            }}
            slides={[
               { src: "../assets/images/01.jpg" },
               { src: "../assets/images/02.jpg" },
               { src: "../assets/images/03.jpg" },
               { src: "../assets/images/04.jpg" },
               { src: "../assets/images/05.jpg" },
               { src: "../assets/images/06.jpg" },
               { src: "../assets/images/07.jpg" },
               { src: "../assets/images/08.jpg" },
               { src: "../assets/images/09.jpg" },
               { src: "../assets/images/10.jpg" },
               { src: "../assets/images/11.jpg" },
               { src: "../assets/images/12.jpg" },
               { src: "../assets/images/13.jpg" },
               { src: "../assets/images/14.jpg" },
               { src: "../assets/images/15.jpg" },
               { src: "../assets/images/16.jpg" },
               { src: "../assets/images/17.jpg" },
               { src: "../assets/images/18.jpg" },
               { src: "../assets/images/19.jpg" },
            ]}
         /> */}

         <Lightbox
            open={open}
            index={startIndex}
            close={() => setOpen(false)}
            slides={photos.map(photo => ({ src: photo.img }))}
            plugins={[Fullscreen, Slideshow]}
         />


      </>
   );
}