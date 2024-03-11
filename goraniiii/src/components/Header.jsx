import { useNavigate } from "react-router-dom"



export function Header () {

  const navigate = useNavigate ()

const navigateHome = () => {
  navigate("/")
}
const navigateInfo = () => {
  navigate("/info")
}
const navigateProjects = () => {
  navigate("/projects")
}

  return (
    <>
      <div style={{ position: 'fixed', width: '80%', display: 'flex', margin: '20px 10vw 20px 10vw', alignItems: 'center', justifyContent: 'space-between' }}> 
        <div style={{ fontSize: '20px', fontWeight: 700, justifyContent: 'flex-start', cursor: 'pointer' }} onClick={navigateHome}> 박고운 GOUN PARK </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flex: 2 }}>
          <div style={{ cursor: 'pointer' }} onClick={navigateProjects}>projects</div>
          <div style={{ cursor: 'pointer' }} onClick={navigateInfo}>info</div>
        </div>
      </div>
    </>
  )
}
