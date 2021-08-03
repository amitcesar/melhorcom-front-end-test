import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory, useParams } from "react-router-dom";
import "./PhoneForm.css";
import axios from "axios";
import InputMask from "react-input-mask";
import { DateTime } from "luxon";

const initialValue = {
  model: "",
  brand: "",
  color: "",
  price: 0,
  date: "",
  endDate: "",
  code: "#13212",
};

export const PhoneForm = () => {
  const history = useHistory();
  const { _id } = useParams();
  const [values, setValues] = useState(_id ? null : initialValue);
  const [startDate, SetStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (_id) {
      api.get(`/phone/${_id}`).then((response) => {
        const dateFormat = DateTime.fromISO(response.data.date);
        const dateEndFormat = DateTime.fromISO(response.data.endDate);
        const DateForRead = dateFormat
          .setLocale("pt-br")
          .toLocaleString(DateTime.DATETIME_SHORT);
        const DateEndForRead = dateEndFormat
          .setLocale("pt-br")
          .toLocaleString(DateTime.DATETIME_SHORT);

        SetStartDate(DateForRead);
        setEndDate(DateEndForRead);
        setValues({
          model: response.data.model,
          brand: response.data.brand,
          color: response.data.color,
          price: response.data.price,
          date: DateForRead,
          endDate: DateEndForRead,
          code: "#13212",
        });
      });
    }
  }, [_id]);

  function OnChangeInput(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function OnSubmit(event) {
    event.preventDefault();
    const method = _id ? "patch" : "post";
    const url = _id
      ? `https://phones--melhorcom.repl.co/phone/${_id}`
      : "https://phones--melhorcom.repl.co/phone/";

    axios[method](url, values, {
      headers: { cpf: "04925787454" },
    })
      .then((response) => {
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
                min="2"
                max="255"
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
                min="2"
                max="255"
              />
            </div>
          </div>
          <div className="group-form">
            <div className="form-row">
              <label className="form-label" htmlFor="color">
                Cor
                <select
                  className="placeholder"
                  onChange={OnChangeInput}
                  id="color"
                  name="color"
                >
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
              <InputMask
                mask="99/99/9999"
                name="date"
                value={values.date}
                id="date"
                mask="99/99/9999"
                placeholder="14/06/2020"
                className="holy"
                onChange={OnChangeInput}
                className="input"
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="endDate">
                Fim das Vendas
              </label>
              <InputMask
                id="endDate"
                name="endDate"
                value={values.endDate}
                mask="99/99/9999"
                placeholder="14/06/2020"
                className="input"
                onChange={OnChangeInput}
              />
            </div>
          </div>
          <div className="group-button">
            <button type="submit">SALVAR</button>

            <button>VOLTAR</button>
          </div>
          <h2>{values.color}</h2>
        </form>
      )}
    </div>
  );
};
