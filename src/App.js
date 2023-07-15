import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

class User {
    constructor(name, imageUrl, imageSize) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.imageSize = imageSize;
    }
}

const user = new User("Hedy Lamarr", "https://i.imgur.com/yXOvdOSs.jpg", 90);

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {isLoggedIn ? (
                    <>
                        <Profile user={user} />
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <LoginForm />
                        <button onClick={handleLogout}>Login</button>
                    </>
                )}
            </header>
        </div>
    );
}

function Profile({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </div>
    );
}

function LoginForm() {
    return <></>;
}

export default App;
