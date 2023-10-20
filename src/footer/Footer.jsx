import car from '../img/car.png'

export const Footer = () => {
  return (
    <div className='h-[740px] lg:h-96 bg-blue-950'>
    <div className='flex flex-col lg:flex-row justify-between text-white border-b border-solid  border-slate-300'>

        <div className='inline mt-10'>
            <ul className='inline flex  lg:flex-row justify-around ml-9'>
                <li className='lg:mr-10'>درباره ما</li>
                <li className='lg:mr-10'>فروشگاه</li>
                <li className='lg:mr-10'>وبلاگ</li>
                <li className='lg:mr-10'>آگهی ها</li>
                <li className='lg:mr-10'>جستجو</li>
                <li className='lg:mr-10'>خانه</li>
               
            </ul>
        </div>
        <div className='inline mt-10 flex flex-row mr-10'>
            <div className='inline mr-6'><h1 className='text-3xl font-bold'>وویچر</h1></div>
            <div className='inline bg-amber-500 rounded-full p-2 mb-5'><img src={car} alt="car" className='w-8 h-8' /></div>
        </div>
    </div> 
    
    <div className='mt-16 text-white flex justify-around flex-col lg:flex-row text-right text-sm leading-9 pr-10'>
        <div>
            <h3 className='md:mb-5'>ارتباط با ما</h3>
            <input type="email" placeholder='ایمیل خود را وارد کنید' className='w-48 h-10 rounded text-right' />
            <p className='text-gray-400 mt-5'>آخرین به روز رسانی ها و پیشنهادات را دریافت کنید.</p>
        </div>
        <div>
            <h3 className='md:mb-5'>ساعات کاری</h3>
            <p className='text-gray-400'>شنبه تا چهارشنبه : 09:00 تا 18:00  
                <br />
پنجشنبه: 09:00 تا12:00   
                <br />  
            جمعه: تعطیل</p>
        </div>
        <div>
            <h3 className='md:mb-5'>تماس با ما</h3>
            <h2 className='text-xl font-bold'>09121234567</h2>
            <p className='text-gray-400'>monem@voiture.com</p>
        </div>
        <div>
            <h3 className='md:mb-5'>آدرس ما</h3>
            <p className='text-gray-400'>استان مرکزی – شهرستان تفرش
                <br /> –
            خیابان امام خمینی – ساختمان آرمان</p>
        </div>



    </div>
    </div>
  )
}
