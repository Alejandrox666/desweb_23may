import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./componentes/Layout";

function Home() {
    return (
        <article>
            <header> 
                <h1>Bienvenidos a la página de inicio</h1>
            </header>
            <section>
             <p>Explora nuestro sitio Web</p>
            </section> 
        </article>
       
    
    )
}

function About() {
      return (
        <article>
            <header> 
                <h1>Acerca de nosotros</h1>
            </header>
            <section>
             <p>Somos una empresa comprometida con la excelencia</p>
            </section> 
        </article>
       
    
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;