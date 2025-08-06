// import React from 'react';

// function Footer()
// {
//     return(
//         <header>
//             <h1>This is my Footer from Footer.js</h1>
//         </header>
//     )
// }

// export default Footer;
import React from 'react';

function Footer() {
    return (
        <footer style={{
            background: "#222",
            color: "#fff",
            textAlign: "center",
            padding: "1rem 0",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%"
        }}>
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;