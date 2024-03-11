import { Header } from "../components/Header";

export function Projects () {
  return (
    <>
      <Header />

      <div style={{ justifyContent: "space-around", flexDirection: 'row', padding: '80px 10vw 30px' }}>
        <div>
          <h3>Projects</h3>
          <div>
            <div>
              <div><b>IJOA</b></div>
              <div>웹 기반 공유형 긴급 아이돌봄 서비스</div>
              <div>2023.03 ~ 2023.11, 2024.02 ~ current(refactoring)</div>
              <div>Spring, React.js</div>
              <div> <a href="https://kiss.kstudy.com/Detail/Ar?key=4059545">KIPS_C2023B0455</a></div>
              <div>본 프로젝트는 과학기술정보통신부 정보통신창의인재양성사업의 지원을 통해 수행한 ICT멘토링 프로젝트 결과물입니다.</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>Copyright 2024. Goun Park all rights reserved.</div>
      </div>
    </>
  )
}
