import play from '../img/play.png';
import styled from 'styled-components';



const Wrapper = styled.div`
animation: bounce 1s infinite;

animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(1);
    opacity: 0;
  }
}
   
` 


export const Video = () => {


 

  return (
  
    <div className='bg-footer-texture  h-[37rem] text-white w-full'>
        <div className='text-right  p-20'>
            <div>
                <h2 className='text-xs md:text-5xl font-bold leading-8 md:mt-24'>ما پیدا کردن خودرو  
                </h2>
                <h2 className='text-xs md:text-5xl font-bold leading-8 mt-3'>
                    مناسب را ساده می کنیم   
                </h2>
            </div>
            <div>
                <p className='leading-8 md:mt-9 text-[10px] md:text-[15px] text-gray-300'>
							در وویچر چیزی که برای ما مهم است این است که تجربه خرید و جستجوی خودروی
                            <br />
                             خود را تا حد امکان ساده کنیم، بنابراین میتوانید خودروی مناسب را به سرعت پیدا
                             <br />
                              کنید					</p>
            </div>
        </div>
        <Wrapper>
        <div className='bg-white max-[400px]:relative max-[400px]:top-4  w-16 h-16 rounded-full relative bottom-44 left-16'>
        <a href="https://www.aparat.com/v/qwjFC">
                    <span>
                        <img src={play} alt="playvideo" className='w-7 absolute top-4 left-5'/>
                        
                    </span>
                </a>
        </div>
        </Wrapper>

        <div>


        <div>

    </div>



  
      
    </div>
    </div>
    
  )
}


