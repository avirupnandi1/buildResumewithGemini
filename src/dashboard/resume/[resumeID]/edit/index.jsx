import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formsection from '../../components/Formsection';
import Resumepreview from '../../components/Resumepreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummydata from '@/data/dummydata';
import GlobalAPI from './../../../../../service/GlobalAPI';

function EditResume() {
    const {resumeID} = useParams();
    const [resumeInfo, setResumeInfo]=useState();
    useEffect(()=>{
     GetResumeInfo();
    },[])



    const GetResumeInfo=()=>{
      GlobalAPI.GetResumeById(resumeID).then(resp=>{
        console.log(resp.data.data)
        setResumeInfo(resp.data.data)
      })
    }
  return (

    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <Formsection/>
        <Resumepreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume