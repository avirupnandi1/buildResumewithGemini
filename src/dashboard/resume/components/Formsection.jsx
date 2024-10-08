import React, { useState } from 'react'
import PersonalDetailsForm from './forms/PersonalDetailsForm'
import { ArrowLeft, ArrowRight, LayoutGrid ,Home} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigate, useParams } from 'react-router-dom';
import Summary from './forms/Summary';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Link } from 'react-router-dom';


function Formsection() {
    const [activeFormIndex, setActiveFormIndex]=useState(1);
    const [enableNext, setEnableNext]=useState(true)
    const {resumeID}=useParams();
  return (
    <div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <Link to={'/dashboard'}>
          <Button><Home/></Button>
          </Link>
            <Button variant='outline' size='sm' className='flex gap-2'><LayoutGrid/>Theme</Button>

            </div>
            <div className='flex gap-2'>
                {activeFormIndex>1 
                && <Button
               
                size='sm' onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
                <Button  
                 disabled={!enableNext} className='flex gap-2' size='sm' onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/></Button>
            </div>
        </div>

{/* personal details */}{/* summary */}

{activeFormIndex==1? <PersonalDetailsForm enableNext={(v)=> setEnableNext(v)}/>:activeFormIndex==2? <Summary enableNext={(v)=> setEnableNext(v)}/>
:activeFormIndex==3? <Experience/>:

activeFormIndex==4? <Education/>:

activeFormIndex==5? <Skills/>:

activeFormIndex==6? <Navigate to={'/my-resume/'+resumeID+'/view'}/>:

null
}


{/* experience */}


{/* educational details */}

{/* skills */}


    </div>
  )
}

export default Formsection