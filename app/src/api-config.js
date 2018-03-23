/* import ApiClient from "./models/api-client/src/index.js"; */

import ApiClient from "./models/api-client/src/index.js";


let protocol = process.env.REACT_APP_API_PROTOCOL
let host =process.env.REACT_APP_API_HOST
let port = process.env.REACT_APP_API_PORT


 const apiClient = new ApiClient(protocol, host, port)
export default apiClient


