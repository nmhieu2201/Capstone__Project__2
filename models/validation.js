// Kiểm tra rỗng
function kiemTraRong(value, selectorError, name) {
    //output: true|false
    if (value === "") {
      document.querySelector(selectorError).innerHTML = name + " không được bỏ trống";
      return false;
    }
    return true;
  }
// Kiểm tra kí tự  
  function kiemTraKiTu(value, selectorError, name) {
    var regex = /^[A-Z a-z]+$/;
    if (regex.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML =
      name + " phải là kí tự";
    return false;
  }
  
// Kiểm tra số  
  function kiemTraSo(value, selectorError, name) {
      var regex = /^[0-9]+$/;
      if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
      }
      document.querySelector(selectorError).innerHTML =
        name + " phải là số";
      return false;
    }
  
 // Kiểm tra email 
    function kiemTraEmail(value, selectorError, name) {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
      }
      document.querySelector(selectorError).innerHTML =
        name + " phải hợp lệ! Ví dụ: abc@gmail.com";
      return false;
    }
  
 // Kiểm tra độ dài 
    function kiemTraDoDai(value,selectorError,name,minlength,maxlength){
      if(value.length > maxlength || value.length < minlength){
          document.querySelector(selectorError).innerHTML = name + " từ " + minlength + ' đến '+ maxlength + " ký tự !";
          return false;
      }
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  // Kiểm tra password

function kiemTraPassWord(value, selector, name) {
  var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  if (regex.test(value)) {
    document.querySelector(selector).innerHTML = "";
    return true;
  }
  document.querySelector(selector).innerHTML =
    name +
    " từ 6-10 lý tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
  return false;
}
// Kiểm tra pass recheck
function recheckPass (passcheck,password,selector){
  if(passcheck !== password){
    document.querySelector(selector).innerHTML = "Bạn phải nhập lại đúng password"
    return false
  }
  document.querySelector(selector).innerHTML = "";
  return true;
}
  
 export {kiemTraRong,kiemTraKiTu,kiemTraSo,kiemTraEmail,kiemTraDoDai,kiemTraPassWord,recheckPass}