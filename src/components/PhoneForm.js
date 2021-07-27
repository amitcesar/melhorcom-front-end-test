import React, { useState, useEffect } from "react";
import "./PhoneForm.css";
export const PhoneForm = () => {
  return (
    <div className="form-container">
      <h2>Detalhes do Produto</h2>

      <form>
        <div className="input-group">
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
        <div class="input-group">
          <div className="form-row">
            <label className="form-label" htmlFor="color">
              Color
            </label>
            <input type="text" name="color" placeholder="XT2041-1" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="price">
              Preço
            </label>
            <input type="text" name="price" placeholder="XT2041-1" />
          </div>
        </div>
        <div className="input-group">
          <div className="form-row">
            <label className="form-label" htmlFor="startDate">
              Inicio das vendas
            </label>
            <input type="text" name="startDate" placeholder="XT2041-1" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="endDate">
              Fim das Vendas
            </label>
            <input type="text" name="model" placeholder="XT2041-1" />
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
