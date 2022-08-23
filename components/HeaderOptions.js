import React from 'react'
import Hoptions from './Hoptions'
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,PhotographIcon,PlayIcon,SearchIcon,

} from "@heroicons/react/outline"

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 
    justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-32
    border-b-[1px]'>
    {/*Left */}
    <div className='flex space-x-6'>
    <Hoptions Icon={SearchIcon} title="All" selected />
    <Hoptions Icon={PhotographIcon} title="Images"  />
    <Hoptions Icon={PlayIcon} title="Videos"  />
    <Hoptions Icon={NewspaperIcon} title="News"  />
    <Hoptions Icon={MapIcon} title="Maps"  />
    <Hoptions Icon={DotsVerticalIcon} title="More"  />

        
    </div>
    {/*Right */}
    <div className='flex space-x-4'>
    <p className='link'>Settings</p>
    <p className='link'>Tools</p>
        
    </div>
    </div>
  )
}

export default HeaderOptions