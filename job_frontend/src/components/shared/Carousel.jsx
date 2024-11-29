import React, { useRef, useState } from "react";

const items = [
    "Hello1", "Hello2", "Hello3", "Hello4", "Hello5"
]

const Carousel = () => {
    //Didn't use this component anywhere. Made a caoursel in this for practice and save in github.
    
    const myDiv = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    function goBack(){
        if(!myDiv) return;
        if(currentIndex === 0) setCurrentIndex(items.length - 1);
        else setCurrentIndex(currentIndex - 1);
        myDiv.current.style.transition = "transform 0.5s ease-in-out";
        myDiv.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
    function goAhead(){
        if(!myDiv) return;
        if(currentIndex === items.length - 1) setCurrentIndex(0);
        else setCurrentIndex(currentIndex + 1);
        myDiv.current.style.transition = "transform 0.5s ease-in-out";
        myDiv.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
  return (
    <div className="flex relative overflow-hidden h-screen w-auto items-center justify-between bg-red-500 text-white">
        <div className="cursor-pointer z-10 absolute left-0 text-5xl" onClick={goBack}>{'<'}</div>
        <div className="w-auto flex h-full items-center" ref={myDiv}>
            {
                items.map((item, index) => {
                    return (
                        <div className="flex-shrink-0 w-[100vw] h-screen" key={index}>{item}</div>
                    )
                })
            }
        </div>
        <div className="cursor-pointer z-10 absolute right-0 text-5xl" onClick={goAhead}>{'>'}</div>
        <div className='flex justify-center items-center'>
          <div className='flex relative justify-between items-center w-[20vw] h-[40vh]'>
            <div onClick={decrement}>{'<'}</div>
            <div className='bg-yellow-500 w-[100%] h-[100%] flex justify-center items-center overflow-hidden'>
              <div className='relative flex w-[100%] text-center' ref={myDiv}>
                {
                  arr.map((item, index) => {
                    return (
                      <div className='min-w-[100%]'>{item}</div>
                    )
                  })
                }
              </div>
            </div>
            <div onClick={increment}>{'>'}</div>
          </div>
      </div>
    </div>
  );
};

export default Carousel;
