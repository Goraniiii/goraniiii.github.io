import { Header } from "../components/Header";
import { styled } from "styled-components";

export function Info () {
  return (
    <>
      <Header />

      <div style={{ justifyContent: "space-around", flexDirection: 'row', padding: '80px 10vw 30px' }}>
        <div>
          <h3>Contact</h3>
          <div>
            <div>mailto: <Link href="mailto:gony06011@gmail.com">gony06011@gmail.com</Link></div>
            <div>github: <Link href="http://github.com/goraniiii">github.com/goraniiii</Link></div>
          </div>
        </div>
        <div>
          <h3>Education</h3>
          <div>
            <div>
              <div>2021 ~ current</div>
              <div>동국대학교 컴퓨터공학전공</div>
              <div>Dongguk Univ. Computer Science and Engineering</div>
            </div>
          </div>
        </div>
        <div>
          <h3>Skills</h3>
          <div>
            <li>C/C++</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>React</li>
            <li>MySQL</li>
            <li>Git(GitHub/GitLab)</li>
            <li>Docker</li>
          </div>
        </div>
        <div>
          <h3>Also studying...</h3>
          <div>
            <li>Typescript</li>
            <li>WebGL</li>
            <li>three.js</li>
            <li>Figma</li>
            <li>OpenGL</li>
            <li>TouchDesigner</li>
          </div>
        </div>
        <div>
          <h3>Interests</h3>
          <div>
            <li>Web Developement</li>
            <li>UI/UX</li>
            <li>Interaction Design</li>
            {/* <li>Human Computer Interaction</li> */}
            <li>Computer Graphics</li>
            <li>Media art</li>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>Copyright 2024. Goun Park all rights reserved.</div>
      </div>
    </>
  )
}

const Link = styled('a')(() => ({
  color: 'navy',
  textDecoration: 'none',
  fontWeight: 550,
  '&:hover': {
    textDecoration: 'underline',
    color: "gray"
  }

}))