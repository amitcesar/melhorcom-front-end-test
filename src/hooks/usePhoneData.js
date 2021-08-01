import React from "react";
import api from "../services/api";

const usePhoneData = () => {
  const [phone, setPhone] = React.useState([]);

  const fetchPhoneData = async () => {
    const response = await api.get("/phone");
    console.log(response.data);
    return response.data;
  };

  React.useEffect(() => {
    const getAllPhones = async () => {
      const AllPhonesData = await fetchPhoneData();
      if (AllPhonesData) setPhone(AllPhonesData);
    };
    getAllPhones();
  }, []);

  return [phone];
};

export default usePhoneData;
