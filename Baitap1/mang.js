var array =[];
function save(){ //Định nghĩa hàm save để thu thập và lưu trữ dữ liệu đầu vào.
    //tạo đối tượng a để chứa các giá trị đầu vào
    var a = {
        //lấy giá trị được nhập vào 
        fname:document.getElementById('fname').value,
        id:document.getElementById('id').value,
        prdname:document.getElementById('prdname').value,
        qty:document.getElementById('qty').value,
        price:document.getElementById('price').value,
    }
    console.log(a);//In đối tượng a ra console để kiểm tra.
    array.push(a);//Thêm đối tượng a vào mảng array.
}
function show(){ //Định nghĩa hàm show để hiển thị các mục đã lưu trong bảng.
    var html ='';//Khởi tạo một chuỗi rỗng html để xây dựng các hàng của bảng.
        for(i in array){ //Bắt đầu một vòng lặp để lặp qua các chỉ số của mảng array.
            var n = i;   //Sao chép chỉ số hiện tại i vào n và tăng n lên 1 (để bắt đầu đếm từ 1).
            n++;
            html += "<tr>";
            html += "<td>" +n + "</td>";
            html += "<td>" + array[i].fname+ "</td>";
            html += "<td>" + array[i].id+ "</td>";
            html += "<td>" +array[i].prdname + "</td>";
            html += "<td>" +array[i].qty + "</td>";
            html += "<td>" +array[i].price + "</td>";
            html += "<td>" +parseFloat(array[i].qty)*parseFloat(array[i].price) + "</td>";
            html += "</tr>";
        }
        document.getElementById('tbl').innerHTML= html;// Cập nhật nội dung HTML của phần thân bảng với html đã xây dựng.
}
function reset(){  //Định nghĩa hàm reset để xóa tất cả các trường nhập.
    //Đặt giá trị của trường nhập ... thành chuỗi rỗng.
    document.getElementById('fname').value='';
    document.getElementById('id').value='';
    document.getElementById('prdname').value='';
    document.getElementById('qty').value='';
    document.getElementById('price').value='';
}
