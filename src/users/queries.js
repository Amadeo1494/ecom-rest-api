const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const getUsersByUsername = "SELECT * FROM users WHERE username = $1";

const checkUsersExists = "SELECT s FROM users s WHERE s.username = $1";

const addNewUser = "INSERT INTO users (username, password, first_name, last_name, address, email, phone_num) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const removeUser = "DELETE FROM users WHERE id = $1";

const updateUserName = "UPDATE users SET username = $1 WHERE id = $2";
const updateUserPass = "UPDATE users SET password = $1 WHERE id = $2";
const updateUserFirst = "UPDATE users SET first_name = $1 WHERE id = $2";
const updateUserLast = "UPDATE users SET last_name = $1 WHERE id = $2";
const updateUserAdrs = "UPDATE users SET address = $1 WHERE id = $2";
const updateUserEmail = "UPDATE users SET email = $1 WHERE id = $2";
const updateUserPhone = "UPDATE users SET phone_num = $1 WHERE id = $2";


module.exports = {
    getUsers,
    getUsersById,
    getUsersByUsername,
    checkUsersExists,
    addNewUser,
    removeUser,
    updateUserName,
    updateUserPass,
    updateUserFirst,
    updateUserLast,
    updateUserAdrs,
    updateUserEmail,
    updateUserPhone
};