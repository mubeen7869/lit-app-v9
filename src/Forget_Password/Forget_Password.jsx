import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forget_Password.css";

const Forget_Password = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        validatePassword(value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        validatePassword(newPassword, value);
    };

    const validatePassword = (password, confirmPassword) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        const isValid = passwordRegex.test(password);

        if (!isValid) {
            setError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)");
            return false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return false;
        }

        setError("");
        return true;
    };

    const createPassword = () => {
        const isValid = validatePassword(newPassword, confirmPassword);
        if (isValid) {
            // Proceed with password change
            alert("Password successfully changed");
            navigate("/");
        }
    };

    return (
        <div className="forget_password_Container">
            <form className="forget_password">
                <h1 className="forget_password_header">Forgot Password</h1>
                <input
                    className="new_password"
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                />
                <input
                    className="new_password"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {error && <p className="error-message">{error}</p>}
                <button className="Create Password" onClick={createPassword}>
                    Create Password
                </button>
            </form>
        </div>
    );
};

export default Forget_Password;
