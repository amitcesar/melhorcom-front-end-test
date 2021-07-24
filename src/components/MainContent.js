import React from "react";
import "./MainContent.css";
import Edit from "../images/edit-24px.svg";
import Delete from "../images/delete-24px.svg";
export const MainContent = () => {
  return (
    <div className="phones-container">
      <div className="header-list">
        <p className="header-title">Produtos</p>
        <button onClick="" className="buttonAdd">
          + ADCIONAR
        </button>
      </div>
      <div className="list-wrapper">
        <ul className="list-category">
          <li>Codigo</li>
          <li>Modelo</li>
          <li>Preço</li>
          <li>Marca</li>
          <li>Cor</li>
        </ul>
        <ul className="list-content">
          <li>23856233</li>
          <li>XT2041-1</li>
          <li>R$ 1.207,20</li>
          <li>Motorola</li>
          <li>Cinza</li>
          <ul class="links-div">
            <img src={Edit} alt="Edit" />
            <img src={Delete} alt="Delete" />
          </ul>
        </ul>
      </div>
    </div>
  );
};
