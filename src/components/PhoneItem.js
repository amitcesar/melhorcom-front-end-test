import React from "react";
import Edit from "../images/edit-24px.svg";
import Delete from "../images/delete-24px.svg";

import "./PhoneItem.css";

const PhoneItem = ({ phone }) => {
  /* Remove Slash Function  
   const phoneCode = phone.code[0];
  console.log("code Original", phoneCode);
  const codeWithOutSlash = phoneCode.substring(1);
  console.log("Altered Code:", codeWithOutSlash);
  */

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
        <img src={Edit} alt="Edit" />
        <img src={Delete} alt="Delete" />
      </ul>
    </ul>
  );
};

export default PhoneItem;
