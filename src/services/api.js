import axios from "axios";

const api = axios.create({
  baseURL: "https://phones--melhorcom.repl.co",
  headers: { cpf: "04925787454" },
});
export default api;
