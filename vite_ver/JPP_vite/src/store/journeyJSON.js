import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useSimpleStore = defineStore("exchange", () => {
  const exchangeList = ref([]);

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

  fetchExchageList();

  return { exchangeList };
});
