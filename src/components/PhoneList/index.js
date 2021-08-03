import React, { useEffect, useState } from "react";

import "./PhoneList.css";

import PhoneItem from "../PhoneItem";
import api from "../../services/api";

export const PhoneList = () => {
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    const getAllPhones = async () => {
      await api.get("phone").then((response) => {
        setPhone(response.data);
      });
    };
    getAllPhones();
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
