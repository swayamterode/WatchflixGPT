export const checkSignUpData = (email, password) => {
    if (!email) {
        return "Email is required";
    }
    if (!password) {
        return "Password is required";
    }
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Email is not valid";
    }
    if (!isPasswordValid) {
        return "Password: 8+ chars, 1 uppercase, 1 lowercase, 1 number";
    }

    return null; // means no error!
};
