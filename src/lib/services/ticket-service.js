import axios from "axios";

const baseURL="https://pnny0h3cuf.execute-api.eu-west-1.amazonaws.com/dev/providers"
const eventId=1
const headers={
  Authorization: "Basic cJmAc71jah17sgqi1jqaksvaksda="
}

class ticketsService {
  constructor() {
    this.ticketsService=axios.create({
      baseURL,
      seUnifiedTopology: true
    });
  }

  getTickets() {
    return this.ticketsService.get(`/${eventId}`, {headers}).then(({data})=>data).catch(err=>{console.log(err)})
  }
}

const axiosRequestFunctions=new ticketsService();

export default axiosRequestFunctions;
