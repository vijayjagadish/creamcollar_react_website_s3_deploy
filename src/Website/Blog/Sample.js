import shrikanth from '../../assets/img/shrikanth.webp';
import kiran from '../../assets/img/kiran.webp';
import janakiraman from '../../assets/img/janakiraman.webp';
import about1 from '../../assets/img/about1.webp';
import OwlCarousel from "react-owl-carousel";
import React, { useState } from 'react';
import '../../App.css';
//const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']; // Sample categories
//const categories = Array.from({ length: 10 }, (_, i) => `Category ${i + 1}`); // Sample categories
const responsive1 = { 0:{items:1},768:{items:4},1366:{items:8}};
const variable1 ='#';
const dataList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Williams' },
    { id: 5, name: 'Mike Brown' }
  ]; // Sample data list
  
function Sample()  {
    return(
        <div className='domaincategory'>
<OwlCarousel className="owl-carousel owl-theme" nav margin={30}  dots={0} loop responsive={responsive1}>
          
          {dataList.map((item) => (
            <div key={item.id} className="item">
              {item.name}
            </div>
            
          ))}
         
        </OwlCarousel>
        </div>);
  }
  
  export default Sample;
  