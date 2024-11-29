import React from 'react'
import LatestJobCards from './LatestJobCards';
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold '> <span className='text-red-500'> Latest & Top</span> Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
          {
            //Since it is the latest jobs part so we will show only 6 jobs.
            randomJobs.slice(0, 6).map((item, index) => <LatestJobCards/>)
          }
        </div>
      </div>
    </div>
  )
}

export default LatestJobs