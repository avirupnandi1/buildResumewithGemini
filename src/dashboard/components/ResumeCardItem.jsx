
import GlobalAPI from './../../../service/GlobalAPI'


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2Icon, MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner'

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalAPI.DeleteResumeById(resume.documentId).then(resp => {
      console.log(resp);
      toast('Resume Deleted!');
      refreshData();
      setLoading(false);
      setOpenAlert(false);
    }, (error) => {
      setLoading(false);
      console.error("Error deleting resume:", error);
      toast('Failed to delete resume');
    });
  };

  return (
    <div className="relative">
      <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
        <div className='p-14 bg-gradient-to-r from-blue-400 ml-5 flex items-center justify-center h-[280px] bg-secondary border border-primary rounded-lg gap-6 hover:scale-110 transition-all hover:shadow-md shadow-primary'>
          <img src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png" height={80} width={80} alt="" />
        </div>
        <h2 className='text-center p-4'>{resume.title}</h2>
      </Link>
      
      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <MoreVertical size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigation('/dashboard/resume/'+resume.documentId+"/edit")}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation('/my-resume/'+resume.documentId+"/view")}>
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation('/my-resume/'+resume.documentId+"/view")}>
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your resume
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete} disabled={loading}>
              {loading ? <Loader2Icon className='animate-spin' /> : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default ResumeCardItem

