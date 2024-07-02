import axios from "axios";

const detectImage = async (image) => {
  let resp = await axios({
    method: "POST",
    url: "https://detect.roboflow.com/trashclass-zuu3r/1",
    params: {
        api_key: "4V6T95yomp7w4ccYHkYr"
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

  return resp
}

export default detectImage;