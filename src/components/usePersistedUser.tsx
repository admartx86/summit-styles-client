import { useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export const usePersistedUser = () => {
  const context = useContext(UserContext);

  useEffect(() => {
    if (!context) {
      console.error('UserContext not found');
      return;
    }

    const { setUsername } = context;

    const loggedInUser = localStorage.getItem('SummitStylesToken');
    if (loggedInUser) {
      try {
        const foundUser = JSON.parse(loggedInUser);
        setUsername(foundUser);
      } catch (e) {
        console.error('Invalid JSON', e);
        localStorage.removeItem('SummitStylesToken');
      }
    }
  }, [context]);
};
