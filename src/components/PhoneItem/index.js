import React, { useState } from "react";
import Edit from "../../images/edit-24px.svg";
import Delete from "../../images/delete-24px.svg";

import "./PhoneItem.css";
import { useHistory } from "react-router-dom";

const PhoneItem = ({ phone }) => {
  const { push } = useHistory();
  function WithOutSlash() {
    const phoneCode = phone.code[0];
    const codeWithOutSlash = phoneCode.substring(1);
    return codeWithOutSlash;
  }
  return (
    <ul className="list-content">
      <li>{WithOutSlash()}</li>
      <li>{phone.model}</li>
      <li>{phone.price}</li>
      <li>{phone.brand}</li>
      <li>{phone.color}</li>
      <ul class="links-div">
        <button type="button" onClick={() => push(`/phone/${phone._id}`)}>
          Editar
        </button>
        <button>delete</button>
      </ul>
    </ul>
  );
};

export default PhoneItem;
