import React, { useEffect, useState } from "react";

import "./PhoneList.css";

import PhoneItem from "../PhoneItem";

import useApi from "../utils/useApi";

export const PhoneList = () => {
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
  });

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="phones-container">
      <div className="header-list">
        <p className="header-title">Produtos</p>
        <button className="buttonAdd">Add</button>
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
