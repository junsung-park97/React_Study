import { useState } from "react";
function Register() {
  // 이름
  // 생년월일
  // 국적
  // 자기소개
  const [name, setName] = useState("이름");
  const [brith, setBirth] = useState("생년월일");
  const [country, setCountry] = useState("국적");

  const onChangeName = (e: any): void => {
    setName(e.target.value);
  };

  const onChangeBirth = (e: any): void => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e: any): void => {
    setCountry(e.target.value);
  };

  return (
    <>
      <div className="name">
        <h4>{name}</h4>
        <input placeholder={"이름"} onChange={onChangeName} />
      </div>
      <div className="birthday">
        <h4>{brith}</h4>
        <input type={"date"} onChange={onChangeBirth} />
      </div>
      <div>
        <h4>{country}</h4>
        <select onChange={onChangeCountry}>
          <option value="">국적</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
    </>
  );
}

export default Register;
