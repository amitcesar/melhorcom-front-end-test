import React, { useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import InputMask from "react-input-mask";
import useApi from "../utils/useApi";

import "./PhoneForm.css";
import { DateTime } from "luxon";
import ValidationSchema from "./ValidationSchema";
const initialValue = {
  model: "",
  brand: "",
  color: "",
  price: "",
  date: new Date(),
  endDate: new Date(),
  code: "",
};

export const PhoneForm = () => {
  const history = useHistory();
  const { _id } = useParams();

  const [load, loadInfo] = useApi({
    url: `/phone/${_id}`,
    method: "get",
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
    const dateFormat = DateTime.fromISO(str);

    return dateFormat
      .setLocale("pt-br")
      .toLocaleString(DateTime.DATETIME_SHORT);
  }
  const values = _id ? loadInfo.data : initialValue;

  function codeHandle() {
    let randomCodeString = "#" + Math.random().toString(10).substr(2, 8);
    return randomCodeString;
  }

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
            code: codeHandle(),
          }}
          onSubmit={OnSubmit}
          validationSchema={ValidationSchema}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className="group-form">
                <div className="form-row">
                  <label className="form-label" htmlFor="model">
                    Modelo
                  </label>
                  <Field
                    type="text"
                    placeholder="XT2041-1"
                    name="model"
                    id="model"
                  />
                  {errors.model && touched.model ? (
                    <span className="error-message">{errors.model}</span>
                  ) : null}
                </div>
                <div className="form-row">
                  <label className="form-label" htmlFor="brand">
                    Marca
                  </label>
                  <Field
                    type="text"
                    placeholder="Motorola"
                    name="brand"
                    id="brand"
                  />
                  {errors.brand && touched.brand ? (
                    <span className="error-message">{errors.brand}</span>
                  ) : null}
                </div>
              </div>
              <div className="group-form">
                <div className="form-row">
                  <label className="form-label" htmlFor="color">
                    Cor
                    <Field
                      as="select"
                      id="color"
                      placeholder="Preto"
                      name="color"
                    >
                      <option value="BLACK">Preto</option>
                      <option value="WHITE">Branco</option>
                      <option value="GOLD">Dourado</option>
                      <option value="PINK">Rosa</option>
                    </Field>
                    {errors.color && touched.color ? (
                      <span className="error-message">{errors.color}</span>
                    ) : null}
                  </label>
                </div>
                <div className="form-row">
                  <label className="form-label" htmlFor="price">
                    Preço
                  </label>
                  <Field
                    type="number"
                    id="price"
                    name="price"
                    placeholder="1.400"
                  />
                  {errors.price && touched.price ? (
                    <span className="error-message">{errors.price}</span>
                  ) : null}
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
                    placeholder="14/03/2020"
                    className="input"
                    type="text"
                  />
                  {errors.date && touched.date ? (
                    <span className="error-message">{errors.date}</span>
                  ) : null}
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
                  {errors.endDate && touched.endDate ? (
                    <span classname="error-message">{errors.endDate}</span>
                  ) : null}
                </div>
              </div>
              <div className="group-button">
                <button type="submit">SALVAR</button>

                <button>VOLTAR</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
