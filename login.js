// 定义预设的用户名和密码
const correctUsername = "123456";
const correctPassword = "123456";

// 登录验证函数
function validateLogin() {
    // 获取用户名和密码输入值
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 判断用户名和密码是否正确
    if (username === correctUsername && password === correctPassword) {
        // 登录成功，跳转到 dashboard.html 页面
        alert("登录成功，欢迎 " + username + "!");
        window.location.href = "index1.html";  // 跳转到下一页
    } else {
        // 登录失败，弹出错误信息
        alert("用户名或密码错误，请重新输入！");
    }
}