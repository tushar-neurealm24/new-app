// import React from 'react';
// import PropTypes from 'prop-types'


// function Header(props)
// {
//     return(
//         <header>
//             <h1>This is my Header from {props.name}</h1>
//         </header>
//     )
// }

// Header.propTypes = {
//     name: PropTypes.string
// }
// export default Header;

import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, subtitle }) {
    return (
        <header style={{
            background: "#1976d2",
            color: "#fff",
            padding: "1.5rem 0",
            textAlign: "center"
        }}>
            <h1>{title}</h1>
            {subtitle && <p style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>{subtitle}</p>}
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

Header.defaultProps = {
    title: "My Website",
    subtitle: ""
};

export default Header;