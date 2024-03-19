import { Header } from "../components/Header";

export function Home () {
  return (
    <>
      <Header />

      <div style={{ justifyContent: "space-around", flexDirection: 'row', padding: '80px 10vw 30px' }}>
        <div>also known as goraniiii</div>
        <div style={{ marginTop: 30 }}>Copyright 2024. Goun Park all rights reserved.</div>
      </div>
    </>
  )
}
