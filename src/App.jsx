import './css/Resset.css';
import './css/App.css';
import React, { useState } from "react";

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


  const handleAddCountry = (event) => {
    /*
    //table 아래에 나라, 금, 은, 동 메달 정보를 넣어서 행 추가
    //table 선택
    const table = document.getElementById("medalGraph");

    //새 행 추가
    const newRow = table.insertRow();

    //새 행에 칸 추가
    const newCountry = newRow.insertCell(0);//국가
    const newGold = newRow.insertCell(1);//금
    const newSilver = newRow.insertCell(2);//은
    const newBronze = newRow.insertCell(3);//동
    const deleteBtn = newRow.insertCell(4);//삭제버튼

    //칸에 넣어줄 값 설정
    newCountry.innerText = {country};
    newGold.innerText = {gold};
    newSilver.innerText = {silver};
    newBronze.innerText = {bronze};
    newDelete.innerHTML = `<button>삭제</button>`
    */

    const newCountry = {
      id: new Date().getTime(),
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    }
    
  setCountries([...countries, newCountry])
  
  event.preventDefault();
    // 메달 메달 갯수를 입력하는 로직이 필요할 거에요.
  };

  const handleDeleteCountry = (id) =>{
    const deletedCountries = countries.filter(function(countries){
      return countries.id != id
    });
    console.log(deletedCountries);
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
            // onClick={handleAddCountry()}
            onClick={handleAddCountry}
            >
              국가 추가
          </button>
          <button type="button">업데이트</button>
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
        {/* <tr>
          <td>{countries}</td>
          <td>{gold}</td>
          <td>{silver}</td>
          <td>{bronze}</td>
        </tr> */}
        {
          countries.map(function (countries){
            return (
              <tr>
                <td key={countries.id}>{countries.country}</td>
                <td key={countries.id}>{countries.gold}</td>
                <td key={countries.id}>{countries.silver}</td>
                <td key={countries.id}>{countries.bronze}</td>
                <td><button onClick={() =>handleDeleteCountry}>삭제</button></td>
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


    
  
}

export default App
