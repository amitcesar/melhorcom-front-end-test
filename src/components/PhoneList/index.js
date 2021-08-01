import React from "react";

import "./PhoneList.css";

import PhoneItem from "../PhoneItem";
import usePhoneData from "../../hooks/usePhoneData";

export const PhoneList = () => {
  const [phone] = usePhoneData();

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
