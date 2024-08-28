
import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AImodel';


const PROMPT='position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume.Return the result as a JSON array of strings, without HTML tags'

function RichTextEditor({onRichTextEditorChange,index}) {
    const [value,setValue]=useState();
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading]=useState(false);

    const GenerateSummeryFromAI=async()=>{
     
        if(!resumeInfo?.experience[index]?.title)
        {
          toast('Please Add Position Title');
          return ;
        }
        setLoading(true)
        const prompt=PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title);
        
        const result=await AIChatSession.sendMessage(prompt);
        console.log(result.response.text());
        const resp=result.response.text()
        setValue(resp.replace('[','').replace(']',''));
        setLoading(false);
      }
    
  return (
    <div>  
        <div className='flex justify-between my-2'>
            <label className="text-s">Summary</label>
            <Button variant='outline' size='sm' className='flex gap-2 border-purple-500 text-purple-600'
             onClick={GenerateSummeryFromAI} > 
           
             {loading?<LoaderCircle className='animate-spin'/>  :
                
                <>
               <Brain className='h-4 w-4 '/>Generate From AI
                </>
            }
            </Button>
        </div>
        
        
         <EditorProvider>
    <Editor value={value} onChange={(e)=>{
      setValue(e.target.value);
      onRichTextEditorChange(e)
    }}>
       <Toolbar>
        <BtnBold />
        <BtnItalic />
        <BtnUnderline />
        <BtnStrikeThrough />
        <Separator />
        <BtnNumberedList />
        <BtnBulletList />
        <Separator />
        <BtnLink />
       
       
      </Toolbar>
      
    </Editor> 

    </EditorProvider></div>
  )
}

export default RichTextEditor