import React, { useEffect, useState } from "react";

import "./PhoneList.css";

import PhoneItem from "../PhoneItem";

import useApi from "../utils/useApi";

export const PhoneList = () => {
  const [phone, setPhone] = useState([]);
  const [load, loadInfo] = useApi({
    method: "get",
    url: "https://phones--melhorcom.repl.co/phone",
    headers: {
      cpf: "04925787454",
    },
    onCompleted(response) {
      setPhone(response.data);
    },
  });

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="phones-container">
      <div className="header-list">
        <p className="header-title">Produtos</p>
        <button className="buttonAdd">Add</button>
      </div>
      <div className="list-wrapper">
        <ul className="list-category">
          <li>Codigo</li>
          <li>Modelo</li>
          <li>Preço</li>
          <li>Marca</li>
          <li>Cor</li>
        </ul>
        {phone.map((phone) => (
          <PhoneItem key={phone._id} phone={phone} />
        ))}
      </div>
    </div>
  );
};
