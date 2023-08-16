import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonPassResource = {
  instance: axios.create({
    baseURL: "/",
    withCredentials: true,
  }),
  fetchPass: async () => {
    const response = await JsonPassResource.instance.get(
      "/pass?page=1&size=5&sort=startedDay"
    );
    return response.data;
  },

  fetchPassContent: async () => {
    const response = await JsonPassResource.instance.get(
      "/pass?page=1&size=4&sort=startedDay"
    );
    return response.data.content;
  },

  fetchPassId: async (number) => {
    const response = await JsonPassResource.instance.get(`/pass/${number}`);
    return response.data;
  },

  fetchPassAry: async () => {
    const response = await JsonPassResource.instance.get("/pass/");
    return response.data.content;
  },
};

export default JsonPassResource;
