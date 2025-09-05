import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import { Star } from "lucide-react";
import { useState } from "react";

const photos = [
   { img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast", featured: true },
   { img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
   { img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
   { img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" },
   { img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8", title: "Hats" },
   { img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", title: "Honey", },
   { img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f", title: "Fern", featured: true },
   { img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", title: "Basketball" },
   { img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25", title: "Mushrooms" },
   { img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af", title: "Tomato basil" },
   { img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1", title: "Sea star", featured: true },
   { img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6", title: "Bike" },
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

         <Lightbox
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
               { src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" },
               { src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d" },
               { src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45" },
               { src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" },
               { src: "https://images.unsplash.com/photo-1533827432537-70133748f5c8" },
               { src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" },
               { src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" },
               { src: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" },
               { src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25" },
               { src: "https://images.unsplash.com/photo-1567306301408-9b74779a11af" },
               { src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1" },
               { src: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6" },
            ]}
         />

      </>
   );
}