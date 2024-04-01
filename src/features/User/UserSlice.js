import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../..";

const initialState = {
  userData: [],
  loading: false,
  
};
export const LoginUser = createAsyncThunk(
  "login/user",
  async ({ Email, password }) => {
    const { data } = await axios.post(
      `/api/v1/login`,
      { Email, password },
      {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      }
    );
    return data;
  }
);


export const UserDetails = createAsyncThunk("user/details", async () => {
  const { data } = await axios.get(`${baseUrl}/api/users`);
  return data;
});
export const UserDetailsbyName = createAsyncThunk("user/details/name", async ({name}) => {
  console.log(name,"this is name");
  const { data } = await axios.get(`${baseUrl}/api/users?name=${name}`)

  return data;
});
export const UserDetailsbyFilter = createAsyncThunk("user/details/filter", async ({url}) => {

  const { data } = await axios.get(`${baseUrl}/api/users?${url}`)

  return data;
});




const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      // console.log(state.userData);
    },
    resetShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
  },
  extraReducers: {
    [LoginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [LoginUser.fulfilled]: (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.userData = action.payload.user;
      state.name = action.payload.user.name;
      state.profileUrl = action.payload.user.avator.url;
      state.showAlert = true;
      // state.role = action.payload.user.role;
      // if (action.payload.user.role === "admin") {
      //   state.isAdmin = true;
      // }
    },
    [LoginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.loggedIn = false;
    },

      
    [UserDetails.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [UserDetails.fulfilled]: (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.userData = action.payload;
     
   
    },
    [UserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.loggedIn = false;
    },
    [UserDetailsbyName.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [UserDetailsbyName.fulfilled]: (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.userData = action.payload;

   
    },
    [UserDetailsbyName.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.loggedIn = false;
    },
  
    [UserDetailsbyFilter.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [UserDetailsbyFilter.fulfilled]: (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.userData = action.payload;

   
    },
    [UserDetailsbyFilter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.loggedIn = false;
    },
  


  },
});

export const { setUserData, resetShowAlert } = userSlice.actions;
export default userSlice.reducer;
