import { useState } from 'react'
import './App.css'

function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  function calcularIMC(){
    const alt = altura/100
    const imc = peso/(alt**2)

    if (imc < 18.6){
      setMensagem('Você está abaixo do peso! Seu IMC: ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Peso ideal! Seu IMC: ' + imc.toFixed(2))
    } else if (imc >= 24.9 && imc <34.9) {
      setMensagem('Você está acima do peso! Seu IMC: ' + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem('Cuidado! Obesidade. Seu IMC: ' + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC.</span>

      <div className="area-input">
        <input 
        type="text" 
        placeholder="Peso em kg. Ex: 65."
        value={peso}
        onChange={(event)=>{
          setPeso(event.target.value)
        }}  
        />

        <input 
        type="text" 
        placeholder="Altura em cm. Ex: 180."
        value={altura}
        onChange={(event)=>{
          setAltura(event.target.value)
        }}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>

    </div>
  )
}

export default App