import React, { useState } from 'react';

const MovieComponent = ({ movieItem }) => {
    const [stockQuantity, setStockQuantity] = useState(60);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const incrementHandler = () => {
        if (stockQuantity > 0) {
            setSelectedQuantity(selectedQuantity + 1);
            setStockQuantity(stockQuantity - 1);
        } else {
            alert(`${movieItem.movieName} is out of stock`);
        }
    };

    const decrementHandler = () => {
        if (selectedQuantity > 0) {
            setSelectedQuantity(selectedQuantity - 1);
            setStockQuantity(stockQuantity + 1);
        } else {
            alert(`${movieItem.movieName} is not added to the cart`);
        }
    };

    const paymentHandler = () => {
        // Perform payment logic here
        // For now, just show the success message
        setShowSuccessMessage(true);
    };

    return (
        <div className="card">
            <div className="text-container">
                <h3>{movieItem.movieName}</h3>
                <p className="year">({movieItem.movieYear})</p>
                <p className="rating-label">
                    IMDb Rating: <span className="rating">{movieItem.imdbRating}/10</span>
                </p>
                <p className="genre">
                    Genre: {movieItem.movieGenre1}
                    {movieItem.movieGenre2 && `, ${movieItem.movieGenre2}`}
                </p>
                <p className="availability">Available stock : {stockQuantity}</p>
                <div className="counter">
                    <button className="counter-button" onClick={decrementHandler}>
                        -
                    </button>
                    <p className="counter-number">{selectedQuantity}</p>
                    <button className="counter-button" onClick={incrementHandler}>
                        +
                    </button>
                </div>
                <button className="submit-button" onClick={paymentHandler}>
                    Pay
                </button>
                {showSuccessMessage && (
                    <p className="success-message">Payment successful! Thank you for your purchase.</p>
                )}
            </div>
        </div>
    );
};

export default MovieComponent;
