import './App.css'
import RoudesController from './routes/RoudesController'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <RoudesController/>
      <ToastContainer/>
    </>
  )
}

export default App
