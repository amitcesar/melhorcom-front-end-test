import React, { useEffect, useState } from "react";
import "./MainContent.css";

import api from "../services/api";
import PhoneItem from "./PhoneItem.js";

export const MainContent = () => {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    async function loadPhones() {
      try {
        const response = await api.get("/phone");
        setPhone(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadPhones();
  }, []);

  return (
    <div className="phones-container">
      <div className="header-list">
        <p className="header-title">Produtos</p>
        <button className="buttonAdd">+ ADCIONAR</button>
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
