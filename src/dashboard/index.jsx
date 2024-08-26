import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalAPI from './../../service/GlobalAPI'
import ResumeCardItem from './components/ResumeCardItem';



function Dashboard() {

const {user}=useUser();
const [resumeList, setResumeList]=useState([]);

  useEffect(()=>{
user&&GetResumeList()
},[user])

// used to get user resumeList
const GetResumeList=()=>{
GlobalAPI.GetUserResume(user?.primaryEmailAddress?.emailAddress).then(resp=>{
 
  setResumeList(resp.data.data);
})
}


  return (
    <div className='p-10 md:px-20 lg:px-32'>
      
     <h2 className='font-bold text-3xl'>My Resume</h2>
     <p className='mt-2'>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 '>
        <AddResume/>
       {resumeList.length>0 &&resumeList.map((resume,index)=>(
        <ResumeCardItem resume={resume} key={index}/>
       ))}
      </div>
      </div>
  )
}

export default Dashboard