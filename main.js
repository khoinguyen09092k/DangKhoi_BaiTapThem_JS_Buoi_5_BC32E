/*
bài tập 1: tính tiền thuế 
*Mô hình 3 khối
Đầu vào : Người dùng nhập vào tên, thu nhập năm, số người phụ thuộc
Xử lí :Công thức sử dụng : Thu nhập chịu thuế (đặt là N) = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 + Các trường hợp xảy ra : 
 Thu nhập <= 60 triệu thì N*0,05
 Thu nhập <= 120 triệu &&  Thu nhập > 60 triệu  thì N*0,1
 Thu nhập <= 210 triệu &&  Thu nhập > 120 triệu  thì N*0,15
 Thu nhập <= 384 triệu &&  Thu nhập > 210 triệu  thì N*0,2
 Thu nhập <= 624 triệu &&  Thu nhập > 384 triệu  thì N*0,25
 Thu nhập <= 960 triệu &&  Thu nhập > 624 triệu  thì N*0,30
 Thu nhập > 960 triệu thì N*0,35
Đầu ra: Xuất ra tên và số tiền thuế phải trả
*/
// chương trình
document.getElementById('btnTienThue').onclick = function () {
    var nhapTen = document.getElementById('nhapTen').value;
    var thuNhap = Number(document.getElementById('thuNhap').value);
    var nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);
    ketQua_b1 = 0;
    if (thuNhap <= 60000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.05);
    } else if (thuNhap > 60000000 && thuNhap <= 120000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.1);


    } else if (thuNhap > 1200000000 && thuNhap <= 210000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.15);

    } else if (thuNhap > 210000000 && thuNhap <= 384000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.2);

    } else if (thuNhap > 384000000 && thuNhap <= 624000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.25);

    } else if (thuNhap > 624000000 && thuNhap <= 960000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.3);
    } else if (thuNhap > 960000000) {
        ketQua_b1 = ((thuNhap - 4000000 - (nguoiPhuThuoc * 1600000)) * 0.35);

    }
    document.getElementById('ketQua_b1').innerHTML = "Xin chào " + nhapTen + " bạn có số tiền thuế là : " + ketQua_b1.toLocaleString() + "VNĐ";
}




/*
BÀI 2 TÍNH TIỀN CÁP 
Mô hình 3 khối :
Đầu vào : nhập vào tên người dùng, kênh cao cấp, số kênh kết nối nếu là khách hàng doanh nghiệp
Xử lí : 
+ Khách hàng là nhà dân : tienCap = 4.5 + 20.5 + (7.5 * soKenhcaocap);
+ khách hàng là doanh nghiệp :
TH1 : số kênh kết nối >0 && <=10 thì tienCap = 15 + 75 +(soKenhcaocap*50)
TH2 : số kênh kết nối > 10 thì tienCap = 15 + 75 + (soKenhcaocap*50)+ ((soKetNoi - 10)*5)
Đầu ra : Xuất ra tên khách hàng và sô tiền cáp phải trả

*/
document.getElementById('btnTienCap').onclick = function () {
    var maKH = document.getElementById('maKH').value;
    var tongTien = 0;
    var tongTien = tinhTienCap("loaiKH", "soKenh", "soKetNoi");
    if (tongTien == 0) {
        document.getElementById('ketQua_b2').innerHTML = "Vui lòng chọn loại khách hàng !";
    } else
        document.getElementById('ketQua_b2').innerHTML = "Mã khách hàng : " + maKH + " Bạn có số tiền cáp là : " + tongTien + "$";
}

// hàm tính tiền cáp
function tinhTienCap(id1, id2, id3) {
    var loaiKH = document.getElementById(id1).value;
    var soKenh = Number(document.getElementById(id2).value);
    var soKetNoi = Number(document.getElementById(id3).value);
    var tienCap = 0;
    if (loaiKH === "chuaChon") {
        // document.getElementById('ketQua_b2').innerHTML = "Vui lòng chọn loại khách hàng !"
        return 0;
    }
    else if (loaiKH === "nhaDan") {
        tienCap = 4.5 + 20.5 + (7.5 * soKenh);
    } else if (loaiKH === "doanhNghiep") {
        if (soKetNoi <= 10 && soKetNoi >= 0 ) {
            tienCap = 15 + 75 + (soKenh * 50)
        }if (soKetNoi > 10) {
            tienCap = 15 + 75 + (soKenh * 50) + ((soKetNoi - 10) * 5)
        }
    }

    return tienCap;
}

// hàm ẩn nút số kết nối
function hiden_soketnoi() {
    var loaiKH = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKetNoi");
    if (loaiKH == "nhaDan" || loaiKH == "chuaChon") {
        soKetNoi.style.display = "none";
    } else if (loaiKH == "doanhNghiep") {
        soKetNoi.style.display = "inline-block";
    }
}