/* 
Input
    Nhập vào 1 số có 2 chữ số

Các bước xử lý
    Tạo biến n, ten, unit, sum
    Tách số hàng chục
    Tách số hàng đơn vị

Output
    Tính tổng 2 ký số của n:
        sum = ten + unit

*/

var n, ten, unit, sum;

n = 59;

ten = n/10;
ten = Math.floor(ten)

unit = n%10;

sum = ten + unit;

console.log({sum});
