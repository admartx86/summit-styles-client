import React, { createContext, Dispatch, SetStateAction } from 'react';

type UserContextType = {
  username: string | null;
  setUsername: Dispatch<SetStateAction<string | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
