import {
  kiemTraRong,
  kiemTraKiTu,
  kiemTraSo,
  kiemTraEmail,
  kiemTraDoDai,
  kiemTraPassWord,
  recheckPass,
} from "../models/validation.js";
import { User } from "../models/user.js";

document.querySelector(".btn-res").onclick = () => {
  let arrUser = document.querySelectorAll(".registers input");
  const gender = document.querySelector(".testChecked").checked;
  let user = {};
  for (let index of arrUser) {
    let { id, value } = index;
    user[id] = value;
  }
  // Validation
  let valid = true;
  //Kiểm tra rỗng
  valid &=
    kiemTraRong(user.email, "#mail-notice", "Email") &
    kiemTraRong(user.password, "#pass-notice", "Password") &
    kiemTraRong(user.name, "#name-notice", "Name") &
    kiemTraRong(user.phone, "#phone-notice", "Phone") &
    kiemTraRong(user.checkPass, "#pass-check", "Pass-recheck");

//   //Kiểm tra email
  if (kiemTraRong(user.email.trim(), "#mail-notice", "Email")) {
    valid &= kiemTraEmail(user.email, "#mail-notice", "Email");
  }
  // Kiểm tra password
  if (kiemTraRong(user.password.trim(), "#pass-notice", "Password")) {
    valid &= kiemTraPassWord(user.password, "#pass-notice", "Password");
  }
  // Kiểm tra pass-recheck
  if (kiemTraRong(user.checkPass.trim(), "#pass-check", "Pass-recheck")) {
    valid &= recheckPass(user.checkPass, user.password, "#pass-check");
  }
  // Kiểm tra tên
  if (kiemTraRong(user.name.trim(), "#name-notice", "Name")) {
    valid &= kiemTraKiTu(user.name, "#name-notice", "Name");
  }

  //Kiểm tra phone
  if (kiemTraRong(user.phone.trim(), "#phone-notice", "Phone")) {
    valid &= kiemTraSo(user.phone, "#phone-notice", "Phone");
  }
  if (!valid) {
    return;
  }
  // Tạo object user theo from của api yêu cầu
  let createUser = new User();
  (createUser.email = user.email),
    (createUser.password = user.password),
    (createUser.name = user.name),
    (createUser.phone = user.phone),
    (createUser.gender = gender),
    console.log("createUser", createUser);

  // // Call API
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: createUser,
  });
  promise.then(function (result) {
    console.log(result.data.content);
    console.log("thành công");
  });
  promise.catch(function (err) {
    console.log(err);
    console.log("Thất bại");
  });
};
