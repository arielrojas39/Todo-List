//Monta y demonta partes del codigo para "ejecutar 2 veces" ciertas lineas
//de codigo y asi corroborar que todo funcione adecuadamente
import { StrictMode } from 'react'

//Importamos funcionalidades para renderizado concurrente
//Nos ayuda para renderizado flexible, pausar, dividir, cancelar
//y priorizar tareas, mejorando el rendimiento 
import { createRoot } from 'react-dom/client'
import './index.css'
//Importamos el componente principal
import App from './App.jsx'

//Busca el elemento con id root en el DOM del index.html y lo 
//renderiza el componenten main en la etiqueta correspondiente
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* utilizamos el componente principal App.jsx */}
    <App />
  </StrictMode>,
)
