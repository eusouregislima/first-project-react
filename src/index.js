import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import GlobalStyles from './Styles/globalStyles';


// nota: quando exporto com default fica assim
// quando exporto sem uso os {}
// o fragment só serve para cumprir a regra do react

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Routes/> 
        <GlobalStyles />
    </React.StrictMode>


)



// Sempre saduiche no react
// essa parte significa que vou criar os meus componentes App que vai ser renderizado na div root.


