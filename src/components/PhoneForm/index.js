import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link, useHistory, useParams } from "react-router-dom";
import "./PhoneForm.css";
import axios from "axios";

const initialValue = {
  model: "",
  brand: "",
  color: "BLACK",
  price: 0,
  date: "",
  endDate: "",
  code: "#13212",
};

export const PhoneForm = () => {
  const { history, push } = useHistory();
  const { _id } = useParams();

  const [values, setValues] = useState(_id ? null : initialValue);

  useEffect(() => {
    if (_id) {
      api.get(`/phone/${_id}`).then((response) => {
        setValues(response.data);
      });
    }
  }, []);
  function OnChangeInput(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function OnSubmit(event) {
    event.preventDefault();
    const method = _id ? "put" : "post";
    const url = _id
      ? `https://phones--melhorcom.repl.co/phone/${_id}`
      : "https://phones--melhorcom.repl.co/phone/";

    console.log("go to => ", url);
    axios[method](url, values, {
      headers: { cpf: "04925787454" },
    })
      .then((response) => {
        console.log("New Phone ADD ! :D");
        history.push("/");
      })
      .catch((err) => console.log("errrrou", err));
  }

  return (
    <div className="form-container">
      <h2>Detalhes do Produto </h2>
      {!values ? (
        <h3>Carregando Form</h3>
      ) : (
        <form onSubmit={OnSubmit}>
          <div className="group-form">
            <div className="form-row">
              <label className="form-label" htmlFor="model">
                Modelo
              </label>
              <input
                value={values.model}
                onChange={OnChangeInput}
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
                value={values.brand}
                onChange={OnChangeInput}
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
                <select className="placeholder" onChange={OnChangeInput}>
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
                value={values.price}
                onChange={OnChangeInput}
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
                value={values.date}
                onChange={OnChangeInput}
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
                value={values.endDate}
                onChange={OnChangeInput}
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
        </form>
      )}
    </div>
  );
};
