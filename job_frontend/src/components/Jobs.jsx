import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './shared/FilterCard'
import Job from './shared/Job';
const jobsArr = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
        {/* Filter page */}
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='flex gap-5'>
                <div className='w-[12vw]'>
                    <FilterCard/>
                </div>
                {
                    jobsArr.length <= 0 ? <span>Jobs not found</span>: (
                        // flex 1 means to occupy the remaining width of the parent container which is set as the flex
                        <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                            {/* To build a scrollable div within a particular height and width */}
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    jobsArr.map((job, index) => (
                                        <div>
                                            <Job/>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
        {/* Jobs card */}
    </div>
  )
}

export default Jobs