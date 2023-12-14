import React, { useState } from 'react';

const BookingPage = () => {
    const [stage, setStage] = useState(0); // 0: Select Service, 1: Date & Time, 2: Complete Request
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: ''
        // Add other form fields as necessary
    });

    const handleNext = () => {
        setStage((prevStage) => prevStage + 1);
    };

    const handleBack = () => {
        setStage((prevStage) => prevStage - 1);
    };

    const handleSubmit = () => {
        // Submit form data
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            {stage === 0 && (
                <div>
                    <label>Select Service:</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        {/* Options here */}
                    </select>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {stage === 1 && (
                <div>
                    <button onClick={handleBack}>Back</button>
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <label>Time:</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {stage === 2 && (
                <div>
                    <button onClick={handleBack}>Back</button>
                    <p>Review your selection</p>
                    {/* Display a summary of selected options */}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
