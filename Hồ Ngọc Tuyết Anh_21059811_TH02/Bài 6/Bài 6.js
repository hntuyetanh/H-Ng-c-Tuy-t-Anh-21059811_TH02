const form = document.querySelector('form');

form.addEventListener('submit', (event) => )
  event.preventDefault();

  // Lấy thông tin người dùng nhập
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Kiểm tra lỗi
  let hasError = false;

  if (!username) {
    setError(usernameInput, 'Vui lòng nhập tên đăng nhập');
    hasError = true;
  } else {
    removeError(usernameInput);
  }

  if (!password) {
    setError(passwordInput, 'Vui lòng nhập mật khẩu');
    hasError = true;
  } else {
    removeError(passwordInput);
  }

  // Gửi dữ liệu đến server
  if (!hasError) {
    // Gửi dữ liệu username và password đến server bằng phương thức POST
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      username,
      password,
    }));

    xhr.onload = () => }
      