import React, { useState } from "react";

import "./Menu.scss";

import ListItem from "./ListItem";

const Menu = ({ firestore, currentList, setCurrentList, auth }) => {
    const users = firestore.collection("users");
    const [userLists, setUserLists] = useState(null);

    users.doc(auth.currentUser.uid).onSnapshot((doc) => {
        setUserLists(doc.data().lists);
    });

    return (
        <section className={"menu"}>
            <div className="user">
                <p>Welcome</p>
                <h1>{auth.currentUser.email}</h1>
            </div>
            <div className="user-list">
                <p>Your Lists</p>
                {userLists &&
                    userLists.map((list) => {
                        return (
                            <ListItem key={list.id}>
                                <h1>{list.name}</h1>
                            </ListItem>
                        );
                    })}
            </div>
        </section>
    );
};

export default Menu;
