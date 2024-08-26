import React, { useState } from 'react'
import PersonalDetailsForm from './forms/PersonalDetailsForm'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useParams } from 'react-router-dom';

function Formsection() {
    const [activeFormIndex, setActiveFormIndex]=useState(1);
    const [enableNext, setEnableNext]=useState(false)
    const {resumeID}=useParams();
  return (
    <div>
        <div className='flex justify-between items-center'>
            <Button variant='outline' size='sm' className='flex gap-2'><LayoutGrid/>Theme</Button>
            <div className='flex gap-2'>
                {activeFormIndex>1 
                && <Button
               
                size='sm' onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
                <Button  
                 disabled={!enableNext} className='flex gap-2' size='sm' onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/></Button>
            </div>
        </div>

{/* personal details */}

{activeFormIndex==1? <PersonalDetailsForm enableNext={(v)=> setEnableNext(v)}/>:null}
{/* summary */}

{/* experience */}

{/* educational details */}

{/* skills */}


    </div>
  )
}

export default Formsection