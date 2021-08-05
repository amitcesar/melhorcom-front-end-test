import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PhoneItem from "../PhoneItem";
import useApi from "../utils/useApi";
import "./PhoneList.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";

export const PhoneList = () => {
  const { push } = useHistory();
  const [phone, setPhone] = useState([]);
  const [load] = useApi({
    method: "get",
    url: "/phone",
    onCompleted(response) {
      setPhone(response.data);
    },
  });
  const [deletePhone, setDeletePhone] = useApi({
    method: "DELETE",
    onCompleted(response) {
      load();
    },
  });

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="phones-container">
      <div className="header-list">
        <p className="header-title">Produtos</p>
        <button className="buttonAdd" onClick={() => push("/phone/")}>
          <div className="icons">
            <AiOutlinePlus className="buttonAdd-icons" />
            <MdPhoneIphone className="buttonAdd-icons" />

            <span>ADCIONAR</span>
          </div>
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
        {phone.map((phone) => (
          <PhoneItem
            key={phone._id}
            phone={phone}
            OnClickDelete={() => {
              deletePhone({
                url: `/phone/${phone._id}`,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};
