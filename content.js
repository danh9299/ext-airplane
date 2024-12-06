// Tạo phần tử máy bay
const airplane = document.createElement("img");
airplane.id = "airplane";
airplane.src = "icons/1.png";  // Đảm bảo đường dẫn đúng
document.body.appendChild(airplane);

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Các thông số di chuyển
let posX = 0; // Vị trí hiện tại X
let posY = 0; // Vị trí hiện tại Y
let direction = "right"; // Hướng di chuyển: 'right', 'down', 'left', 'up'
const speed = 3; // Tốc độ di chuyển (px mỗi khung hình)

function moveAirplane() {
  // Điều chỉnh vị trí dựa trên hướng
  if (direction === "right") {
    airplane.style.transform = "rotateY(180deg)";
    posX += speed;
    if (posX >= screenWidth - 150) direction = "down"; // Chạm cạnh phải, đổi hướng xuống
  } else if (direction === "down") {
    airplane.style.transform = "rotate(270deg)";
    posY += speed;
    if (posY >= screenHeight - 150) direction = "left"; // Chạm cạnh dưới, đổi hướng trái
  } else if (direction === "left") {
    airplane.style.transform = "rotate(360deg)";
    posX -= speed;
    if (posX <= 0) direction = "up"; // Chạm cạnh trái, đổi hướng lên
  } else if (direction === "up") {
    airplane.style.transform = "rotate(450deg)"; // Flip ảnh khi bay trái
    posY -= speed;
    if (posY <= 0) direction = "right"; // Chạm cạnh trên, đổi hướng phải
  }

  // Cập nhật vị trí máy bay
  airplane.style.left = `${posX}px`;
  airplane.style.top = `${posY}px`;

  // Tiếp tục di chuyển
  requestAnimationFrame(moveAirplane);
}

// Sự kiện click vào máy bay
airplane.addEventListener("click", () => {
  alert("Cùng bay thôi nào!");
});

// Bắt đầu di chuyển
moveAirplane();
