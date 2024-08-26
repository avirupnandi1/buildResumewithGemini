import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react'
import PersonalDetails from './preview/personalDetails';
import { useState } from 'react';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationPreview from './preview/EducationPreview';
import SkillPreview from './preview/SkillPreview';

function Resumepreview() {

    const {resumeInfo, setResumeInfo}=useContext(ResumeInfoContext);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeInfo?.themeColor}}>

   {/* personal details */}
   <PersonalDetails resumeInfo={resumeInfo}/>

   {/* Summary */}
   <SummaryPreview resumeInfo={resumeInfo}/>
   {/* prof experience */}

   <ExperiencePreview resumeInfo={resumeInfo}/>
   {/* education */}
   <EducationPreview resumeInfo={resumeInfo}/>
   {/* skills */}
   <SkillPreview resumeInfo={resumeInfo}/>

    </div>
  )
}

export default Resumepreview