function giaiPhuongTrinh() {
    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
  
    if (isNaN(a) || isNaN(b)) {
      document.getElementById('ketQua').innerText = "Vui lòng nhập hệ số a và hệ số b";
      return;
    }
  
    if (a === 0) {
      if (b === 0) {
        document.getElementById('ketQua').innerText = "Phương trình vô số nghiệm";
      } else {
        document.getElementById('ketQua').innerText = "Phương trình vô nghiệm";
      }
    } else {
      var x = -b / a;
      document.getElementById('ketQua').innerText = "Nghiệm x = " + x.toFixed(2);
    }
  }
  