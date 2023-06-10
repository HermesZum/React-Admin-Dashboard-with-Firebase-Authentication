import './App.css'
import {Navigation} from './Layouts/Navigation/Navigation.jsx';
import {Theme} from "./Theme.jsx";
import {useState} from "react";
import {Content} from "./Layouts/Content/Content.jsx";

function App() {

    const [Dark, setDark] = useState(true);

    return (
        <Theme.Provider value={{Dark, setDark}}>
            <div className="App">
                <Navigation />
                <Content />
            </div>
        </Theme.Provider>
    )
}

export default App
