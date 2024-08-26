import "./css/Resset.css";
import "./css/App.css";
import React, { useState } from "react";

function App() {
  // <---- 자바스크립트 영역 ---->

  //국가리스트 상태 관리 & 메달 집계 추가 기능 구현

  const [countries, setCountries] = useState([]);
  // 국가 이름을 입력하는 Input 값을 상태관리하기 위한 useState
  const [scoreInfo, setScoreInfo] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  //리스트수정
  const handleUpdateCountry = (event) => {
    const targetCountry = countries.find(function (c) {
      if (c.country === scoreInfo.country) {
        return true;
      } else {
        return alert("해당국가가 없습니다!");
      }
    });

    const newCountries = countries.map((country) => {
      if (country === targetCountry) {
        //수정대상
        return {
          ...country,
          gold: Number(scoreInfo.gold),
          silver: Number(scoreInfo.silver),
          bronze: Number(scoreInfo.bronze),
        };
      } else {
        //수정x
        return countries;
      }
    });

    setCountries(newCountries);

    setScoreInfo({ country: "", gold: 0, silver: 0, bronze: 0 });

    event.preventDefault();
  };

  // 리스트추가
  const handleAddCountry = (event) => {
    event.preventDefault();
    let duplicateCountry = countries.find(function (countryItem) {
      return countryItem.country === scoreInfo.country;
    });
    if (duplicateCountry) {
      alert("국가명이 중복됨");
      return;
    }

    //국가를 입력하지 않으면 alert + 추가 안됨
    if (scoreInfo.country.trim() === "") {
      alert("국가를 입력하세요");
      return;
    }

    const newCountry = {
      id: new Date().getTime(),
      country: scoreInfo.country,
      gold: Number(scoreInfo.gold),
      silver: Number(scoreInfo.silver),
      bronze: Number(scoreInfo.bronze),
    };

    //메달 갯수에 따라 내림차순 정렬
    setCountries([...countries, newCountry]);

    setScoreInfo({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  //리스트삭제
  const handleDeleteCountry = (id) => {
    const filteringCountries = countries.filter(function (country) {
      return country.id != id;
    });
    console.log(filteringCountries);
    if (confirm("정말 삭제하시겠습니까?") === true) {
      setCountries(filteringCountries);
    } else {
      return false;
    }
  };

  //onChange 함수
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setScoreInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    /* <---- HTML/JSX 영역  ---->*/
    <>
      <section>
        <div className="medalTracker">
          <h1>2024 파리 올림픽🥇🥈🥉 </h1>
          <form>
            <div className="inputBox">
              <label>국가명</label>
              <input
                type="text"
                name="country"
                value={scoreInfo.country}
                onChange={handleOnChange}
                placeholder="국가 입력"
              />
            </div>
            <div className="inputBox">
              <label>금메달</label>
              <input
                type="number"
                name="gold"
                value={scoreInfo.gold}
                onChange={handleOnChange}
                placeholder="0"
              />
            </div>
            <div className="inputBox">
              <label>은메달</label>
              <input
                type="number"
                name="silver"
                value={scoreInfo.silver}
                onChange={handleOnChange}
                placeholder="0"
              />
            </div>
            <div className="inputBox">
              <label>동메달</label>
              <input
                type="number"
                name="bronze"
                value={scoreInfo.bronze}
                onChange={handleOnChange}
                placeholder="0"
              />
            </div>
            <div className="inputBox">
              <button type="submit" onClick={handleAddCountry}>
                국가 추가
              </button>

              <button type="button" onClick={handleUpdateCountry}>
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
          {countries
            .sort((a, b) =>
              a.gold !== b.gold
                ? b.gold - a.gold
                : a.silver !== b.silver
                ? b.silver - a.silver
                : b.bronze - a.bronze
            )
            .map(function (countries) {
              return (
                <tr key={countries.id}>
                  <td>{countries.country}</td>
                  <td>{countries.gold}</td>
                  <td>{countries.silver}</td>
                  <td>{countries.bronze}</td>
                  <td>
                    <button onClick={() => handleDeleteCountry(countries.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <section></section>
    </>
  );
  //
}

export default App;
