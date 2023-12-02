import { IconLink } from './icons'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { Subtitle } from './subtitle'

export function SideBarRight () {
  return (
    <aside className="fixed top-0 right-0 h-screen bg-white w-[5%] flex flex-col items-center py-4 gap-2">
      <Subtitle>Links</Subtitle>
      <IconLink icon={<AiFillInstagram className='w-full h-full'/>} link='https://www.instagram.com/' />
      <IconLink icon={<FaTwitter className='w-full h-full'/>} link='https://twitter.com/' />
     
    </aside>
  )
}
