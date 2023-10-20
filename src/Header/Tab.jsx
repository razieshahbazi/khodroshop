import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/material/styles';







function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box className='lg:w-[1100px]' sx={{height:200 , borderRadius:"10px"}} >
     
        <Tabs
          position="static" 
          value={value}
          onChange={handleChange}
          indicatorColor='white'
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{backgroundColor: "rgb(233, 158, 0)" , color:"white" ,direction:"rtl" }}
          className='rounded-t-xl mx-auto w-48 lg:w-[500px]'
          
        >
          <Tab label="همه" {...a11yProps(0)} sx={{ backgroundColor: "white" , color:"darkblue" , minWidth:'30px' , fontWeight:'bold'}}/>
          <Tab label="خودرو صفر" {...a11yProps(1)} sx={{backgroundColor: "white" , fontWeight:'bold' , color:"darkblue",minWidth:'30px' }} />
          <Tab label="خودرو کارکرده" {...a11yProps(2)} sx={{backgroundColor: "white" , color:"darkblue" , minWidth:'30px' ,fontWeight:'bold'}} />
        </Tabs>
      
      <SwipeableViews
        className='bg-white lg:h-5/6 rounded-xl'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        
        <div className='relative  flex flex-col lg:flex-row-reverse justify-between '>
            <div className='inline flex flex-col ' dir="rtl">
              <label className='text-right mb-3 text-blue-950'>برند</label>
              <select name="choice"  className='border border-solid text-gray-400 border-slate-300 p-4 w-56 rounded-xl '>
                <option value="first">انتخاب برند</option>
                <option value="first">ایران خودرو</option>
                <option value="second">بی ام و</option>
                <option value="third">پورشه</option>
                <option value="third">تویوتا</option>
                <option value="third">سایپا</option>
              </select>
            </div>

            <div className='inline flex flex-col'>
              <label className='text-right mb-3 text-blue-950'>مدل</label>
              <select name="choice" dir="rtl" className='border border-solid text-gray-400 border-slate-300 p-4 w-56 rounded-xl '>
              <option value="first">انتخاب برند</option>
                <option value="first">ایران خودرو</option>
                <option value="second">بی ام و</option>
                <option value="third">پورشه</option>
                <option value="third">تویوتا</option>
                <option value="third">سایپا</option>
              </select>
            </div>
          
            <div className='inline flex flex-col'>
              <label className='text-right mb-3 text-blue-950'>قیمت</label>
              <input type="number" dir="rtl" name="filter-price-from" value="" placeholder="حداقل قیمت" className='border border-solid border-slate-300 p-3 w-[200px] rounded-xl '></input>
            </div>
          
            <div className='inline flex flex-col mt-9'>
              <input type="number" dir="rtl" name="filter-price-from" value="" placeholder="حداکثر قیمت" className='border border-solid  border-slate-300 p-3 w-[200px] rounded-xl '></input>
            </div>

          <button className="bg-amber-400 text-blue-950 text-[18px]  lg:w-[150px] h-13 hover:text-white hover:bg-blue-950 hover:transition duration-500 hover:ease-in-out hover:delay-300 rounded-xl p-1 mt-9" type="submit">جستجو <SearchIcon/></button>

       
          </div>
        
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className='relative  flex flex-col lg:flex-row-reverse justify-between '>
            <div className='inline flex flex-col ' dir="rtl">
              <label className='text-right mb-3 text-blue-950'>برند</label>
              <select name="choice"  className='border border-solid text-gray-400 border-slate-300 p-4 w-56 rounded-xl '>
              <option value="first">انتخاب برند</option>
                <option value="first">ایران خودرو</option>
                <option value="second">بی ام و</option>
                <option value="third">پورشه</option>
                <option value="third">تویوتا</option>
                <option value="third">سایپا</option>
              </select>
            </div>

            <div className='inline flex flex-col'>
              <label className='text-right mb-3 text-blue-950'>مدل</label>
              <select name="choice" dir="rtl" className='border border-solid text-gray-400 border-slate-300 p-4 w-56 rounded-xl '>
              <option value="first">انتخاب برند</option>
                <option value="first">ایران خودرو</option>
                <option value="second">بی ام و</option>
                <option value="third">پورشه</option>
                <option value="third">تویوتا</option>
                <option value="third">سایپا</option>
              </select>
            </div>
          
            <div className='inline flex flex-col'>
              <label className='text-right mb-3 text-blue-950'>قیمت</label>
              <input type="number" dir="rtl" name="filter-price-from" value="" placeholder="حداقل قیمت" className='border border-solid border-slate-300 p-3 w-[200px] rounded-xl '></input>
            </div>
          
            <div className='inline flex flex-col mt-9'>
              <input type="number" dir="rtl" name="filter-price-from" value="" placeholder="حداکثر قیمت" className='border border-solid  border-slate-300 p-3 w-[200px] rounded-xl '></input>
            </div>

          <button className="bg-amber-400 text-blue-950 text-[18px]  lg:w-[150px] h-13 hover:text-white hover:bg-blue-950 hover:transition duration-500 hover:ease-in-out hover:delay-300 rounded-xl p-1 mt-9 " type="submit">جستجو <SearchIcon/></button>

       
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='relative flex flex-col lg:flex-row-reverse justify-between '>
            <div className='inline flex flex-col ' dir="rtl">
              <label className='text-right mb-3 text-blue-950'>برند</label>
              <select name="choice"  className='border border-solid text-gray-400 border-slate-300 p-4 w-56 rounded-xl '>
              <option value="first">انتخاب برند</option>
                <option value="first">ایران خودرو</option>
                <option value="second">بی ام و</option>
                <option value="third">پورشه</option>
                <option value="third">تویوتا</option>
                <option value="third">سایپا</option>
              </select>
            </div>

            <div className='inline flex flex-col'>
              <label className='text-right mb-3 text-blue-950'>مدل</label>
              <select name="choice" dir="rtl" className='border border-solid text-gray-400 border-slate-300 p-4 w-56 rounded-xl '>
              <option value="first">انتخاب برند</option>
                <option value="first">ایران خودرو</option>
                <option value="second">بی ام و</option>
                <option value="third">پورشه</option>
                <option value="third">تویوتا</option>
                <option value="third">سایپا</option>
              </select>
            </div>
          
            <div className='inline flex flex-col'>
              <label className='text-right mb-3 text-blue-950'>قیمت</label>
              <input type="number" dir="rtl" name="filter-price-from" value="" placeholder="حداقل قیمت" className='border border-solid border-slate-300 p-3 w-[200px] rounded-xl'></input>
            </div>
          
            <div className='inline flex flex-col mt-9'>
              <input type="number" dir="rtl" name="filter-price-from" value="" placeholder="حداکثر قیمت" className='border border-solid  border-slate-300 p-3 w-[200px] rounded-xl '></input>
            </div>

          <button className="bg-amber-400 text-blue-950 text-[18px]  lg:w-[150px] h-13 hover:text-white hover:bg-blue-950 hover:transition duration-500 hover:ease-in-out hover:delay-300 p-1 mt-9 rounded-xl" type="submit">جستجو <SearchIcon/></button>

       
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
    </ThemeProvider>
  );
}

