// apis/companiesApi.js
import axios from "axios";
import { selector } from "react-redux";

const apiRoot = axios.create({
  baseURL: "http://localhost:8080/kakko",
});

export const getAllCompaniesApi = async () => {
  try {
    const { data } = await apiRoot.get("");
    return data;
  } catch (error) {
    // throw error;
  }
};

export const getCompanyApi = async (companyId) => {
  try {
    const { data } = await apiRoot.get(`/${companyId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCompanyApi = async () => {
  try {
    const { data } = await apiRoot.post(
      "",
      {
        회사명: "네이버",
        국가: "한국",
        지역: "판교",
        email: "Naver@gmail.com",
        password: "naver123",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const putCompanyApi = async (companyId) => {
  try {
    const { data } = await apiRoot.put(
      `/${companyId}`,
      {
        회사명: "쿠팡",
        지역: "서울",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCompanyApi = async (companyId) => {
  try {
    await apiRoot.delete(`/${companyId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw error;
  }
};

//API 사용하기

export const companyRegionList = selector({
  key: "companyRegionList",
  get: async () => {
    const data = await getAllCompaniesApi();

    const seoulCompaniesList = data.filter(
      (company) => company.지역 === "서울"
    );
    const busanCompaniesList = data.filter(
      (company) => company.지역 === "부산"
    );

    return {
      seoulCompaniesList,
      busanCompaniesList,
    };
  },
});
