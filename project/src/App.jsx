import './App.css'
import {Navigation} from './Layouts/Navigation/Navigation.jsx';
import {Theme} from "./Theme.jsx";
import {useState} from "react";

function App() {

    const [Dark, setDark] = useState(true);

    return (
        <Theme.Provider value={{Dark, setDark}}>
            <div className="App">
            <Navigation />
            </div>
        </Theme.Provider>
    )
}

export default App
