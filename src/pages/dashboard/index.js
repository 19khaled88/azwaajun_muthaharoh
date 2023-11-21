import DashboardLayout from "@/components/DashboardLayout";
// import RootLayout from "@/components/Layout";



const Account = () => {
  return <div>Account screen</div>;
};

Account.getLayout = (page) => (
//   <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
//   </RootLayout>
);

export default Account;