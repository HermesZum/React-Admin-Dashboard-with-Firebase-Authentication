import './App.css'
import {Navigation} from './Layouts/Navigation/Navigation.jsx';
import {useState} from "react";
import {Content} from "./Layouts/Content/Content.jsx";
import {ThemeProvider} from "./ThemeProvider.jsx";
import {Login} from "./Pages/Login/Login.jsx";

function App() {

    const [Dark, setDark] = useState(true);

    return (
        <ThemeProvider>
            <div className="App">
                {/*<Navigation />
                <Content />*/}
                <Login />
            </div>
        </ThemeProvider>
    )
}

export default App
