import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../..";

const initialState = {
  selectedTeam: [],
  Allteams:[],
  team:[],

};

export const getAllteams = createAsyncThunk("team/allteams", async () => {


  const { data } = await axios.get(`${baseUrl}/api/team/all/teams`)
  return data;

});
export const getteam = createAsyncThunk("team/id", async ({id}) => {


  const { data } = await axios.get(`${baseUrl}/api/team/${id}`)
  return data;

});

const TeamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeamMember: (state, action) => {
      const newMember = action.payload;
      const existingMember = state.selectedTeam.find(
        (member) =>
          member.domain === newMember.domain &&
          member.availability === newMember.availability
      );

      if (!existingMember) {
        state.selectedTeam.push(newMember);
        localStorage.setItem("selectedTeam", JSON.stringify(state.selectedTeam));
      }
      else{
        alert("Already added to the team or domain is same")
      }
    },
    removeTeamMember: (state, action) => {
      console.log(action.payload,"action.payload");
      state.selectedTeam = state.selectedTeam.filter(
        (member) =>  member._id !== action.payload
        
        
      );
      localStorage.setItem("selectedTeam", JSON.stringify(state.selectedTeam));
    },
    emptyTeam: (state) => {
      state.selectedTeam = [];
      localStorage.removeItem("selectedTeam");
    }
  },
  extraReducers:{
    [getAllteams.fulfilled]:(state,action)=>{
      state.Allteams=action.payload;
      state.loading=false;
    },
    [getAllteams.pending]:(state,action)=>{
      state.loading=true;
    
  
  },
  [getAllteams.rejected]:(state,action)=>{
    state.Allteams=[];
    state.loading=false;
  },
    [getteam.fulfilled]:(state,action)=>{
      state.team=action.payload;
      state.loading=false;
    },
    [getteam.pending]:(state,action)=>{
      state.loading=true;
    
  
  },
  [getteam.rejected]:(state,action)=>{
    state.team=[];
    state.loading=false;
  },
}
});

export const { addTeamMember, removeTeamMember ,emptyTeam} = TeamSlice.actions;
export default TeamSlice.reducer;

export const addToTeam = (member) => async (dispatch) => {
  try {
    dispatch(addTeamMember(member));
  
    console.log(member,"this is mem,ber");
  } catch (error) {
    console.error("Error adding team member:", error);
  }
};

export const removeFromTeam = (memberId) => async (dispatch) => {
  try {
    dispatch(removeTeamMember(memberId));
  } catch (error) {
    console.error("Error removing team member:", error);
  }
};