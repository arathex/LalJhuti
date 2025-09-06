import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import useSound from 'use-sound';
import boopSfx from '../sound/3 Cute Pop Sounds.mp3';

export default function ArtistProfile() {
   const [manush, setManush] = useState(false);
   const [commission, setCommission] = useState(false);
   const [single, setSingle] = useState(false);
   const [food, setFood] = useState(false);
   const [dance, setDance] = useState(false);
   const [kipta, setkipta] = useState(false);
   const [gan, setGan] = useState(false);
   return (
      <div className="max-w-2xl mx-auto p-4 space-y-4 overflow-y-auto">
         <div  className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setManush(!manush)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">She ki manush?</h2>
               {manush ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {manush && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong>Oxford she manushh,,jdio majhe majhe mone kre she fereshtar thke kom na🫣</strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>
            )}
         </div>

         <div className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setSingle(!single)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">Taken ?</h2>
               {single ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {single && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong> She's in a long-term, emotionally unavailable relationship with her phone</strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>

            )}
         </div>

         <div className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setFood(!food)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">What's her favorite khaddo?</h2>
               {food ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {food && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong>  Effortless vabe edible ja ashe shmne</strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>

            )}
         </div>

         <div className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setDance(!dance)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">Nachte paree?</h2>
               {dance ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {dance && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong> Hebbii nachee! 💃</strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>

            )}
         </div>

         <div className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setkipta(!kipta)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">She ki kipta?</h2>
               {kipta ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {kipta && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong> Shotti ktha bolle mair khabo tai bola jabena🤧</strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>

            )}
         </div>

         <div className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setCommission(!commission)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">Why does she get a whole website?</h2>
               {commission ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {commission && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong>Janina,,emniii mon cheyeche taii..deksho ami kotto valo '
                              tao oi sokina amk dam deina 😒 </strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>

            )}
         </div>
         
         <div className="bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
               onClick={() => setGan(!gan)}
               className="w-full flex items-center justify-between p-4 text-left hover:bg-yellow-100 transition-colors"
            >
               <h2 className="text-lg font-medium text-gray-700">Group song</h2>
               {gan ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
               ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
               )}
            </button>

            {gan && (
               <div className="px-4 pb-4 pt-2 bg-white">
                  <ul className="space-y-2 text-gray-600">
                     <li className="flex items-start ">
                        <span className="w-2 mb-5 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span >
                           <strong>Absolutelyy🎵</strong>
                           <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                           </a>
                        </span>
                     </li>
                  </ul>
               </div>

            )}
         </div>

      </div>
   );
}