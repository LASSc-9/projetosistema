import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from './components/Nav'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'
import Footer from './components/Footer'

function App() {
  

  return (
    //Habilita a navegação para rotas na aplicação
    <BrowserRouter>
    {/* Chamando o componete Nav */}
    <Nav/>
    <main>
      {/* Gerencia a exibição dos componentes com base na URL */}
      <Routes>
        {/* Rota para chamar URL não encontradas */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar o Home */}
        <Route path="/" element={<Home/>}/>

        {/* Rota para chamar o cliente */}
        <Route path="/cliente" element={<Cliente/>}/>


      </Routes>
    </main>
    <Footer/>

    </BrowserRouter>
  )
}

export default App
