import React, {Component} from 'react'; 
import api from "./api";

class App extends Component {
  constructor(props){ 
    super(props) 
         
    this.state = {
      uf:undefined,
      estados: [],
      cidades:[]
    }
         
    this.updateState = this.updateState.bind(this) 
    this.updateStateCidade= this.updateStateCidade.bind(this) 
  } 
 
  async componentDidMount(){
    const response = await api.get('?orderBy=nome'); 
    this.setState({estados: response.data});
    this.setState({uf:'AC'});
  }

  updateState(){
    const select = document.getElementById('estado');
    const option = select.options[select.selectedIndex];
    this.setState({uf:option.value});
  }

  async updateStateCidade(){
    const response2= await api.get(this.state.uf+'/distritos?orderBy=nome');
    this.setState({cidades:response2.data});
  }

  render(){
    const {estados, cidades} = this.state;
    return(
      <div>
          <h1>Listar estados</h1>  
          <select id="estado" onClick={this.updateState}>
            {estados.map(estado =>(
              <option value={estado.sigla} key={estado.id}>{estado.nome}</option>
            ))}</select>
         
          <select name="cidade" onClick={this.updateStateCidade}>
            {cidades.map(cidade =>(
              <option value={cidade.nome} key={cidade.id} >{cidade.nome}</option>
            ))}</select>
      </div>
    );
  };
};

export default App;
