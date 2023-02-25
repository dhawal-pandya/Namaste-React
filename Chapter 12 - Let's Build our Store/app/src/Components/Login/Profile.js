// import React, { useContext } from 'react';

// import UserContext from '../Utils/UserContext';

// const Profile = () => {
//   const { user } = useContext(UserContext);
//   return (
//     <div>
//       <h1>{user.name} - Naam hi kaafi hai</h1>
//     </div>
//   );
// };

// export default Profile;

import React, { Component } from 'react';
import UserContext from '../../Utils/UserContext.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <div>supdawg!</div>
        <UserContext.Consumer>
          {({ user }) => <h1>{user.name} - Naam hi kaafi hai</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Profile;
