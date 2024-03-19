import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
      <div style={{ position: 'fixed', width: '80%', display: 'flex', margin: '20px 10vw 20px 10vw', alignItems: 'center', justifyContent: 'space-between', color: "black" }}> 
        <HomeBtn onClick={navigateHome}> 박고운 GOUN PARK </HomeBtn>
        <MenuContainer>
          <Menu onClick={navigateProjects}>projects</Menu>
          <Menu onClick={navigateInfo}>info</Menu>
        </MenuContainer>
      </div>
    </>
  )
}

const HomeBtn = styled('div')(() => ({
  fontSize: '20px',
  fontWeight: 700,
  justifyContent: 'flex-start',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
    color: "gray"
  }
}))

const MenuContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  flex: 2
}))

const Menu = styled('div')(() => ({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
    color: "gray"
  }
}))