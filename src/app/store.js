import { configureStore } from '@reduxjs/toolkit';

import UserSlice from '../features/User/UserSlice';
import TeamSlice from '../features/Team/team';

export const store = configureStore({
  reducer: {


    userSlice:UserSlice,

    team:TeamSlice

  },
});
