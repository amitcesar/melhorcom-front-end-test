import * as Yup from "yup";

export default Yup.object().shape({
  model: Yup.string().min(2, "Pelo menos 2 Digitos!").max(255).required(),
  price: Yup.number()
    .required("Campo Obrigatorio!")
    .positive("apenas numeros positivos!")
    .integer(),
  brand: Yup.string().min(2, "Pelo menos 2 Digitos!").max(255).required(),
});
