import './css/Resset.css';
import './css/App.css';
import React, { useRef, useState } from "react";

function App() {
  // <---- 자바스크립트 영역 ---->
  
  //국가리스트 상태 관리 & 메달 집계 추가 기능 구현

  const [countries, setCountries] = useState([
    
  ]);
  // 국가 이름을 입력하는 Input 값을 상태관리하기 위한 useState

  const [country, setCountry] = useState(""); //국가
  const [gold, setGold] = useState(0); //금메달
  const [silver, setSilver] = useState(0); //은메달
  const [bronze, setBronze] = useState(0); //동메달


  //리스트수정
  const handleUpdateCountry = (event) =>{
    // (1) input창 중에 나라이름에 매칭된 state 정보(코드 작성 x)
    // (2) state에 있는 나라이름(ex: 대한민국)으로 현재 존재하는 countries 배열에서 찾아
    // by find => 내가 수정하려고 하는 대상 국가
    const targetCountry = countries.find(function(c){
      if (c.country === country){
        return true
      }else{
        return false
      }
    });
    console.log(targetCountry);
    // (3) map을 사용함
    // (3)-1. map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하면 => gold, silver, bronze state에 맞게 수정하여 내보내(return)
    // (3)-2. map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하지 않으면 => 그대로 내보내(return)
    const newCountries = countries.map(countries => {
      if(countries === targetCountry){
        //수정대상
        return {
          country: country,
          gold: gold,
          silver: silver,
          bronze: bronze,
        }
      }else{
        //수정x
        return countries
      }
    });
    console.log(newCountries)
    
    // (4) setCountries
    setCountries(newCountries)

    // (5) input에 연결되어있는 state들을 초기화
    
    setCountry("")
    setGold(0)
    setSilver(0)
    setBronze(0)
    
   event.preventDefault();
  }


  // 리스트추가
  const handleAddCountry = (event) => {
 
    //국가를 입력하지 않으면 alert + 추가 안됨
    if(country === ""){alert("국가를 입력하세요")}

    const newCountry = {
      id: new Date().getTime(),
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    }

  setCountries([...countries, newCountry])
  
  setCountry("")
  setGold(0)
  setSilver(0)
  setBronze(0)
  
  event.preventDefault();
    // 메달 메달 갯수를 입력하는 로직이 필요할 거에요.
    
    
  };


  //리스트삭제
  const handleDeleteCountry = (id) =>{
    const filteringCountries = countries.filter(function(country){
      return country.id != id
    });
    console.log(filteringCountries);
    setCountries(filteringCountries);
  };


  return (/* <---- HTML/JSX 영역  ---->*/
    <>
    <section>
      <div className="medalTracker">
        <h1>2024 파리 올림픽🥇🥈🥉 </h1>
      <form>
        <div className="inputBox">
          <label>국가명</label>
          <input
            type="text" 
            value={country}
            onChange={(e)=>{
              setCountry(e.target.value);
            }}
            placeholder="국가 입력"
          />
        </div>
        <div className="inputBox">
          <label>금메달</label>
          <input 
            type="number" 
            value={gold} 
            onChange={(e) => {
              setGold(e.target.value);
            }}
            placeholder="0" 
          />
        </div>
        <div className="inputBox">
          <label>은메달</label>
          <input 
            type="number" 
            value={silver} 
            onChange={(e) => {
              setSilver(e.target.value);
            }}
            placeholder="0" 
          />
        </div>
        <div className="inputBox">
          <label>동메달</label>
          <input 
            type="number" 
            value={bronze} 
            onChange={(e) => {
              setBronze(e.target.value);
            }}
            placeholder="0" 
          />
        </div>
        <div className="inputBox">
          <button 
            type="submit"
            onClick={handleAddCountry}
            >
              국가 추가
          </button>

          <button 
            type="button"
            onClick={handleUpdateCountry}  
          >
              업데이트
          </button>
        </div>
      </form>
      </div>
    </section>
    <table id="medalGraph">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {
          countries.map(function (countries){
            return (
              <tr key={countries.id}>
                <td>{countries.country}</td>
                <td>{countries.gold}</td>
                <td>{countries.silver}</td>
                <td>{countries.bronze}</td>
                <td><button onClick={() =>handleDeleteCountry(countries.id)}>삭제</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    <section>

    </section>
    </>
  );
//
}


export default App
