import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import "./PhoneForm.css";

import InputMask from "react-input-mask";

import useApi from "../utils/useApi";

const initialValue = {
  model: "",
  brand: "",
  color: "BLACK",
  price: 0,
  date: new Date(),
  endDate: new Date(),
  code: "#13212",
};

export const PhoneForm = () => {
  const history = useHistory();
  const { _id } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [load, loadInfo] = useApi({
    url: `/phone/${_id}`,
    method: "get",
    onCompleted: (response) => {
      console.log(response, "eai");
    },
  });
  const [save, saveInfo] = useApi({
    url: _id ? `/phone/${_id}` : "/phone/",
    method: _id ? "patch" : "post",
    onCompleted: (response) => {
      if (!response.error) {
        console.log("resss", response);
        history.push("/");
      }
    },
  });

  useEffect(() => {
    load();
  }, [_id]);

  function OnSubmit(values) {
    save({
      data: values,
    });
  }
  function formatDate(str) {
    return new Date(str).toLocaleDateString();
  }
  const values = _id ? loadInfo.data : initialValue;

  return (
    <div className="form-container">
      <h2>Detalhes do Produto </h2>
      {!values ? (
        <h3>Carregando Produto</h3>
      ) : (
        <Formik
          initialValues={{
            model: values.model,
            brand: values.brand,
            color: values.color,
            price: values.price,
            date: formatDate(values.date),
            endDate: formatDate(values.endDate),
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
                  <Field type="number" id="price" name="price" />
                </div>
              </div>
              <div className="group-form date">
                <div className="form-row ">
                  <label className="form-label" htmlFor="date">
                    Inicio das vendas
                  </label>
                  <Field
                    as={InputMask}
                    mask="99/99/9999"
                    name="date"
                    id="date"
                    placeholder="14/06/2020"
                    className="input"
                    type="text"
                  />
                </div>
                <div className="form-row">
                  <label className="form-label" htmlFor="endDate">
                    Fim das Vendas
                  </label>

                  <Field
                    as={InputMask}
                    mask="99/99/9999"
                    id="endDate"
                    name="endDate"
                    className="input"
                    placeholder="14/06/2020"
                    type="text"
                  />
                </div>
              </div>
              <div className="group-button">
                <button type="submit">SALVAR</button>

                <button>VOLTAR</button>
              </div>
              <h2>AAAAAAAAAAAAAAAAAAAAA</h2>
              <h2>{values.color}</h2>
              <h2>{values.date}</h2>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
