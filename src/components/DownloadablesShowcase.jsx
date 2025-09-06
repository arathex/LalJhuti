import Flex from './Flex'
import SaveButton from './layouts/saveButton';

// IMG
import Front from '../assets/Ayyu_One.png'
import Back from '../assets/Ayyu_Two.png'
// IMG

const DownloadablesShowcase = () => {
   return (
      <>
         <div className="p-4 rounded-[5px] lg:w-[500px] pb-10 lg:h-[500px] mb-3 overflow-y-auto select-none">
            <p className='font-Google rounded-lg p-5 bg-white text-center'>here's some free stuff for for you enjoyment. Ik I am best,,no "Thank you" needed!
               hehe..enjoy buddyy# </p>
            <div className=" mt-5">
               <div className="m-auto gap-4 lg:flex-row flex flex-col justify-around items-center">
                  <img className='w-[200px] hover:scale-105 transition-all duration-200 rounded-lg' src={Front} alt="Ayyu_One.png" />
                  <img className='w-[200px] hover:scale-105 transition-all duration-200 rounded-lg' src={Back} alt="Ayyu_Two.png" />
               </div>
               <h2 className='font-Google text-center mt-5 mb-3'>Virtual Friendship Identity Card</h2>
               <div className="flex justify-center mb-10 mt-2">
                  <a href='https://drive.google.com/drive/folders/18iihhx44iv777s99NzKkyFpC1hKJ78Xd?usp=share_link' target='_blank' type='button' className='px-6 py-2 text-[14px] bg-primary text-white rounded-lg hover:bg-white border hover:border-primary hover:text-primary transition-all duration-250'>Download</a>
               </div>

               <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p>If you <span className='text-primary'>enjoy</span> this, consider sharing it with a friend! Also if you have <span className='text-primary'>any queries</span> feel free to reach out to the <span className='text-primary'>Developer</span>.</p>
               </div>
            </div>
         </div>
      </>
   )
}

export default DownloadablesShowcase