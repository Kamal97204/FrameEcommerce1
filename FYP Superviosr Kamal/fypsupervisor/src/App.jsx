import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProjectStatusCard from './views/home/ProjectStatusCard'
import StudentListComponent from './views/home/StudentListComponent'
import UpcomingMeetingsComponent from './views/home/UpcomingMeetingsComponent'
import DocumentSubmissionAlert from './views/home/DocumentSubmissionAlert'
import ProjectTimelineComponent from './views/home/ProjectTimelineComponent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProjectStatusCard/>
     <StudentListComponent/>
     <UpcomingMeetingsComponent/>
     <DocumentSubmissionAlert/>
     <ProjectTimelineComponent/>
    </>
  )
}

export default App
