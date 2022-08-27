import Shoes from "../models/shoes.js";
async function getDataAPI() {
  const shoes = new Shoes();
  try {
    var result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    result.data.content.map((shoe) => {
      shoes.render(shoe);
    });
    // renderSinhVien(result.data);
  } catch (error) {
    console.log(error, "err");
  }
  // promise.then(function (result) {
  //   console.log(result.data);
  //   renderSinhVien(result.data);
  // });
  // promise.catch(function (err) {
  //   console.log(err);
  // });
}
getDataAPI();
