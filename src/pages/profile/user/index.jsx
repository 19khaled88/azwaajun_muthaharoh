import RootLayout from '@/components/Layout';
import React from 'react'

const Profile = () => {
  return (
    <div>Profile page</div>
  )
}

Profile.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Profile