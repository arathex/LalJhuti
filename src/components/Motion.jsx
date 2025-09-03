import React, { useState, useRef, useEffect } from 'react';

const SoftwareUsed = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);

  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px`:'0px');
    }
  }, [isOpen]);

  return (
    <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-md max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-mono text-gray-800 text-lg mb-2 cursor-pointer focus:outline-none"
      >
        ↓ what software do you use?
      </button>

      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        >
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>
            illustration: <a href="#" className="text-orange-500 underline">Clip Studio Paint EX</a>
          </li>
          <li>
            animation: <a href="#" className="text-orange-500 underline">Clip Studio Paint EX</a>, Adobe Animate
          </li>
          <li>
            3D: blender 2.83 LTS
          </li>
          <li>
            feel free to check the rest of the tools I use in the <span className="text-orange-500 underline">Work window</span>!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SoftwareUsed;
