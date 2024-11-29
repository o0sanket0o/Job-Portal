import React from 'react'
import Navbar from './shared/Navbar'
import Job from './shared/Job';

const Browse = () => {
  const foundJobs = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 2, 3, 4];
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto mt-6'>
        <h1 className='font-bold text-lg'>Search Results ({foundJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
          {
            foundJobs.map((job, index) => (
              <Job/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Browse