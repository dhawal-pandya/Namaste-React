import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'DUMMY',
    email: 'dumfaq@balsuc.com',
  },
});

UserContext.displayName = 'UserContext';

export default UserContext;
