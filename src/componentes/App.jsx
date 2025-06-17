import Navbar from "./Navbar";
import Layout from "./Layout";
import { BrowserRouter } from 'react-router-dom';
function App() {
   return(
       <>
       
       <Navbar />
       <BrowserRouter>
       
      <Layout />
      
    </BrowserRouter>
        
       </>
   )


}


export default App;