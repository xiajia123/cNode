import axios from "../http";
import { GET_DATA } from "./mutation-types";
import moment from "dayjs";

export default {
  async getData({ commit }) {
    try {
      let res = await axios.req("api/api/v1/topics");
      let date = new Date();
      let d = date.getTime();
      res.data.data.map(item => {
        let times = moment(d).valueOf() - moment(item.last_reply_at.valueOf());
        item.day = parseInt(times / 60 / 60 / 1000 / 24);
        item.hours = parseInt(times / 60 / 60 / 1000);
        item.minutes = parseInt(times / 60 / 1000);
      });
      console.log(res.data.data);
      commit(GET_DATA, res.data);
    } catch (e) {
      console.log(e);
    }
  }
};
