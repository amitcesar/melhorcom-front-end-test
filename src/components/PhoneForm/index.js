import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./PhoneForm.css";
import axios from "axios";
import InputMask from "react-input-mask";
import { DateTime } from "luxon";

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
  const history = useHistory();
  const { _id } = useParams();
  const [startDate, SetStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (_id) {
      api
        .get(`/phone/${_id}`)
        .then((response) => {
          console.log("res", response.data);
          console.log(response.data.date);
          const dateFormat = DateTime.fromObject(response.data.date);
          const dateEndFormat = DateTime.fromISO(response.data.endDate);
          const DateForRead = dateFormat
            .setLocale("pt-br")
            .toLocaleString(DateTime.DATETIME_SHORT);
          const DateEndForRead = dateEndFormat
            .setLocale("pt-br")
            .toLocaleString(DateTime.DATETIME_SHORT);

          SetStartDate(DateForRead);
          setEndDate(DateEndForRead);
        })
        .catch((err) => console.log("errrrou", err));
    }
  }, [_id]);

  const values = _id ? null : initialValue;
  function OnSubmit(values, actions) {
    console.log("sub", values);
  }

  return (
    <div className="form-container">
      <h2>Detalhes do Produto </h2>
      <Formik
        initialValues={{
          model: "",
          brand: "",
          color: "BLACK",
          price: 0,
          date: "",
          endDate: "",
          code: "#13212",
        }}
        onSubmit={OnSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="group-form">
              <div className="form-row">
                <label className="form-label" htmlFor="model">
                  Modelo
                </label>
                <Field type="text" name="model" id="model" />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="brand">
                  Marca
                </label>
                <Field type="text" name="brand" id="brand" />
              </div>
            </div>
            <div className="group-form">
              <div className="form-row">
                <label className="form-label" htmlFor="color">
                  Cor
                  <Field as="select" id="color" name="color">
                    <option value="BLACK">Preto</option>
                    <option value="WHITE">Branco</option>
                    <option value="GOLD">Dourado</option>
                    <option value="PINK">Rosa</option>
                  </Field>
                </label>
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="price">
                  Preço
                </label>
                <Field
                  type="number"
                  id="price"
                  value={values.price}
                  name="price"
                />
              </div>
            </div>
            <div className="group-form date">
              <div className="form-row ">
                <label className="form-label" htmlFor="date">
                  Inicio das vendas
                </label>
                <Field
                  component={InputMask}
                  mask="99/99/9999"
                  name="date"
                  id="date"
                  placeholder="14/06/2020"
                  className="input"
                />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="endDate">
                  Fim das Vendas
                </label>

                <Field
                  mask="99/99/9999"
                  component={InputMask}
                  type="endDate"
                  id="endDate"
                  name="endDate"
                  className="input"
                />
              </div>
            </div>
            <div className="group-button">
              <button type="submit">SALVAR</button>

              <button>VOLTAR</button>
            </div>
            <h2>{values.color}</h2>
          </Form>
        )}
      </Formik>
    </div>
  );
};
