import React, { useState } from "react";
import "./Login.scss";
import Error from "../components/Error";

const Login = () => {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);
  const [error, setError] = useState(false);

  const buscarEndereco = async () => {
    const url = `https://viacep.com.br/ws/${cep}/json`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setDados(data);
    } else {
      setError(true);
      console.log("ERROR FETCH", response.status);
    }
  };

  return (
    <div id="container-login">
      <h1>Login</h1>
      <label>
        Informe o CEP
        <input
          type="text"
          placeholder="CEP"
          maxLength="8"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </label>
      {!cep && (
        <button className="button" disabled>
          Buscar
        </button>
      )}
      {cep && (
        <button className="button" onClick={buscarEndereco}>
          Buscar
        </button>
      )}

      {error ? (
        <Error />
      ) : (
        dados && (
          <div className="container-result">
            <ul>
              <li>CEP: {dados.cep}</li>
              <li>Logradouro: {dados.logradouro}</li>
              <li>Bairro: {dados.bairro}</li>
              <li>Cidade: {dados.cidade}</li>
              <li>UF: {dados.uf}</li>
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Login;
