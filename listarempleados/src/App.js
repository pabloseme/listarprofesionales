import './App.css';
import Listar from './componentes/Listar';
import imagenes from './img/imagenes';


function App() {
  return (
    <div className="App">
      <Listar 
        name="Pablo Daniel Seme" 
        comment="Hola gente, me presento soy apasionado de la informatica"
        profesion="Ingeniero en Sistemas"
        img={imagenes[0]}/>

        

      <Listar 
        name="Marcelo Vizcarra" 
        comment="Hola gente, me presento soy apasionado de la informatica"
        profesion="Programador en Php"
        img={imagenes[1]}/>        

      <Listar 
        name="Jose Ceballos" 
        comment="Hola gente, me presento soy apasionado de la informatica"
        profesion="Programador en React-Angular"
        img={imagenes[2]}/>        
    </div>
  );
}

export default App;
