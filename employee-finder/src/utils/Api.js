import axios from "axios";

let API = {
    FindMe: function() {
      return axios.get(
        "https://randomuser.me/api/?results=50&nat=us" 
          
      );
    }
  };

  export default API 