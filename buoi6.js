// Lấy root của trang web
var display = document.querySelector("#display");

// Xóa biểu tượng con chuột
//document.querySelector('body').style.cursor = 'none';
// Lấy phần tử hình tròn
var circle = document.getElementsByClassName("circle");
// Đặt bán kính hình tròn
var space = circle[0].offsetHeight / 2;

// Khởi tạo biến kiểm tra sự kiện click chuột
// Ban đầu không có vẽ hình tròn
var isClick = false;
// Thêm sự kiện cho chuột: rê chuột
document.addEventListener("mousemove", function (e) {
  var x = e.clientX - space;
  var y = e.clientY - space;
  createNewCircle(isClick, x, y);
  // Không cần set vị trí của hình tròn ban đầu bởi vì ta đã tạo hình tròn mới
  circle[0].style.left = x + "px";
  circle[0].style.top = y + "px";
});

// Tạo thêm hình tròn
function createNewCircle(isClick, ...args) {
  var newCircle = document.createElement("div");
  newCircle.className = "circle";
  newCircle.style.backgroundColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  newCircle.style.left = args[0] + "px";
  newCircle.style.top = args[1] + "px";
  if (isClick) {
    display.appendChild(newCircle);
  }
}
// Thêm sự kiện cho chuột: click chuột
document.addEventListener("click", () => {
  display.style.cursor = isClick ? "auto" : "none";
  isClick = !isClick;
  return isClick;
});

// Load trang web
