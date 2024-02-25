// import RootLayout from "@/components/Layout";

import DashboardLayout from "@/components/DashboardLayout";

const Account = () => {
  return (
    <div className="flex flex-col">
      <div className="py-5 flex-none">Admin panel / Home</div>
      <div className="h-svh">Welcome to Admin Dashboard</div>
    </div>
  )
};

Account.getLayout = (page) => (
  //   <RootLayout>
  
  <DashboardLayout>
    {page}
    </DashboardLayout>
  //   </RootLayout>
);

export default Account;