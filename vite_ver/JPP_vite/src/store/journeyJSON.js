import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useSimpleStore = defineStore("exchange", () => {
  const exchangeList = ref([]);
  const externalExchangeURI =
    "/external-api/site/program/financial/exchangeJSON?authkey=4pDzyxv78DGr3eWzbZL6jQ6zyynZxs7e&data=AP01";

  const fetchExchageList = async () => {
    try {
      const response = await axios.get("/api/exchangeRecord");
      if (response.status === 200) {
        exchangeList.value = response.data;
        // console.log(response.data)
      } else {
        alert("데이터 조회 실패");
      }
    } catch (error) {
      alert("에러 발생 : " + error);
    }
  };

  const fetchPlaceList = async (list) => {
    try {
      const response = await axios.get("/api/savedPlace");
      if (response.status === 200) {
        list.value = response.data;
      } else {
        alert("데이터 조회 실패");
      }
    } catch (error) {
      alert("에러발생 : " + error);
    }
  };

  const fetchExternalAPIExchageList = async (list) => {
    try {
      const response = await axios.get(externalExchangeURI);
      if (response.status === 200) {
        list.value = response.data;
      } else {
        alert("데이터 조회 실패");
      }
    } catch (error) {
      console.log("외부 환율 API Error");
      console.log(error);
    }
  };

  const deletePlace = async (id) => {
    // console.log(id)
    try {
      const response = await axios.delete('/api/savedPlace/' + id)
    } catch (error) {
      console.log(error)
    }
    // await axios.delete("/api/savedPlace")
  }
  fetchExchageList();

  return { exchangeList, fetchPlaceList, fetchExternalAPIExchageList, deletePlace };
});
