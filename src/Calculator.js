import React, { useState } from 'react';

/**
 * Calculator component for adding two numbers.
 * 
 * Features:
 * - Takes two numeric inputs from the user.
 * - Adds the numbers when the "Add" button is clicked.
 * - Displays the result below the button.
 */
function Calculator() {
    // State for first number input
    const [num1, setNum1] = useState('');
    // State for second number input
    const [num2, setNum2] = useState('');
    // State for result of addition
    const [result, setResult] = useState(null);

    /**
     * Handles the addition of num1 and num2.
     * Converts input values to numbers and updates the result state.
     */
    const handleAddition = () => {
        const sum = Number(num1) + Number(num2);
        setResult(sum);
    };

    return (
        <div style={{ maxWidth: "300px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Addition Calculator</h2>
            {/* Input for first number */}
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)}
                placeholder="First number"
                style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}
            />
            {/* Input for second number */}
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)}
                placeholder="Second number"
                style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}
            />
            {/* Button to perform addition */}
            <button onClick={handleAddition} style={{ width: "100%", padding: "0.5rem", background: "#1976d2", color: "#fff", border: "none", borderRadius: "4px" }}>
                Add
            </button>
            {/* Display result if available */}
            {result !== null && (
                <p style={{ marginTop: "1rem", fontWeight: "bold" }}>Result: {result}</p>
            )}
        </div>
    );
}


export default Calculator;