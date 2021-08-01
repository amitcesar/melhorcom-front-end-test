import React, { useState } from "react";
import api from "../../services/api";
import { useHistory, useParams } from "react-router-dom";
import "./PhoneForm.css";

export const PhoneForm = ({ onSubmit }) => {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [code, setCode] = useState("#12212");
  const [color, setColor] = useState("BLACK");
  const history = useHistory();
  const { _id } = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const phone = {
      model,
      brand,
      price,
      date,
      endDate,
      code,
      color,
    };

    await api.post("/phone", phone).then(() => {
      console.log("New Phone ADD ! :D");
      history.push("/");
    });
  };

  return (
    <div className="form-container">
      <h2>Detalhes do Produto - {_id}</h2>

      <form onSubmit={handleSubmit}>
        <div className="group-form">
          <div className="form-row">
            <label className="form-label" htmlFor="model">
              Modelo
            </label>
            <input
              value={model}
              onChange={(event) => setModel(event.target.value)}
              type="text"
              name="model"
              id="model"
              placeholder="XT2041-1"
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="brand">
              Marca
            </label>
            <input
              id="brand"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
              type="text"
              name="brand"
              placeholder="Motorola"
            />
          </div>
        </div>

        <div className="group-form">
          <div className="form-row">
            <label className="form-label" htmlFor="color">
              Cor
              <select
                className="placeholder"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                <option disabled="" value=""></option>
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
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              type="number"
              id="price"
              name="price"
              placeholder="1200,00"
            />
          </div>
        </div>

        <div className="group-form date">
          <div className="form-row ">
            <label className="form-label" htmlFor="date">
              Inicio das vendas
            </label>
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
              id="date"
              type="text"
              name="date"
              placeholder="14/06/2020"
              min="2018-12-25"
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="endDate">
              Fim das Vendas
            </label>
            <input
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              id="endDate"
              type="text"
              name="endDate"
              placeholder="14/06/2020"
              min="2018-12-25"
            />
          </div>
        </div>
        <div className="group-button">
          <button type="submit">SALVAR</button>
          <button>VOLTAR</button>
        </div>
        <h1>{date}</h1>

        <h2>{color}</h2>
      </form>
    </div>
  );
};
