const Form = ({ countries, setCountries }) => {
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

  return (
    <div>
      {" "}
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
                <tr key={countries.id || crypto.randomUUID()}>
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
    </div>
  );
};

export default Form;
