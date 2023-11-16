import Deviceview from './Deviceview';
import Sample from './Sample';
import OwlCarousel from "react-owl-carousel";
import React, { useState } from 'react';
import Blogpagination from './Blogpagination';

function Blogtopsection()  {

  const responsive1 = { 0:{items:2},516:{items:3},768:{items:4},926:{items:6},1366:{items:10}};
const variable1 ='#';
const dataList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Williams' },
    { id: 5, name: 'Mike1' },
    { id: 6, name: 'John1' },
    { id: 7, name: 'Jane1' },
    { id: 8, name: 'Bob1' },
    { id: 9, name: 'Alice1' },
    { id: 10, name: 'Mike1' },
    { id: 11, name: 'Doe2' },
    { id: 12, name: 'Smith2' },
    { id: 13, name: 'Johnson2' },
    { id: 14, name: 'Williams2' },
    { id: 15, name: 'Brown2' }
  ]; // Sample data list
    return (
 <div>
<section className="blog-expertise">
 
   
            {/* <div className="col-md-9 d-flex align-items-center">
              <div className="expertise-content">
                <h2><span className="text-orange">Why we started CreamCollar</span></h2>
                <p>With Software defined vehicle set to have a profound impact on Automotive Industry, we decided to take this as a challenge to help young graduates and experienced automotive industry professionals to re-imagine their careers with cloud, data, security and digital business solutions through creating the collaborative ecosystem between Industry and Academia</p>
              </div>
            </div>
            <div className="col-md-3"><img src={image1} height="334" border-radius="130px" width="290"  alt=""/> </div>
          */} 



{/* <div className='flex1'>
<div className="blog1">Why we started CreamCollar</div>
<img className="blog2" src={image1}  />
<div className="blog3">With Software defined vehicle set to have a profound impact on Automotive Industry, we decided to take this as a challenge to help young graduates and experienced automotive industry professionals to re-imagine their careers with cloud, data, security and digital business solutions through creating the collaborative ecosystem between Industry and Academia.</div>
</div>
<div className='blogcontainer'>

</div> */}

<Deviceview/>
<div className='domaincategory'>
<OwlCarousel className="owl-carousel owl-theme" nav margin={30}  dots={0} loop responsive={responsive1}>
          
          {dataList.map((item) => (
            <div key={item.id} className="item">
              {item.name}
            </div>
            
          ))}
         
        </OwlCarousel>
        </div>
<div className='blogbkcolor'>
<Blogpagination/>
</div>
       {/* <div style="width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
<div style="width: 1122px; height: 334px; position: relative">
<img style="width: 291px; height: 334px; left: 831px; top: 0px; position: absolute; border-radius: 130px" src="https://via.placeholder.com/291x334" />
<div style="width: 809px; height: 160px; left: 0px; top: 96px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
<div style="width: 639px; color: #E48900; font-size: 32px; font-family: Gothic A1; font-weight: 700; word-wrap: break-word">Why we started CreamCollar</div>
<div style="width: 768px; color: #4D4D4D; font-size: 18px; font-family: Roboto; font-weight: 400; line-height: 24px; word-wrap: break-word">With Software defined vehicle set to have a profound impact on Automotive Industry, we decided to take this as a challenge to help young graduates and experienced automotive industry professionals to re-imagine their careers with cloud, data, security and digital business solutions through creating the collaborative ecosystem between Industry and Academia.</div>
</div>
</div>
</div> */}

  
</section>
 </div>
        
     
    );
  }
  
  export default Blogtopsection;
  