//Xuất ra các số nguyên tố trước n
/*Đầu vào: Số n
*Xử lý: 
-Kiểm tra điều kiện nếu n<=1 thì không có số nguyên tố nào trước nó
-Dùng vòng lặp lồng for để kiểm tra số nguyên tố:
+Ta cho biến prime_check=true (true nếu là snt);
+Dùng biến i ở vòng lặp ngoài, i=2 khi bắt đầu (vì 2 là snt đầu tiên), biến i này sẽ chạy từ i đến n, 
+Biến j ở vòng lặp trong để tìm ước số cho i, j bắt đầu bằng 2 (vì mọi số đều chia hết cho 1)
+ Ta biết rằng: số nguyên >= 2 bất kỳ sẽ luôn có số ước ở nửa đầu căn bậc 2 của nó bằng số ước ở nửa sau căn bậc 2 của nó.
+ Vì thế chỉ cần giới hạn j<= căn bậc 2 của i để xét xem số i có ước nào ngoài 1 và chính nó hay không.
+ Nếu i%j==0 thì đó ko phải là số nguyên tố. Lúc này biến prime_check=false (ko phải snt), khi đó vòng lặp j kết thúc (break)
*Đầu ra: xuất ra các số nguyên tố trước n */
function prime_number_check(n) {
  var result = "<div class='alert alert-success'>";
  var prime_check = true;
  var prime_number = "";
  if (n <= 1) {
    result += "Không có số nguyên tố nào!<div>";
  }
  for (var i = 2; i <= n; i++) {
    prime_check = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        prime_check = false;
        break;
      }
    }
    if (prime_check == true) {
      prime_number = i + " ";
      result += prime_number;
    }
  }
  result += "</div>";
  return result;
}
function prime_number() {
  var n = document.getElementById("txt_n").value * 1;
  var result = prime_number_check(n);
  document.getElementById("print_result").innerHTML = result;
}
