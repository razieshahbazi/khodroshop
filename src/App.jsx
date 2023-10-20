import {Header} from './Header/Header';
import { Model } from './Model/Model';
import styled from 'styled-components';
import { Adv } from './Advertise/Adv';
import { Why } from './why/Why';
import {Video} from './video/Video'
import {Footer} from './footer/Footer'
import './App.css';
import { Article } from './articles/Article';
import {Slider} from './slider/Slider';
import Sidebar from './Header/Sidebar';
import GlobalFonts from './fonts/fonts';


const Style = styled.div`
@media (max-width: 2000px) {
   .header{
    height:1000px;
   }
  .model{
    position: absolute;
    left: 0; right: 0; bottom: -380px;
    background-color:#f3f3f3;}
  
  .adv{
    position: absolute;
    left: 0; right: 0; bottom: -1400px;
    background-color:white;
    margin-top:0px;
  }
  .why{
    position:absolute;
    bottom:-1800px;
    
  }
  .video{
    position:absolute;
    bottom:-2500px;
  }
  .slider{
    position:absolute;
    bottom:-3100px;
  }
  .article{
    position:absolute;
    bottom:-3900px;
  }
  .foot{
    position:absolute;
    bottom:-4400px;
  }


}

  @media (max-width: 400px) {

    .model{
      position: absolute;
      left: 0; right: 0; bottom: -1500px;
      }
    
    .adv{
      position: absolute;
      left: 0; right: 0; bottom: -5000px;
      background-color:white;
      margin-top:0px;
    }
    .why{
      position: absolute;
      left: 0; right: 0; bottom: -5500px;
    }
    .video{
      position: absolute;
      left: 0; right: 0; bottom: -6300px;
    }
    .slider{
      position: absolute;
      left: 0; right: 0; bottom: -6900px;
    }
    .article{
      position: absolute;
      left: 0; right: 0; bottom: -8500px;
    }
    .foot{
      position: absolute;
      left: 0; right: 0; bottom: -9400px;
    }
   }



`


function App() {
                                                                                                                           

  return (
    <Style>
         <GlobalFonts />
         <div className='header bg-hero-pattern'>
         <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
         <Header/>
         </div>
         <div className='model'><Model/></div>
         <div className='adv'><Adv/></div>
         <div className='why w-full'><Why/></div>
         <div className='video w-full'><Video/></div>
         <div className='slider w-full'><Slider/></div>
         <div className='article w-full'><Article/></div>
         <div className='foot w-full'><Footer/></div>

    </Style>  
   
      
    
  )
}

export default App;



