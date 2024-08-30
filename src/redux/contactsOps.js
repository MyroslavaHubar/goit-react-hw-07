import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66d0f28e181d059277e01e33.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const { data } = await axios.get("/contacts");
    console.log("data: ", data);
  } catch (error) {
    console.log(error);
  }
});
