import React, { useState } from "react";
import Edit from "../../images/edit-24px.svg";
import Delete from "../../images/delete-24px.svg";
import { FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import "./PhoneItem.css";
import { useHistory } from "react-router-dom";

const PhoneItem = ({ phone, OnClickDelete }) => {
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
      <li>{"R$" + " " + `${phone.price}`}</li>
      <li>{phone.brand}</li>
      <li>{phone.color}</li>
      <ul class="links-div">
        <button
          type="button"
          className="buttons"
          onClick={() => push(`/phone/${phone._id}`)}
        >
          <RiPencilFill />
        </button>
        <button type="button" className="buttons" onClick={OnClickDelete}>
          <FaTrash />
        </button>
      </ul>
    </ul>
  );
};

export default PhoneItem;
