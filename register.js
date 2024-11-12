// 简单的表单验证
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // 检查必填字段是否为空
    if (username == "" || password == "" || confirmPassword == "" || email == "" || phone == "") {
        alert("所有字段不能为空！");
        return false;
    }

    // 检查密码是否一致
    if (password != confirmPassword) {
        alert("密码和确认密码不一致！");
        return false;
    }

    // 简单的邮箱格式验证
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("请输入有效的邮箱地址！");
        return false;
    }

    // 检查手机号格式（简单验证）
    var phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        alert("请输入有效的手机号！");
        return false;
    }

    return true;  // 如果所有验证通过
}

// 表单提交后跳转
function submitForm() {
    if (validateForm()) {
        // 如果验证通过，模拟提交成功后跳转
        // 可以将表单数据发送到服务器，或者直接跳转到下一个页面
        alert("注册成功！正在跳转...");
        
        // 延时3秒后跳转到 'welcome.html'
        setTimeout(function() {
            window.location.href = "index1.html";
        }, 1000);  // 延时1秒
    }
}