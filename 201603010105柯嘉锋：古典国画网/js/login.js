function getuser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    testing(username, password, password1)
}

function testing(username, password, password1) {
    var tmp = username && password;
    if (tmp == "") {
        alert("您还没填写有东西呢！！！");
        return 0;
    }
    if (username.length < 6 || username.length > 16) {
        alert("用户名长度为6-16位喔！！！")
        return 0;
    }
    if (password < 6 || password1 < 6) {
        alert("密码的长度长度有点儿不太对呢！！！");
    } else if (password == password1) {
        alert("username:" + username + "\n" + "password:" + password);
    } else {
        alert("咋两次输入的密码不一样捏？？？");
    }
}