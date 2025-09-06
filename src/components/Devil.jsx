import * as React from "react";
import { Star } from "lucide-react";
import { useState } from "react";

import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

// Images
const photos = [
   { img: "/12 2.jpg", featured: true },
   { img: "/02.jpg", featured: false },
   { img: "/03.jpg", featured: false },
   { img: "/04.jpg", featured: false },
   { img: "/01.jpg", featured: true },
   { img: "/06.jpg", featured: false },
   { img: "/08.jpg", featured: false },
   { img: "/09.jpg", featured: false },
   { img: "/10.jpg", featured: false },
   { img: "/11.jpg", featured: false },
   { img: "/13.jpg", featured: false },
   { img: "/14.jpg", featured: false },
   { img: "/15.jpg", featured: false },
   { img: "/16.jpg", featured: true },
   { img: "/17.jpg", featured: false },
   { img: "/18.jpg", featured: false },
   { img: "/19.jpg", featured: false },
   { img: "/20.jpg", featured: false },
   { img: "/21.jpg", featured: false },
   { img: "/22.jpg", featured: true },
   { img: "/23.jpg", featured: false },
   { img: "/24.jpg", featured: false },
   { img: "/25.jpg", featured: false },
   { img: "/26.jpg", featured: true },
   { img: "/27.jpg", featured: false },
   { img: "/29.jpg", featured: false },
   { img: "/30.jpg", featured: false },
   { img: "/31.jpg", featured: true },
   { img: "/32.jpg", featured: false },
   { img: "/33.jpg", featured: false },
   { img: "/34.jpg", featured: false },
   { img: "/35.jpg", featured: false },
   { img: "/36.jpg", featured: false },
   { img: "/37.jpg", featured: false },
   { img: "/40.jpg", featured: true },
   { img: "/38.jpg", featured: false },
   { img: "/39.jpg", featured: false },
   { img: "/41.jpg", featured: false },
   { img: "/42.jpg", featured: false },
   { img: "/43.jpg", featured: false },
   { img: "/44.jpg", featured: false },
   { img: "/45.jpg", featured: false },
   { img: "/46.jpg", featured: false },
   { img: "/49.jpg", featured: true },
   { img: "/50.jpg", featured: false },
   { img: "/51.jpg", featured: false },
   { img: "/52.jpg", featured: false },
   { img: "/53.jpg", featured: false },
   { img: "/54.jpg", featured: false },
   { img: "/56.jpg", featured: false },
   { img: "/57.jpg", featured: false },
   { img: "/58.jpg", featured: false },
   { img: "/59.jpg", featured: false },
   { img: "/60.jpg", featured: false },
   { img: "/61.jpg", featured: false },
   { img: "/62.jpg", featured: false },
   { img: "/63.jpg", featured: false },
   { img: "/64.jpg", featured: false },
   { img: "/66.jpg", featured: false },
   { img: "/67.jpg", featured: false },
   { img: "/69.jpg", featured: false },
   { img: "/70.jpg", featured: false },
   { img: "/71.jpg", featured: false },
   { img: "/72.jpg", featured: false },
   { img: "/73.jpg", featured: false },
   { img: "/74.jpg", featured: false },
   { img: "/75.jpg", featured: false },
   { img: "/76.jpg", featured: false },
   { img: "/77.jpg", featured: false },
   { img: "/78.jpg", featured: false },
   { img: "/79.jpg", featured: true },
   { img: "/80.jpg", featured: false },
   { img: "/81.jpg", featured: false },
   { img: "/82.jpg", featured: false },
   { img: "/87.jpg", featured: true },
   { img: "/83.jpg", featured: false },
   { img: "/84.jpg", featured: false },
   { img: "/85.jpg", featured: false },
   { img: "/86.jpg", featured: false },
   { img: "/88.jpg", featured: false },
   { img: "/91.jpg", featured: false },
   { img: "/92.jpg", featured: false },
   { img: "/93.jpg", featured: false },
   { img: "/95.jpg", featured: true },
   { img: "/94.jpg", featured: false },
   { img: "/96.jpg", featured: false },
   { img: "/97.jpg", featured: true },
   { img: "/101.jpg", featured: true },
   { img: "/98.jpg", featured: false },
   { img: "/99.jpg", featured: false },
   { img: "/100.jpg", featured: false },
   { img: "/102.jpg", featured: false },
   { img: "/103.jpg", featured: false },
   { img: "/107.jpg", featured: true },
   { img: "/104.jpg", featured: false },
   { img: "/105.jpg", featured: false },
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
                        className={`relative group overflow-hidden  rounded-xl shadow-md ${item.featured ? "md:col-span-2 md:row-span-2" : ""}`}>
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