import request from "../utils/request";


export function fatchData() {
  return request("/api/users")
}

export function fetchRemoveItem(query) {
  console.log(query);
  return true
}
