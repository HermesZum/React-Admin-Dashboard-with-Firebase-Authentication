import './App.css';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Firebase.jsx";
import {Navigation} from './Layouts/Navigation/Navigation.jsx';
import {useEffect, useState} from "react";
import {Content} from "./Layouts/Content/Content.jsx";
import {ThemeProvider} from "./ThemeProvider.jsx";
import {Login} from "./Pages/Login/Login.jsx";

function App() {

    const [Dark, setDark] = useState(true);
    const [LoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        return () => {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            });
        };
    }, []);

    return (
        <ThemeProvider>
            <div className="App">
                {LoggedIn
                    ? (
                    <>
                        <Navigation />
                        <Content />
                    </>
                    ) : (
                    <Login />
                    )}
            </div>
        </ThemeProvider>
    )
}

export default App
