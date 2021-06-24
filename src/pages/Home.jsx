import {useState} from 'react';
import '../styles/global.scss'

import { Button } from '../components/Button/button';

export function Home() {
    
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [result, setResult] = useState();
    const [message, setMessage] = useState();

    function handleSubmit(e){
      e.preventDefault();
      const imc = weight / (height^2)
      setResult(imc); 
        if(imc < 18.5){
          setMessage ("abaixo do peso")
        }else if(imc > 18.5 && imc <= 24.9){
          setMessage ("Normal")
        }else if(imc >24.9  && imc <= 30){
          setMessage ("com sobrepeso")
        }else if(imc >30){
          setMessage ("obeso")
        }
    }

  return (
    <div className="container">
      <h1>Cálculo IMC</h1>
      
      <p>
        O índice é calculado da seguinte maneira: divide-se o peso do paciente
        pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso
        normal quando o resultado do IMC está entre 18,5 e 24,9.
      <br/><br/>
      
        Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo
        e compare com os índices da tabela. Importante: siga os exemplos e use
        pontos como separadores.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="height">
          <input type="text" id="height" placeholder="Altura (ex: 1,70)" onChange={(e)=>{
            setHeight(e.target.value)
          }} />
        </div>
        <div className="weight">
          <input type="text" className=" weight" placeholder="Peso (ex.: 69,2)" onChange={(e)=>
            setWeight(e.target.value)
          }/>
         </div>
        <Button/>
        <div  className="imc">Seu IMC é: {result} 
        <p className="msg">Você está {message} </p>
        </div>
      </form>
    </div>

  );
}



