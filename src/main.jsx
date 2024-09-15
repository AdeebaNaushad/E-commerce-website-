import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Children, createContext ,useState} from 'react'
export const ProductContext  = createContext();
const ProductContextProvider = ({children}) =>{
  const [products,setProducts] =useState([]);

  return <ProductContext.Provider value={{products ,setProducts}}>{children}</ProductContext.Provider>
}
createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ProductContextProvider >
    <App />
    </ProductContextProvider>
    </ChakraProvider>



)
