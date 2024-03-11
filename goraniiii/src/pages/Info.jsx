import { Header } from "../components/Header";

export function Info () {
  return (
    <>
      <Header />

      <div style={{ justifyContent: "space-around", flexDirection: 'row', padding: '80px 10vw 30px' }}>
        <div>github <a href="http://github.com/goraniiii">github.com/goraniiii</a></div>
        <div>
          <h3>Contact</h3>
          <div>
            <div>mailto <a href="mailto:gony06011@gmail.com">gony06011@gmail.com</a></div>
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
          </div>
        </div>
        <div>
          <h3>Interests</h3>
          <div>
            <li>Web Develope</li>
            <li>Interaction Design</li>
            {/* <li>Human Computer Interaction</li> */}
            <li>Graphics</li>
            <li>Media art</li>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>Copyright 2024. Goun Park all rights reserved.</div>
      </div>
    </>
  )
}
