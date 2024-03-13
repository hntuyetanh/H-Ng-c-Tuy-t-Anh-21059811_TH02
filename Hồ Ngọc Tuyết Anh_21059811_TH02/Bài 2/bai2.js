document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

        // Lấy thông tin từ các trường nhập liệu
        var fullname = document.getElementById('fullname').value;
        var cardcode = document.getElementById('cardcode').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var customertype = document.getElementById('customertype').value;
        var invoice = document.getElementById('invoice').value;
        var description = document.getElementById('description').value;

        // Hiển thị thông tin đã nhập trong form trong một alert
        var feedbackInfo = "Họ và Tên: " + fullname + "\n" +
                            "Mã thẻ: " + cardcode + "\n" +
                            "Số điện thoại: " + phone + "\n" +
                            "E-mail: " + email + "\n" +
                            "Loại khách hàng: " + customertype + "\n" +
                            "Mã hóa đơn: " + invoice + "\n" +
                            "Chi tiết mô tả: " + description;

        var confirmation = confirm("Thông tin bạn đã nhập:\n\n" + feedbackInfo + "\n\nBạn có muốn gửi ý kiến này không?");

        if (confirmation) {
            // Gửi dữ liệu đến máy chủ hoặc thực hiện hành động khác ở đây
            alert("Ý kiến của bạn đã được gửi đi. Cảm ơn bạn đã đóng góp ý kiến!");
            // Đặt lại giá trị của các trường nhập liệu
            document.getElementById('fullname').value = "";
            document.getElementById('cardcode').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('customertype').value = "vip"; // Reset về giá trị mặc định
            document.getElementById('invoice').value = "";
            document.getElementById('description').value = "";
        }
    });
});
