import * as Yup from "yup";

export default Yup.object().shape({
  model: Yup.string().min(2, "Pelo menos 2 Digitos!").max(255).required(),
  price: Yup.number()
    .required()
    .positive("apenas numeros positivos!")
    .integer(),
  brand: Yup.string().min(2, "Pelo menos 2 Digitos!").max(255).required(),
  date: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .typeError("O Campo é Obrigatorio!"),
  endDate: Yup.date()
    .min(Yup.ref("date"), "A data de fim deve ser posterior a data de início!")
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .typeError("O Campo é Obrigatorio!"),
});
