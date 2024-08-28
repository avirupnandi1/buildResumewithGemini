import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
   <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
   <div className=' p-14 bg-gradient-to-r from-blue-400  ml-5 flex items-center justify-center h-[280px] bg-secondary border border-primary rounded-lg
   gap-6 hover:scale-110 transition-all hover:shadow-md shadow-primary'>
{/* <Notebook/> */}
<img src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png " height={80} width={80} alt="" />
    </div>
    <h2 className='text-center p-4'>{resume.title}</h2>
    </Link>
    
  )
}

export default ResumeCardItem