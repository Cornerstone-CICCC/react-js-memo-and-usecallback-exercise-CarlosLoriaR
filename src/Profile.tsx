import { memo } from 'react';

interface ProfileProps {
  firstname: string;
  lastname: string;
}

const Profile = memo(({ firstname, lastname }: ProfileProps) => {
  console.log('Rendered Profile Component');

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {firstname} {lastname}</p>
    </div>
  );
});

Profile.displayName = 'Profile';

export default Profile;
