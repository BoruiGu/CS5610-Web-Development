app.factory("UserService", function () {
    var users = [
        { username: "admin", password: "admin" },
        { username: "user", password: "123" }
    ];
    var currentUser = null;
    var login = function (username, password) {
        for (var i in users) {
            if ((users[i].username == username) && (users[i].password == password)) {
                currentUser = username;
                return "success";
            }            
        }
        return "fail";
    };

    var logout = function () {
        currentUser = null;
    }

    var getCurrentUser = function () {
        return currentUser;
    }

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
    };
});