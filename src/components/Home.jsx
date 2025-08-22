import Wave from 'react-wavify'
import Container from './Container'
import Flex from './Flex';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound';



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
import sun from '../assets/sun.png'
import sunshine from '../assets/sunshine.png'
import avatar from '../assets/IMG_8912.jpg'
import Devil from './Devil';

const Home = () => {

   // Sound Effects
   let [closeWindowSound] = useSound(soundOne)
   let [openingWindowSound] = useSound(soundTwo)
   let [blackThemeSound] = useSound(soundThree)
   let [sunThemeSound] = useSound(soundFour)

   // Individual window states
   const [windows, setWindows] = useState({
      about: {
         isOpen: false,
         position: { x: 200, y: 150 },
         zIndex: 999
      },
      memories: {
         isOpen: false,
         position: { x: 400, y: 140 },
         zIndex: 999
      },
      links: {
         isOpen: false,
         position: { x: 600, y: 200 },
         zIndex: 999
      }
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

   // Window component
   const DraggableWindow = ({ windowName, title, children, isOpen, position, zIndex }) => {
      if (!isOpen) return null;

      return (
         <div
            className="fixed bg-white border-2 border-gray-300 rounded-lg shadow-lg h-[450px] overflow-hidden w-[750px]"
            style={{
               left: `${position.x}px`,
               top: `${position.y}px`,
               zIndex: zIndex
            }}
            onClick={(e) => {
               e.stopPropagation();
               if (!e.target.closest('button')) {
                  bringToFront(windowName);
               }
            }}
         >
            {/* Window Header */}
            <div
               className={`bg-gray-800 text-white px-3 p-2.5 transition-all duration-200 ease-in-out rounded-t-md  select-none ${activeDrag === windowName ? 'bg-gray-700' : ''
                  }`}
               onMouseDown={(e) => handleMouseDown(windowName, e)}
            >
               <Flex className="justify-between items-center">
                  <h4 className='group inline relative hover:text-yellow-600'>
                     {title}
                     <span className='w-0 h-0 absolute bottom-0 left-0 group-hover:w-full group-hover:h-[1px] bg-yellow-500 transition-all duration-300'></span>
                  </h4>
                  <button
                     onClick={closeWindow(windowName)}
                     onMouseUp={closeWindowSound}
                     onMouseDown={(e) => e.stopPropagation()}
                     className="text-gray-300 transition-colors px-2 hover:text-white hover:bg-red-600 hover:bg-opacity-20 rounded">x</button>
               </Flex>
            </div>

            {/* Window Content */}
            <div className="text-gray-800 p-5">
               {children}
            </div>
         </div>
      );
   };





   // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


   // const avatarVariants = {
   //    hidden: { scale: 0.8, opacity: 0 },
   //    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
   // }

   // const textVariants = {
   //    hidden: { x: -20, opacity: 0 },
   //    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
   // }

   return (
      <>
         <section>
            <div>
               {/* Top Icons */}
               <Flex className="gap-x-5 cursor-pointer bg-white p-5 ">
                  <Sun onClick={blackThemeSound} size={30} className="text-gray-500 hover:text-black transition-all duration-300 scale-100 hover:scale-120" />
                  <Volume1 size={30} className="text-gray-500 hover:text-black transition-all duration-300 scale-100 hover:scale-120" />
               </Flex>

               {/* Sun Animation */}
               <Container>
                  <div onClick={sunThemeSound} className="relative group cursor-pointer ">
                     <img className=' z-20 w-20 absolute -left-10 -rotate-20  group-hover:scale-130 duration-0 transition-all opacity-100 group-hover:opacity-0' src={sun} alt="sun.png" />
                     <img className='w-20 absolute -left-10 -rotate-20 group-hover:scale-130 duration-200 transition-all opacity-0 group-hover:opacity-100 cursor-pointer' src={sunshine} alt="sunshine.png" />
                  </div>
               </Container>

               {/* Main Content */}
               <Container className="bg-white rounded-b-lg border-2 border-gray-300 rounded-t-lg overflow-hidden mt-25">
                  <header className='bg-gray-800 text-white px-5 p-3 overflow-hidden'>
                     <h4 className='group inline relative hover:text-yellow-600'>
                        home
                        <span className='w-0 h-0 absolute bottom-0 left-0 group-hover:w-full group-hover:h-[1px] bg-yellow-500 transition-all cursor-pointer duration-300'></span>
                     </h4>
                  </header>

                  <div className="w-full flex flex-col justify-center items-center my-25 select-none">
                     <h1 className='text-5xl my-2 text-amber-500 tracking-wide'>hey! u-mans</h1>
                     <h2 className='text-2xl my-2 text-gray-500'>
                        Wishing you joy on your special day
                     </h2>

                     {/* Navigation Icons */}
                     <div className="flex gap-x-7">
                        {/* About */}
                        <div onMouseDown={openingWindowSound} onClick={toggleWindow('about')} className="flex items-center flex-col">
                           <img className='hover:scale-110 w-20 cursor-pointer duration-150 transition-all' src={about} alt="about.png" />
                           <p className='cursor-pointer'>About</p>
                        </div>

                        {/* Memories */}
                        <div onMouseDown={openingWindowSound} onClick={toggleWindow('memories')} className="flex items-center flex-col">
                           <img className='hover:scale-110 w-20 cursor-pointer duration-150 transition-all' src={linked} alt="memories.png" />
                           <p className='cursor-pointer'>Memories</p>
                        </div>

                        {/* Links */}
                        <div onMouseDown={openingWindowSound} onClick={toggleWindow('links')} className="flex items-center flex-col">
                           <img className='hover:scale-110 w-20 cursor-pointer duration-150 transition-all' src={contact} alt="links.png" />
                           <p className='cursor-pointer'>Links</p>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>

            {/* Draggable Windows */}


            <DraggableWindow
               className="draggable-window"
               windowName="about"
               title="about"
               isOpen={windows.about.isOpen}
               position={windows.about.position}
               zIndex={windows.about.zIndex}
            >
               <Flex className={`pb-3`}>
                  <motion.img
                     initial="hidden"
                     animate="visible"
                     // variants={avatarVariants}
                     className="w-[120px] rounded-full hover:scale-110 transition-all duration-200 mx-3"
                     src={avatar}
                     alt="avatar"
                  />
                  <div className='select-none'>
                     <h3 className="text-primary text-[30px]">ami u-man</h3>
                     <p className="text-[14px]">
                        Amr <span className="text-primary">chul khule</span>  balcony te boshe <span className="text-primary">time spend</span> korte bhalo lage
                     </p>
                  </div>
               </Flex>

               {/* Contents */}
               <div className="h-[200px] overflow-y-auto select-none">

                  <div className="max-w-2xl mx-auto px-5 text-gray-800 font-sans">


                     {/* Intro () */}
                     <p className='font-Google text-[14px] pb-5'>
                        <span className='font-mono font-semibold text-xl uppercase'>    Ekta jiber jonmer diner niye biboron</span> <br /><br />

                        Starting kmne kri no idea,,Oi <span className='text-primary'>Alutar</span> shte jekhanei jai, shobai ke hype-ekta <span className='text-primary'>positve aura</span> dey. Or hashitao mneeee ekdm..kind a kiivabe bolii..o k hashte dekhle nijer kacheo ekta hashir vab or face e akta <span className='text-primary'>smilee</span> type chole Ashe..or song er mtn or life er whole playlist,,<br />
                        she nije jevabe lead krche amr kache honestly massively <span className='text-primary'>perfect</span> e mne hoi or each and every minor sector eiii^^..or namee to onk kichui bola jaii but definately... :) <br />
                        <br /> Oi <span className='text-primary'>Dherosh</span> tar moddhe etto rosh kosh ache..one kind of perfect person..Happy Birthday re GOAT chachii! <span className='text-lg'>🧛‍♀️</span></p>


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
                        <li>  • Song genre: Je vibe ashe, shei vibe</li>
                        <li > • Food: Momo,<span className='text-primary'>cha, ar random midnight</span> snacks,,bakito motamoti halal ja ache shb e khai fele</li>
                        <li className='flex items-center '> • Dream trip: <span className='text-[30px] px-3'> 🇺🇬</span><span className='text-lg'></span>(You better know)</li>
                     </ul>
                  </div>
               </div>
               {/* Contents */}
            </DraggableWindow>


            <DraggableWindow
               windowName="memories"
               title="memories"
               isOpen={windows.memories.isOpen}
               position={windows.memories.position}
               zIndex={windows.memories.zIndex}
            >
                  <Devil />
            </DraggableWindow>

            <DraggableWindow
               windowName="links"
               title="links"
               isOpen={windows.links.isOpen}
               position={windows.links.position}
               zIndex={windows.links.zIndex}
            >
               <div>
                  <h3 className="text-primary text-xl mb-3">Connect with me</h3>
                  <div className="space-y-2">
                     <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                        📧 Email: miftah@example.com
                     </a>
                     <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                        💼 LinkedIn: linkedin.com/in/miftahulhaq
                     </a>
                     <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                        💻 GitHub: github.com/miftahulhaq
                     </a>
                     <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                        🐦 Twitter: @miftahulhaq
                     </a>
                  </div>
               </div>
            </DraggableWindow>

            {/* Wave Animation */}
            <Wave
               className='absolute bottom-0 left-0 -z-10'
               fill='#f79902'
               paused={false}
               style={{ display: 'flex', width: '100%' }}
               options={{
                  height: 40,
                  amplitude: 40,
                  speed: 0.25,
                  points: 4
               }}
            />
         </section>
      </>
   );
}

export default Home;