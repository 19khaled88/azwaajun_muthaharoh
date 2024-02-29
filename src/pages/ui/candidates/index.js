import React, { useEffect } from 'react';
// import RootLayout from '@/components/Layout'
import { useRouter } from "next/router";
import { Blocks } from 'react-loader-spinner';
import Header from '../../../components/Header';
const Candidates = () => {
  const router = useRouter()
  const { myData } = router.query;

  const [data, setData] = React.useState([])

  useEffect(() => {
    if (myData) setData(JSON.parse(myData));
  }, [router.query]);

  const showBioData = (info) => {

    return (
      <div className='flex flex-row justify-center items-center'>
        <Blocks
         height="80"
         width="80"
         color="#4fa94d"
         ariaLabel="blocks-loading"
         wrapperStyle={{}}
         wrapperClass="blocks-wrapper"
         visible={true}
       />
      </div>
     )
    let array = []
    // if (info && info !== undefined) {
    //   info.map((item) => {
    //     array.push(
    //       <div className="card w-96 bg-base-100 shadow-xl">
    //         <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   })
    //   return array
    // } else if (info === undefined) {
    //   return (
    //    <div className='flex flex-row justify-center items-center'>
    //      <Blocks
    //       height="80"
    //       width="80"
    //       color="#4fa94d"
    //       ariaLabel="blocks-loading"
    //       wrapperStyle={{}}
    //       wrapperClass="blocks-wrapper"
    //       visible={true}
    //     />
    //    </div>
    //   )
    // } else {
    //   return 'No data found'
    // }

  }
  return (
    <div className=''>
      <Header />

      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
            <li class="active">

              <ul class="nav-pills nav-stacked" style={{ listStyle: 'none' }}>
                <li><a href="#">link1</a></li>
                <li><a href="#">link2</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>Shortcut</a>
              <ul class="nav-pills nav-stacked" style={{ listStyle: 'none' }}>
                <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link1</a></li>
                <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link2</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Overview</a>
            </li>
            <li>
              <a href="#"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-cart-plus fa-stack-1x "></i></span>Events</a>
            </li>
            <li>
              <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-youtube-play fa-stack-1x "></i></span>About</a>
            </li>
            <li>
              <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-wrench fa-stack-1x "></i></span>Services</a>
            </li>
            <li>
              <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Contact</a>
            </li>
          </ul>
        </div>

        <div id="page-content-wrapper">
          <div class="container-fluid xyz">
            <div class="row">
              <div class="col-lg-12">
                <h1 className='h-24 text-center font-bold text-2xl'> All Biodata ({data.data && Object.keys(data.data).length > 0 ? Object.keys(data.data).length : 0})</h1>
                <div className='h-75'>{showBioData(data.data)}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// Candidates.getLayout = (page) => {
//   return <RootLayout>{page}</RootLayout>
// }

export default Candidates
