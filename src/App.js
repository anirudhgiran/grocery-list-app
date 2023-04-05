import "./App.scss";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useState } from "react";

import { Route, Switch } from "react-router";

import Login from "./components/Login/Login";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";

// const firebaseConfig = {
//     apiKey: "AIzaSyDpMAgskwEoS-p7XG7ubP1Q3gv5HY_HX-w",
//     authDomain: "grocery-list-49f01.firebaseapp.com",
//     projectId: "grocery-list-49f01",
//     storageBucket: "grocery-list-49f01.appspot.com",
//     messagingSenderId: "1036936226584",
//     appId: "1:1036936226584:web:647e0c4cfc9411e895206d",
// };

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDpMAgskwEoS-p7XG7ubP1Q3gv5HY_HX-w",
        authDomain: "grocery-list-49f01.firebaseapp.com",
        projectId: "grocery-list-49f01",
        storageBucket: "grocery-list-49f01.appspot.com",
        messagingSenderId: "1036936226584",
        appId: "1:1036936226584:web:647e0c4cfc9411e895206d",
    });
} else firebase.app();

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
    const [user, setUser] = useState(null);

    const [currentList, setCurrentList] = useState(null);

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    {!user && (
                        <Login user={user} setUser={setUser} auth={auth} />
                    )}
                    {user && (
                        <main className="container">
                            <Menu
                                currentList={currentList}
                                setCurrentList={setCurrentList}
                                firestore={firestore}
                                auth={auth}
                            />
                            <List
                                currentList={currentList}
                                setCurrentList={setCurrentList}
                            />
                        </main>
                    )}
                </Route>
                <Route path={"/register"}>
                    <h1>This is register</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
