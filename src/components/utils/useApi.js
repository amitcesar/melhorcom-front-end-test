import { useState } from "react";
import axios from "axios";

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
};
export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

  async function call(localConfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });

    const response = await axios({
      baseURL: "https://phones--melhorcom.repl.co",
      headers: { cpf: "04925787454" },
      ...localConfig,
      ...config,
    });
    setRequestInfo({
      ...initialRequestInfo,
      data: response.data,
    });

    if (config.onCompleted) {
      config.onCompleted(response);
    }
  }
  return [call, requestInfo];
}
