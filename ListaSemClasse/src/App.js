import React, { useEffect, useState }  from 'react'; 
import api from "./api";

export default function App (){ 
  var [ESTADOS,setESTADOS] = useState(); 
  var [CIDADES,setCIDADES] = useState();  
  var [ESTADO,setESTADO] = useState('AC') ;
  useEffect(() => {
    api
      .get("?orderBy=nome")
      .then((response) => setESTADOS(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  useEffect(() => {
    api
      .get(ESTADO+'/distritos?orderBy=nome')
      .then((response) => setCIDADES(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [ESTADO]);
  var updateState = () =>{
    const select = document.getElementById('ESTADO');
    const option = select.options[select.selectedIndex];
    setESTADO(option.value);
  }
    
    return(
      <div>
          <h1>Listar estados</h1>  
          <select id="ESTADO"  onClick={updateState} >
            {ESTADOS?.map((estado) =>
              <option value={estado.sigla} key={estado.id}>{estado.nome}</option>
            )}</select> 
            <h1> {ESTADO}</h1>
            <select id="CIDADE"  >
            {CIDADES?.map((cidade) =>
              <option value={cidade.nome} key={cidade.id} >{cidade.nome}</option>)}
            </select>
          
      </div>
    );
 
}; 
 