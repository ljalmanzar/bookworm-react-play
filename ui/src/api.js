import axios from 'axios';

export default {
   user: {
      /*axious used to make POST request
      passes the credentials and if no errors returned, grabs info from server*/
      login: (credentials) =>
         axios.post("/api/auth", { credentials }).then(res => res.data.user)
   }
};