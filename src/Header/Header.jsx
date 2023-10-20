import Tab from './Tab';
import {Navbar} from './Navbar'
import styled from 'styled-components';
const AwesomeHeadline = styled.h1`
    font-family: 'Meridiana';
`;


export const Header = () => {
  return (
    <AwesomeHeadline>
     <div className="text-center">
        <Navbar/>
        <div className="flex flex-col items-center mt-20 ">
          
          <h1 className='text-white md:text-6xl font-bold'>خودروی خود را انتخاب کنید</h1>
          
          <h5 className='my-10 text-white text-[10px] lg:text-[15px]'>قیمت مناسب، فروشنده و مشاور را پیدا کنید.</h5>
          <Tab/>
        
        </div>
       
       
         
       

    </div>
    </AwesomeHeadline>
  )
}


