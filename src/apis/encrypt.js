import axios from "axios";

const KEY = '70aa9d5184msh24f489409866b23p1ff84cjsn5832992d4f80';

export default axios.create({
  baseURL:"https://caesar-cipher1.p.rapidapi.com",
    headers: {
      "x-rapidapi-host": "caesar-cipher1.p.rapidapi.com",
      "x-rapidapi-key":"4e957488bcmshf8ae60caf235912p126fe6jsn78505801f2ab"
  }
})
