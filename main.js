/**
 * Đầu vào:
 *      Tạo biến cho người dùng nhập số lượng USD và gán bằng 0;
 *      Tạo biến cho người dùng nhập tỷ giá USD/VND và gán bằng 0 đồng
 * Xử lý:
 *      Tạo biến số tiền Việt nhận được sau khi quy đổi và gán bằng 0;
 *      Số tiền Việt nhận được = số lượng USD * tỷ giá USD/VND;
 * Đầu ra:
 *      Cho hiển thị số tiền Việt nhận được sau khi quy đổi
 */
function chuyenDoi() {
    let soLuongUSD = document.getElementById('soLuongUSD').value;
    let tiGiaUSD = document.getElementById('tiGiaUSD').value;
    let soTienVND = soLuongUSD * tiGiaUSD;
    document.getElementById('ketQua1').innerText = "Số tiền Việt nhận được là: " + soTienVND.toLocaleString() + " VND";
}

const luongNgay = 100000;
/** 
 * Đầu vào:
 *      Tạo biến lương ngày và gán giá trị 1000000;
 *      Tạo một biến nhập số ngày làm việc;
 * 
 * Xử lý;
 *      Tạo biến tổng lương gán bằng 0;
 *      Tổng lương = Số ngày làm việc * Lương 1 ngày;
 * Đầu ra:
 *      Cho hiển thị tổng lương
 */
function tinhLuong() {
    let soNgayLamViec = document.getElementById('soNgay').value;
    let tongLuong = 0;
    tongLuong = soNgayLamViec * luongNgay;
    document.getElementById('ketQua2').innerText = "Tổng lương: " + tongLuong.toLocaleString() + " VND";
}
/** 
 * Tính trung bình cộng của 5 số
 * Đầu vào:
 *     Tạo biến 5 biến để nhập 5 số(a, b, c, d, e);
 * 
 * Xư lý:
 *    Tạo biến tổng gán bằng 0;
 *    Tạo biển trung bình cộng gán bằng 0;
 *    Thực hiện phép cộng 5 số;
 *    Tính trung bình cộng bằng công thức tổng 5 số / 5;
 * 
 *  Đầu ra:
 *    Cho hiển thị trung bình cộng
 */
function tinhTrungBinh() {
    let a = Number(document.getElementById('so1').value);
    let b = Number(document.getElementById('so2').value);
    let c = Number(document.getElementById('so3').value);
    let d = Number(document.getElementById('so4').value);
    let e = Number(document.getElementById('so5').value);

    let tong = a + b + c + d + e;
    let trungBinhCong = tong / 5;

    document.getElementById('ketQua3').innerText = "Trung bình cộng: " + trungBinhCong;
}
/** 
 * Tính Chu vi và diện tính hình chữ nhật
 * Đầu vào:
 *     Tạo biến nhập đầu vào chiều dài và chiều rộng;
 *     Tạo biến x = 0 là đầu chèieu dài;
 *     Tạo biến y = 0 là đầu chiều rộng;
 * Xư lý:
 *    Tạo biến Chu Vi gán bằng 0;
 *    Triển khai công thức tính chu vi hình chữ nhật: ChuVi = (x + y) * 2;
 *    tạo biến Diện Tích gán bằng 0;
 *    Triển khai công thức tính diện tích hình chữ nhật: DienTich = x * y;
 * 
 *  Đầu ra:
 *    Cho hiển thị chu vi và diện tích
 */
function tinhChuViDienTich() {
    let x = Number(document.getElementById('chieuDai').value);
    let y = Number(document.getElementById('chieuRong').value);

    let chuVi = (x + y) * 2;
    let dienTich = x * y;

    document.getElementById('ketQuaChuVi').innerText = "Chu vi hình chữ nhật: " + chuVi;
    document.getElementById('ketQuaDienTich').innerText = "Diện tích hình chữ nhật: " + dienTich;
}
/** 
 * Tính tổng 2 ký số
 * Đầu vào:
 *     Tạo biến nhập đầu vào số nguyên dương có 2 ký số;
 * 
 * Xư lý:
 *    Tạo biên tổng gán bằng 0;
 *    Tạo biến số hàng chục gán bằng 0;
 *    Tạo biến số hàng đơn vị gán bằng 0;
 *    Tạo biến số tổng gán bằng 0;  
 * 
 *  Đầu ra:
 *   Cho hiển thị tổng 2 ký số
 */
function tinhTong() {
    let soNguyenDuong = Number(document.getElementById('soNguyenDuong').value);

    let soHangChuc = Math.floor(soNguyenDuong / 10);
    let soHangDonVi = soNguyenDuong % 10;
    let tong = soHangChuc + soHangDonVi;
    document.getElementById('ketQuaHangChuc').innerText = "Số hàng chục: " + soHangChuc;
    document.getElementById('ketQuaHangDonVi').innerText = "Số hàng đơn vị: " + soHangDonVi;
    document.getElementById('tongHaiChuSo').innerText = "Tổng 2 chữ số: " + tong;
}