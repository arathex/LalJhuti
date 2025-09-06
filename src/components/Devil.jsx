import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import { Star } from "lucide-react";
import { useState } from "react";

// Images
import image01 from "../assets/images/01.jpg";
import image02 from "../assets/images/02.JPG";
// import image03 from "../assets/images/03.jpg";
// import image04 from "../assets/images/04.jpg";
// import image05 from "../assets/images/05.jpg";
// import image06 from "../assets/images/06.jpg";
// import image07 from "../assets/images/07.jpg";
// import image08 from "../assets/images/08.jpg";
// import image09 from "../assets/images/09.jpg";
// import image10 from "../assets/images/10.jpg";
// import image11 from "../assets/images/11.jpg";
// import image12 from "../assets/images/12.jpg";
// import image13 from "../assets/images/13.jpg";
// import image14 from "../assets/images/14.jpg";
// import image15 from "../assets/images/15.jpg";
// import image16 from "../assets/images/16.jpg";
// import image17 from "../assets/images/17.jpg";
// import image18 from "../assets/images/18.jpg";
// import image19 from "../assets/images/19.jpg";



const photos = [
  { img: image01, title: "Breakfast", featured: true },
  { img: image02, title: "Burger" },
//   { img: image03, title: "Camera" },
//   { img: image04, title: "Coffee" },
//   { img: image05, title: "Hats" },
//   { img: image06, title: "Honey" },
//   { img: image07, title: "Fern", featured: true },
//   { img: image08, title: "Basketball" },
//   { img: image09, title: "Mushrooms" },
//   { img: image10, title: "Tomato basil" },
//   { img: image11, title: "Sea star", featured: true },
//   { img: image12, title: "Bike" },
//   { img: image13, title: "Bike" },
//   { img: image14, title: "Bike" },
//   { img: image15, title: "Bike" },
//   { img: image16, title: "Bike" },
//   { img: image17, title: "Bike" },
//   { img: image18, title: "Bike" },
//   { img: image19, title: "Bike" },
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
                           onClick={() => handleImageClick(index)}
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