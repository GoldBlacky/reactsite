import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

class User {
    constructor(name, imageUrl, imageSize) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.imageSize = imageSize;
    }

    profile() {
        return (
            <div>
                <h1>{this.name}</h1>
                <img
                    className="avatar"
                    src={this.imageUrl}
                    alt={"Photo of " + this.name}
                    style={{
                        width: this.imageSize,
                        height: this.imageSize,
                    }}
                />
            </div>
        );
    }
}

class Admin extends User {
    constructor(name, imageUrl, imageSize, adminlevel) {
        super(name, imageUrl, imageSize);
        this.adminlevel = adminlevel;
    }
    admprofile() {
        return [this.profile(), <p>Adm Level: {this.adminlevel}</p>];
    }
}

const user1 = new User("Hedy Lamarr", "https://i.imgur.com/yXOvdOSs.jpg", 90);
const user2 = new Admin("Ich", "https://i.imgur.com/yXOvdOSs.jpg", 100, 1);
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [isLoggedIn]);

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
            </header>
            <main>
                <AdmProfile user={user2} />
                {isLoggedIn ? (
                    <>
                        <Profile user={user1} />
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <LoginForm />
                        <button onClick={handleLogout}>Login</button>
                    </>
                )}
            </main>
        </div>
    );
}

function LoginForm() {
    return <></>;
}

function Profile({ user }) {
    return user.profile();
}

function AdmProfile({ user }) {
    return user.admprofile();
}

export { App };
