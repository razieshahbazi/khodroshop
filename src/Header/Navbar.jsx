import styled from "styled-components";
import car from '../img/car.png';
import arrow from '../img/arrow.png';



const Nav =styled.div`

font-family: "Yekan-Bold", Sans-serif;
font-size: 15px;

.image img{
  width:50px;
  height:50px;
  margin-top: 40px;
  background-color:#fcb900;
  border-radius:100%;
  padding:10px;
}

.dropbtn img{
  width:10px;
  height:10px;
  display:inline;
  margin-right:5px;
}

ul {
  list-style-type: none;
  margin: 40px;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}


li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color:gray;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: right;
}


.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
  
}

.dropdown:hover .dropdown-content {
  display: block;
}


@media screen and (max-width: 600px) {
  .topnav{
    display:none;
    visibility:hidden;
  }
}
`



export const Navbar = () => {
  return (
    <Nav>
      <div className="flex justify-between lg:flex-row text-right font-bold">

      <div>
        <ul className="topnav" id='myTopnav'>
          <li className="btn-submit border border-solid  border-white-300 rounded-full"><a href="#home" >افزودن آگهی +  </a></li>
          <li><a href="#news">تماس با ما</a></li>
          <li><a href="/about">درباره ما</a></li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">صفحات<img src={arrow} alt="arrow" className="ml-3" /></a>
            <div className="dropdown-content rounded-2xl ">
              <a href="#" className="rounded-full">فروشگاه</a>
              <a href="#">قیمت گذاری</a>
              <a href="#">محاسبه گر</a>
              <a href="#">خدمات</a>
              <a href="#">سوالات متداول</a>
              <a href="#" className="rounded-full">404</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">وبلاگ<img src={arrow} alt="arrow" className="ml-3" /></a>
            <div className="dropdown-content rounded-2xl">
              <a href="#" className="rounded-full">استایل لیستی</a>
              <a href="#">استایل گرید</a>
              <a href="#" className="rounded-full">استایل تکی</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">آگهی ها<img src={arrow} alt="arrow" className="ml-3" /></a>
            <div className="dropdown-content rounded-2xl">
              <a href="#" className="rounded-full">استایل 1</a>
              <a href="#">استایل 2</a>
              <a href="#">استایل 3</a>
              <a href="#">استایل 4</a>
              <a href="#">استایل 5</a>
              <a href="#" className="rounded-full">استایل 6</a>
            </div>
            </li>
            <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">دموها<img src={arrow} alt="arrow" className="ml-3" /></a>
            <div className="dropdown-content rounded-2xl">
              <a href="#" className="rounded-full">خانه 1</a>
              <a href="#">خانه 2</a>
              <a href="#">خانه 3</a>
              <a href="#">خانه 4</a>
              <a href="#">خانه 5</a>
              <a href="#" className="rounded-full">خانه 6</a>
            </div>
            </li>
            <li><a href="#news">ثبت نام</a></li>
        </ul>
      </div>

      <div className="image mr-6">
        <img src={car} alt="car" />
      </div>

      </div>


 


        
    
    </Nav>
  )
}













