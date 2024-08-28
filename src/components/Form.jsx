import { useState } from "react";
import Input from "./Input";

const Form = ({ countries, setCountries }) => {
  const [scoreInfo, setScoreInfo] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  //리스트수정
  const handleUpdateCountry = () => {
    console.log("countries", countries);
    console.log("scoreInfo", scoreInfo);
    const targetCountry = countries.find((c) => {
      return c.country === scoreInfo.country;
    });

    if (!targetCountry) {
      alert("해당국가가 없습니다!");
      return;
    }

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
  };

  return (
    <section>
      <div className="medalTracker">
        <h1>2024 파리 올림픽🥇🥈🥉 </h1>
        <form>
          <Input
            label={"국가명"}
            inputType={"text"}
            inputName={"country"}
            placeholder={"국가명을 입력하세요"}
            scoreInfo={scoreInfo}
            setScoreInfo={setScoreInfo}
          />
          <Input
            label={"금메달"}
            inputType={"number"}
            inputName={"gold"}
            placeholder={"0"}
            scoreInfo={scoreInfo}
            setScoreInfo={setScoreInfo}
          />
          <Input
            label={"은메달"}
            inputType={"number"}
            inputName={"silver"}
            placeholder={"0"}
            scoreInfo={scoreInfo}
            setScoreInfo={setScoreInfo}
          />
          <Input
            label={"동메달"}
            inputType={"number"}
            inputName={"bronze"}
            placeholder={"0"}
            scoreInfo={scoreInfo}
            setScoreInfo={setScoreInfo}
          />
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
  );
};

export default Form;
