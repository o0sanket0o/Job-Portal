import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Radio } from 'lucide-react'
import { Label } from '../ui/label'

const filterData = [
    {
        filterType: 'Location',
        array: ["Delhi", "Bangalaore", "Chennai", "Pune", "Mumbai"],
    },
    {
        filterType: "Industry",
        array: ["IT", "Finance", "Marketing", "Sales", "HR"],
    },
    {
        filterType: "Salary",
        array: ["10 LPA", "20 LPA", "30 LPA", "40 LPA", "50 LPA"],
    }
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        {/* We need filter type. According to location, industry/salary. */}
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
            {
                filterData.map((filter, index) => (
                    <div>
                        <h1 className='text-lg font-bold' key={index}>{filter.filterType}</h1>
                        {
                            filter.array.map((item, index) => (
                                <div className='flex items-center gap-2 my-2'>
                                    <RadioGroupItem value={item} />
                                    <Label>{item}</Label>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard