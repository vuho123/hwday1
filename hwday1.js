// Bai 2
let number = prompt("Pick 1 number and test if it is a prime number");
let res = number.split(",");
let number2 = res.map((i) => Number(i));
console.log(number2);

let trueNum = true;
for (let i = 0; i < number2.length; i++) {
  if (number2[i] === 1) {
    alert("1 is not a prime number");
  } else if (number2[i] > 1) {
    for (let x = 2; x < number2[i]; x++) {
      if (number2[i] % x == 0) {
        trueNum = false;
        break;
      }
    }
    if (trueNum) {
      alert(number2[i] + " is a prime number");
    } else {
      alert(number2[i] + " is not a prime number");
    }
  }
}

//Bai 1
//Tính đóng gói: che giấu dữ liệu, không cho truy xuất từ bên ngoài
//Tính kế thừa : Đối tượng con kế thừa thuộc tính của đối tượng cha mà không cần phải định nghĩa lại
//Tính đa hình: là một hành động có thể được thực hiện bằng nhiều cách khác nhau.
//Tính trừu tượng: giúp giảm sự phức tạp thông qua việc tập trung vào các đặc điểm trọng yếu hơn là đi sâu vào chi tiết.

