// import React from 'react';

// function SideBar()
// {
//     return(
//         <header>
//             <h1>This is my Header from SideBar.js</h1>
//         </header>
//     )
// }

// export default SideBar;

import React from 'react';

function SideBar() {
    return (
        <aside style={{
            width: "220px",
            height: "100vh",
            background: "#263238",
            color: "#fff",
            padding: "2rem 1rem",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
        }}>
            <h2 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Menu</h2>
            <nav>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                    <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
                    <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
                    <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;