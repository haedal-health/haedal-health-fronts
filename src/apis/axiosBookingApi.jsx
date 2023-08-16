import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonBookingResource = {
  instance: axios.create({
    baseURL: "/",
    withCredentials: true,
  }),
  fetchBooking: async () => {
    const response = await JsonBookingResource.instance.get("/booking");
    return response.data;
  },

  fetchBookingId: async (number) => {
    const response = await JsonBookingResource.instance.get(
      `/booking/${number}`
    );
    return response.data;
  },

  fetchBookingAry: async () => {
    const response = await JsonBookingResource.instance.get("/booking/");
    return response.data.content;
  },

  fetchBookingPassAry: async (number) => {
    const response = await JsonBookingResource.instance.get(
      `/booking?pass=${number}`
    );
    return response.data.content;
  },

  fetchBookingUserAry: async (number) => {
    const response = await JsonBookingResource.instance.get(
      `/booking?user=${number}`
    );
    return response.data.content;
  },
};

export default JsonBookingResource;
