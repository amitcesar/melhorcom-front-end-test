import React from "react";
import "./PhonesList.css";
import Edit from "../images/edit-24px.svg";
import Delete from "../images/delete-24px.svg";
export const PhonesList = () => {
  return (
    <div className="phones-container">
      <div className="header-list">
        <p className="header-title">Produtos</p>
        <button onClick="" className="buttonAdd">
          + ADCIONAR
        </button>
      </div>
      <div className="list-wrapper">
        <div className="list-category">
          <p>Codigo</p>
          <p>Modelo</p>
          <p>Preço</p>
          <p>Marca</p>
          <p>Cor</p>
        </div>
        <div className="list-content">
          <p>23856233</p>
          <p>XT2041-1</p>
          <p>R$ 1.207,20</p>
          <p>Motorola</p>
          <p>Cinza</p>
          <div class="image-div">
            <img src={Edit} alt="Edit" />
            <img src={Delete} alt="Delete" />
          </div>
        </div>

        <div className="list-content">
          <p>23856233</p>
          <p>XT2041-1</p>
          <p>R$ 1.207,20</p>
          <p>Motorola</p>
          <p>Cinza</p>
        </div>

        <div className="list-content">
          <p>23856233</p>
          <p>XT2041-1</p>
          <p>R$ 1.207,20</p>
          <p>Motorola</p>
          <p>Cinza</p>
        </div>

        <div className="list-content">
          <p>23856233</p>
          <p>XT2041-1</p>
          <p>R$ 1.207,20</p>
          <p>Motorola</p>
          <p>Cinza</p>
        </div>
      </div>
    </div>
  );
};
