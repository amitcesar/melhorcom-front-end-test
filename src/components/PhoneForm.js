import React, { useState, useEffect } from "react";
import "./PhoneForm.css";
export const PhoneForm = () => {
  return (
    <div className="form-container">
      <h2>Detalhes do Produto</h2>

      <form>
        <div className="group-form">
          <div className="form-row">
            <label className="form-label" htmlFor="model">
              Modelo
            </label>
            <input type="text" name="model" placeholder="XT2041-1" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="brand">
              Marca
            </label>
            <input type="text" name="brand" placeholder="XT2041-1" />
          </div>
        </div>

        <div className="group-form">
          <div className="form-row">
            <label className="form-label" htmlFor="color">
              Cor
              <select>
                <option disabled="" value="" placeholder="Preto"></option>
                <option value="BLACK">Preto</option>
                <option value="WHITE">Branco</option>
                <option value="GOLD">Dourado</option>
                <option value="PINK">Rosa</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="price">
              Preço
            </label>
            <input type="number" name="price" placeholder="1200,00" />
          </div>
        </div>

        <div className="group-form date">
          <div className="form-row ">
            <label className="form-label" htmlFor="startDate">
              Inicio das vendas
            </label>
            <input
              type="date"
              name="startDate"
              min="2018-12-25"
              placeholder="15/03/2020"
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="endDate">
              Fim das Vendas
            </label>
            <input
              type="date"
              name="endDate"
              placeholder="14/06/2020"
              min="2018-12-25"
            />
          </div>
        </div>
        <div className="group-button">
          <button type="submit">Salvar</button>
          <button>Voltar</button>
        </div>
      </form>
    </div>
  );
};
