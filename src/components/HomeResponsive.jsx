import Wave from 'react-wavify'
import Container from './Container'
import Flex from './Flex';

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound';

import Devil from './Devil';
import Breadcrumbs from './Breadcrumbs';
import ContactLinks from './ContactLinks';
import DownloadablesShowcase from './DownloadablesShowcase';

// Sounds
import soundOne from '../sound/Closing.wav'
import soundTwo from '../sound/Opening.wav'
import soundThree from '../sound/BlackTheme.mp3'
import soundFour from '../sound/SUn.mp3'

// Icons
import { Sun, Volume1 } from 'lucide-react';

// Images
import about from '../assets/chatting.png'
import linked from '../assets/linked.png'
import contact from '../assets/contact-us.png'
import faq from '../assets/faq.png'
import sun from '../assets/sun.png'
import sunshine from '../assets/sunshine.png'
import avatar from '../assets/contact.png'

const Home = () => {

   // Sound Effects
   let [closeWindowSound] = useSound(soundOne, { volume: 0.3 })
   let [openingWindowSound] = useSound(soundTwo, { volume: 0.5 })
   let [blackThemeSound] = useSound(soundThree, { volume: 0.5 })
   let [sunThemeSound] = useSound(soundFour, { volume: 0.5 })

   // Individual window states
   const [windows, setWindows] = useState({
      about: {
         isOpen: false,
         position: { x: 200, y: 150 },
         zIndex: 999
      },
      memories: {
         isOpen: false,
         position: { x: 200, y: 120 },
         zIndex: 999
      },
      contact: {
         isOpen: false,
         position: { x: 600, y: 200 },
         zIndex: 999
      },
      faq: {
         isOpen: false,
         position: { x: 500, y: 140 },
         zIndex: 999
      },
      downloads: {
         isOpen: false,
         position: { x: 100, y: 30 },
         zIndex: 999
      },
   });

   // Drag state
   const [activeDrag, setActiveDrag] = useState(null);
   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
   const [highestZIndex, setHighestZIndex] = useState(999);

   // Bring window to front
   const bringToFront = (windowName) => {
      const newZIndex = highestZIndex + 1;
      setHighestZIndex(newZIndex);
      setWindows(prev => ({
         ...prev,
         [windowName]: {
            ...prev[windowName],
            zIndex: newZIndex
         }
      }));
   };

   // Window toggle functions
   const toggleWindow = (windowName) => (e) => {
      e.stopPropagation();
      setWindows(prev => ({
         ...prev,
         [windowName]: {
            ...prev[windowName],
            isOpen: !prev[windowName].isOpen
         }
      }));

      // If opening the window, bring it to front
      if (!windows[windowName].isOpen) {
         setTimeout(() => bringToFront(windowName), 0);
      }
   };

   const closeWindow = (windowName) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      setWindows(prev => ({
         ...prev,
         [windowName]: {
            ...prev[windowName],
            isOpen: false
         }
      }));
   };

   // Drag handlers
   const handleMouseDown = (windowName, e) => {
      e.preventDefault();
      e.stopPropagation();
      setActiveDrag(windowName);
      bringToFront(windowName);
      setDragStart({
         x: e.clientX - windows[windowName].position.x,
         y: e.clientY - windows[windowName].position.y
      });
   };

   const handleMouseMove = (e) => {
      if (activeDrag) {
         e.preventDefault();
         const newPosition = {
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
         };

         setWindows(prev => ({
            ...prev,
            [activeDrag]: {
               ...prev[activeDrag],
               position: newPosition
            }
         }));
      }
   };

   const handleMouseUp = (e) => {
      if (activeDrag) {
         e.preventDefault();
         e.stopPropagation();
      }
      setActiveDrag(null);
   };

   // Mouse event listeners
   useEffect(() => {
      if (activeDrag) {
         document.addEventListener('mousemove', handleMouseMove);
         document.addEventListener('mouseup', handleMouseUp);

         return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
         };
      }
   }, [activeDrag, dragStart]);



   //Mobile Draggable-DIV
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 1024);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   const DraggableWindow = ({
      windowName,
      title,
      children,
      isOpen,
      position,
      zIndex,
      windowClassName,
      buttonClassName,
      headerClassName = "",
   }) => {
      if (!isOpen) return null;

      return (
         <div
            className={`fixed bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden ${windowClassName}`}
            style={{
               left: `${position.x}px`,
               top: `${position.y}px`,
               zIndex: zIndex,
            }}
            onClick={(e) => {
               e.stopPropagation();
               if (!e.target.closest("button")) {
                  bringToFront(windowName);
               }
            }}
         >
            {/* Window Header */}
            <div
               className={`bg-gray-800 text-white px-3 p-2.5 transition-all duration-200 ease-in-out rounded-t-md select-none ${activeDrag === windowName ? 'bg-gray-700' : ''} ${headerClassName}`}
               onMouseDown={(e) => handleMouseDown(windowName, e)}
            >
               <Flex className="justify-between items-center">
                  <h4 className="group inline relative hover:text-yellow-600">
                     {title}
                     <span className="w-0 h-0 absolute bottom-0 left-0 group-hover:w-full group-hover:h-[1px] bg-yellow-500 transition-all duration-300"></span>
                  </h4>
                  <button
                     onClick={closeWindow(windowName)}
                     onMouseUp={closeWindowSound}
                     onMouseDown={(e) => e.stopPropagation()}
                     className={`text-gray-300 duration-200 px-2 text-[20px] hover:scale-120 hover:text-white hover:bg-opacity-20 transition-all rounded tracking-widest ${buttonClassName}`}
                  >
                     [x]
                  </button>
               </Flex>
            </div>
            {/* Window Content */}
            <div className="text-gray-800 p-5">{children}</div>
         </div>
      );
   };

   return (
      <>
         <section className="relative" style={{ overflowX: 'hidden', minHeight: screen }}>
            <div>
               {/* Top Icons */}
               <Flex className="gap-x-5 cursor-pointer bg-white p-5 ">
                  <Sun onClick={blackThemeSound} size={30} className="text-gray-500 hover:text-black transition-all duration-300 scale-100 hover:scale-120" />
                  <Volume1 size={30} className="text-gray-500 hover:text-black transition-all duration-300 scale-100 hover:scale-120" />
               </Flex>

               {/* Sun Animation */}
               <Container>
                  <div onMouseDown={sunThemeSound} onClick={toggleWindow('downloads')} className="relative lg:left-0 lg:top-0  bottom-13.5 left-87  group cursor-pointer ">
                     <img className=' z-20 w-15 lg:w-20 absolute -left-10 -rotate-20  group-hover:scale-130 duration-0 transition-all opacity-100 group-hover:opacity-0' src={sun} alt="sun.png" />
                     <img className='w-10 lg:w-20 absolute -left-10 -rotate-20 group-hover:scale-130 duration-200 transition-all opacity-0 group-hover:opacity-100 cursor-pointer' src={sunshine} alt="sunshine.png" />
                  </div>
               </Container>

               {/* Main Content */}
               <Container className="lg:h-[450px]  lg:bg-white rounded-b-lg lg:border-3 border-gray-300 rounded-t-lg overflow-hidden lg:mt-25">
                  <header className='bg-gray-800 lg:opacity-100 opacity-0 text-white px-5 p-3 overflow-hidden border-b-3 border-gray-300'>
                     <h4 className='group inline relative hover:text-yellow-600'>
                        home
                        <span className='w-0 h-0 absolute bottom-0 left-0 group-hover:w-full group-hover:h-[1px] bg-yellow-500 transition-all cursor-pointer duration-300'></span>
                     </h4>
                  </header>

                  <div className="flex flex-col justify-center text-center items-center lg:my-10 select-none">
                     <h1 className='lg:text-[64px] text-[50px] my-3 text-amber-500 tracking-wide'><span className='text-gray-700'>hey!</span> Ayeshaa</h1>
                     <h2 className='text-2xl pb-8 pt-4 text-gray-500 '>
                        Wishing you joy on your special day
                     </h2>

                     {/* Navigation Icons */}
                     <div className="flex gap-x-7">
                        {/* About */}
                        <div className="lg:flex space-y-4 gap-x-7">
                           <div onMouseDown={openingWindowSound} onClick={toggleWindow('about')} className="flex items-center flex-col">
                              <img className='hover:scale-110 w-20 cursor-pointer duration-150 transition-all' src={about} alt="about.png" />
                              <p className='cursor-pointer'>About</p>
                           </div>

                           {/* Memories */}
                           <div onMouseDown={openingWindowSound} onClick={toggleWindow('memories')} className="flex items-center flex-col">
                              <img className='hover:scale-110 w-20 cursor-pointer duration-150 transition-all' src={linked} alt="memories.png" />
                              <p className='cursor-pointer'>Memories</p>
                           </div>
                        </div>

                        <div className="lg:flex space-y-4 gap-x-7">
                           {/* Contact */}
                           <div onMouseDown={openingWindowSound} onClick={toggleWindow('contact')} className="flex items-center flex-col">
                              <img className='hover:scale-110 w-20 cursor-pointer duration-150 opacity-80 transition-all' src={contact} alt="links.png" />
                              <p className='cursor-pointer'>Contact</p>
                           </div>
                           {/* Faq */}
                           <div onMouseDown={openingWindowSound} onClick={toggleWindow('faq')} className="flex items-center flex-col">
                              <img className='hover:scale-110 w-20 cursor-pointer duration-150 opacity-80 transition-all' src={faq} alt="faq.png" />
                              <p className='cursor-pointer'>Faq</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>

            {/* Draggable Windows------------------------------- */}

            {/* About */}
            <DraggableWindow
               className={`w-[600px] ${isMobile ? 'hidden' : 'block'}`}
               windowName="about"
               title="about"
               isOpen={windows.about.isOpen && !isMobile}
               position={windows.about.position}
               zIndex={windows.about.zIndex}
            >
               <Flex className={`pb-3`}>
                  <motion.img
                     initial="hidden"
                     animate="visible"
                     className="w-[120px] rounded-full hover:scale-110 transition-all duration-200 mx-3"
                     src={avatar}
                     alt="avatar"
                  />
                  <div className='select-none'>
                     <h3 className="text-primary text-[30px]">ami jhuti</h3>
                     <p className="text-[14px]">
                        Amr <span className="text-primary">chul khule</span> balcony te boshe <span className="text-primary">time spend</span> korte bhalo lage
                     </p>
                  </div>
               </Flex>

               {/* Contents */}
               <div className="h-[200px] overflow-y-scroll select-none">
                  <div className="max-w-2xl mx-auto px-5 text-gray-800 font-sans">
                     {/* Intro () */}
                     <p className='font-Google text-[14px] pb-5'>
                        <span className='font-mono font-semibold text-xl uppercase'> Ekta jiber jonmer diner niye biboron</span> <br /><br />
                        Starting kmne kri no idea,,Oi <span className='text-primary'>Alutar</span> shte jekhanei jai, shobai ke hype-ekta <span className='text-primary'>positve aura</span> dey. Or hashitao mneeee ekdm..kind a kiivabe bolii..o k hashte dekhle nijer kacheo ekta hashir vab or face e akta <span className='text-primary'>smilee</span> type chole Ashe..or song er mtn or life er whole playlist,,<br />
                        she nije jevabe lead krche amr kache honestly massively <span className='text-primary'>perfect</span> e mne hoi or each and every minor sector eiii^^..or namee to onk kichui bola jaii but definately... :) <br />
                        <br /> Oi <span className='text-primary'>Dherosh</span> tar moddhe etto rosh kosh ache..one kind of perfect person..Happy Birthday re GOAT chachii! <span className='text-lg'>🧛‍♀️</span>
                     </p>

                     {/* Interests */}
                     <span className="font-mono font-semibold text-xl md:text-2xl mt-6 block">Day to Day</span>
                     <ul className="mt-2 font-Google text-[14px]">
                        <li>• Inhale-Exhale</li>
                        <li>• Night spinding like a Owl</li>
                        <li>• Virtual BFF type.. <span className='text-primary'>Anna</span> </li>
                        <li>• During these days,,Ludo ekta boro interest (Added on <span className='text-primary'>15</span>.08.25)</li>
                     </ul>

                     {/* Pochondo */}
                     <span className="font-mono font-semibold text-xl md:text-2xl mt-6 block">Pochondo</span>
                     <ul className="mt-2 text-[14px] font-Google">
                        <li> • Song genre: Je vibe ashe, shei vibe</li>
                        <li > • Food: Momo,<span className='text-primary'>cha, ar random midnight</span> snacks,,bakito motamoti halal ja ache shb e khai fele</li>
                        <li className='flex items-center '> • Dream trip: <span className='text-[30px] px-3'> 🇺🇬</span><span className='text-lg'></span>(You better know)</li>
                     </ul>
                  </div>
               </div>
               {/* Contents */}
            </DraggableWindow>
            {isMobile && windows.about.isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-50 flex items-end justify-center lg:hidden  opacity-20"
               >
                  <motion.div
                     initial={{ y: '100%' }}
                     animate={{ y: '0%' }}
                     exit={{ y: '100%' }}
                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                     className="bg-white border-2 border-gray-300 rounded-t-xl overflow-hidden w-full h-[90vh]"
                  >
                     {/* Header */}
                     <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                        <h4 className="text-lg font-medium">About</h4>
                        <button
                           onClick={() => setWindows(prev => ({ ...prev, about: { ...prev.about, isOpen: false } }))}
                           onMouseUp={closeWindowSound}
                           className={`text-gray-300 duration-200 px-2 text-[20px] hover:scale-120 hover:text-white hover:bg-opacity-20 transition-all rounded tracking-widest `}
                        >
                           [x]
                        </button>
                     </div>

                     {/* Content */}
                     <div className="text-gray-800 p-4 h-full overflow-y-scroll">
                        <Flex className={`pb-3 flex-col text-center`}>
                           <motion.img
                              initial="hidden"
                              animate="visible"
                              className="w-[150px] rounded-full hover:scale-110 transition-all duration-200 mx-3"
                              src={avatar}
                              alt="avatar"
                           />
                           <div className='select-none'>
                              <h3 className="text-primary text-[30px]">ami u-man</h3>
                              <p className="text-[14px]">
                                 Amr <span className="text-primary">chul khule</span> balcony te boshe <span className="text-primary">time spend</span> korte bhalo lage
                              </p>
                           </div>
                        </Flex>

                        <div className="max-w-2xl mx-auto px-5 text-gray-800 font-sans pb-20">
                           {/* Intro () */}
                           <p className='font-Google text-[14px] pb-5'>
                              <span className='font-mono font-semibold text-xl uppercase'> Ekta jiber jonmer diner niye biboron</span> <br /><br />
                              Starting kmne kri no idea,,Oi <span className='text-primary'>Alutar</span> shte jekhanei jai, shobai ke hype-ekta <span className='text-primary'>positve aura</span> dey. Or hashitao mneeee ekdm..kind a kiivabe bolii..o k hashte dekhle nijer kacheo ekta hashir vab or face e akta <span className='text-primary'>smilee</span> type chole Ashe..or song er mtn or life er whole playlist,,<br />
                              she nije jevabe lead krche amr kache honestly massively <span className='text-primary'>perfect</span> e mne hoi or each and every minor sector eiii^^..or namee to onk kichui bola jaii but definately... :) <br />
                              <br /> Oi <span className='text-primary'>Dherosh</span> tar moddhe etto rosh kosh ache..one kind of perfect person..Happy Birthday re GOAT chachii! <span className='text-lg'>🧛‍♀️</span>
                           </p>

                           {/* Interests */}
                           <span className="font-mono font-semibold text-xl md:text-2xl mt-6 block">Day to Day</span>
                           <ul className="mt-2 font-Google text-[14px]">
                              <li>• Inhale-Exhale</li>
                              <li>• Night spinding like a Owl</li>
                              <li>• Virtual BFF type.. <span className='text-primary'>Anna</span> </li>
                              <li>• During these days,,Ludo ekta boro interest (Added on <span className='text-primary'>15</span>.08.25)</li>
                           </ul>

                           {/* Pochondo */}
                           <span className="font-mono font-semibold text-xl md:text-2xl mt-6 block">Pochondo</span>
                           <ul className="mt-2 text-[14px] font-Google">
                              <li> • Song genre: Je vibe ashe, shei vibe</li>
                              <li > • Food: Momo,<span className='text-primary'>cha, ar random midnight</span> snacks,,bakito motamoti halal ja ache shb e khai fele</li>
                              <li className='flex items-center '> • Dream trip: <span className='text-[30px] px-3'> 🇺🇬</span><span className='text-lg'></span>(You better know)</li>
                           </ul>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
            {/* About */}

            {/* Memories */}
            <DraggableWindow
               className={`w-[700px] ${isMobile ? 'hidden' : 'block'}`}
               windowName="memories"
               title="memories"
               isOpen={windows.memories.isOpen && !isMobile}
               position={windows.memories.position}
               zIndex={windows.memories.zIndex} >
               <Devil />
            </DraggableWindow>
            {isMobile && windows.memories.isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-50 flex items-end justify-center lg:hidden"
               >
                  <motion.div
                     initial={{ y: '100%' }}
                     animate={{ y: '0%' }}
                     exit={{ y: '100%' }}
                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                     className="bg-white border-2 border-gray-300 rounded-t-xl overflow-hidden w-full h-[90vh]"
                  >
                     {/* Header */}
                     <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                        <h4 className="text-lg font-medium">Memories</h4>
                        <button
                           onClick={() => setWindows(prev => ({ ...prev, memories: { ...prev.memories, isOpen: false } }))}
                           onMouseUp={closeWindowSound}
                           className={`text-gray-300 duration-200 px-2 text-[20px] hover:scale-120 hover:text-white hover:bg-opacity-20 transition-all rounded tracking-widest `}
                        >
                           [x]
                        </button>
                     </div>

                     {/* Content */}
                     <div className="text-gray-800 p-4 ">
                        <Devil />
                     </div>
                  </motion.div>
               </motion.div>
            )}
            {/* Memories */}
            {/* Contact */}
            <DraggableWindow
               className={`w-[700px] ${isMobile ? 'hidden' : 'block'}`}
               windowName="contact"
               title="contact"
               isOpen={windows.contact.isOpen && !isMobile}
               position={windows.contact.position}
               zIndex={windows.contact.zIndex}
            >
               <ContactLinks />
            </DraggableWindow>
            {isMobile && windows.contact.isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-50 flex items-end justify-center lg:hidden"
               >
                  <motion.div
                     initial={{ y: '100%' }}
                     animate={{ y: '0%' }}
                     exit={{ y: '100%' }}
                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                     className="bg-white border-2 border-gray-300 rounded-t-xl overflow-hidden w-full h-[80vh]"
                  >
                     {/* Header */}
                     <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                        <h4 className="text-lg font-medium">Contact</h4>
                        <button
                           onClick={() => setWindows(prev => ({ ...prev, contact: { ...prev.contact, isOpen: false } }))}
                           onMouseUp={closeWindowSound}
                           className="text-gray-300 duration-200 px-2 text-[20px] hover:scale-120 hover:text-white hover:bg-opacity-20 transition-all rounded tracking-widest"
                        >
                           [x]
                        </button>
                     </div>
                     {/* Content */}
                     <div className="text-gray-800 p-4 h-full overflow-y-scroll">
                        <ContactLinks />
                     </div>
                  </motion.div>
               </motion.div>
            )}
            {/* Contact */}

            {/* Faqs */}
            <DraggableWindow
               className={`w-[600px] ${isMobile ? 'hidden' : 'block'}`}
               windowName="faq"
               title="faq"
               isOpen={windows.faq.isOpen && !isMobile}
               position={windows.faq.position}
               zIndex={windows.faq.zIndex}>
               <div>
                  <Breadcrumbs />
               </div>
            </DraggableWindow>
            {isMobile && windows.faq.isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-50 flex items-end justify-center lg:hidden"
               >
                  <motion.div
                     initial={{ y: '100%' }}
                     animate={{ y: '0%' }}
                     exit={{ y: '100%' }}
                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                     className="bg-white border-2 border-gray-300 rounded-t-xl overflow-hidden w-full h-[90vh]"
                  >
                     {/* Header */}
                     <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                        <h4 className="text-lg font-medium">FAQ</h4>
                        <button
                           onClick={() => setWindows(prev => ({ ...prev, faq: { ...prev.faq, isOpen: false } }))}
                           onMouseUp={closeWindowSound}
                           className="text-gray-300 duration-200 px-2 text-[20px] hover:scale-120 hover:text-white hover:bg-opacity-20 transition-all rounded tracking-widest"
                        >
                           [x]
                        </button>
                     </div>
                     {/* Content */}
                     <div className="text-gray-800 p-4 h-full overflow-y-scroll">
                        <Breadcrumbs />
                     </div>
                  </motion.div>
               </motion.div>
            )}
            {/* Faqs */}

            {/* Downloads */}
            <DraggableWindow
               className={`w-[700px] ${isMobile ? 'hidden' : 'block'}`}
               headerClassName='!bg-primary !hover:text-white '
               buttonClassName='text-white'
               windowClassName="!bg-amber-50 border-b-2 border-l-2 border-r-2 border-primary"
               windowName="downloads"
               title={`downloads`}
               isOpen={windows.downloads.isOpen && !isMobile}
               position={windows.downloads.position}
               zIndex={windows.downloads.zIndex}
            >
               <DownloadablesShowcase />
            </DraggableWindow>
            {isMobile && windows.downloads.isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-50 flex items-end justify-center lg:hidden"
               >
                  <motion.div
                     initial={{ y: '100%' }}
                     animate={{ y: '0%' }}
                     exit={{ y: '100%' }}
                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                     className="bg-amber-50 border-2 border-primary rounded-t-xl overflow-hidden "
                  >
                     {/* Header */}
                     <div className="bg-primary text-white px-4 py-3 flex justify-between overflow-hidden items-center">
                        <h4 className="text-lg font-medium">Downloads</h4>
                        <button
                           onClick={() => setWindows(prev => ({ ...prev, downloads: { ...prev.downloads, isOpen: false } }))}
                           onMouseUp={closeWindowSound}
                           className="text-white duration-200 px-2 text-[20px] hover:scale-120 hover:text-white hover:bg-opacity-20 transition-all rounded tracking-widest">
                           [x]
                        </button>
                     </div>
                     {/* Content */}
                     <div className="text-gray-800 p-4 overflow-y-scroll h-[83vh]">
                        <DownloadablesShowcase />
                     </div>
                  </motion.div>
               </motion.div>
            )}
            {/* Downloads */}

         </section>

         {/* Wave Animation - Fixed to bottom of viewport */}
         <Wave
            className='fixed bottom-0 left-0 w-full -z-10'
            fill='#f79902'
            paused={false}
            style={{ display: 'flex', width: '100%' }}
            options={{
               height: 25,
               amplitude: 35,
               speed: 0.25,
               points: 4
            }}
         />

         {/* Copyright - Fixed to bottom of viewport */}
         <div className="fixed bottom-5 left-1/2 -translate-x-1/2 -z-10 text-white w-full text-center">
            © All rights reserved by `AR
         </div>
      </>
   );
}

export default Home;