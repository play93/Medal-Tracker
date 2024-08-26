import "./css/Resset.css";
import "./css/App.css";
import { useState } from "react";
import List from "./components/List";
import Form from "./components/List";

function App() {
  const [countries, setCountries] = useState([]);
  // 국가 이름을 입력하는 Input 값을 상태관리하기 위한 useState

  return (
    <>
      <Form countries={countries} setCountries={setCountries} />
      <List countries={countries} setCountries={setCountries} />
    </>
  );
  //
}

export default App;
