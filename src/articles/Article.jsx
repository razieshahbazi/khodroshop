import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';



export const Article = () => {
  return (
    <div>
        <h1 className='text-center font-bold text-indigo-950 text-4xl mb-7'>مقاله های اخیر</h1>
    <div className="flex flex-col lg:flex-row justify-between text-right ">
        <div className="p-3 rounded-lg inline m-9 lg:m-6 lg:ml-8 border border-solid  border-slate-300">
            <img className="rounded-lg" src="https://monemdesign.com/voiture/wp-content/uploads/elementor/thumbs/ezgif-4-86322666ee-plr7099b7pi8sjowgc7db5r2uput02i9uggix6fcjo.webp" alt="car" />
            <div className='text-gray-500 flex justify-around mt-5 text-[12px]'>
               <i>13 دی 1400</i><EventNoteRoundedIcon/>
               <i>0 دیدگاه</i><ChatRoundedIcon/>
               <i>منعم دیزاین</i><AccountCircleRoundedIcon/>
            </div>
            <a href="#"><h1 className="m-9 font-bold text-indigo-950">سوخت هیبریدی</h1></a>
            <a href="#"><h3 className="m-9 relative">بیشتر بخوانید</h3><i className="absolute bottom-16 right-[1230px] text-white text-2xl font-bold bg-yellow-500 px-3 py-1 rounded-full">+</i></a>
        </div>

        <div className="p-3 rounded-lg inline m-9 lg:m-6 border border-solid  border-slate-300">
            <img className="rounded-lg" src="https://monemdesign.com/voiture/wp-content/uploads/elementor/thumbs/listing20-pmwmn4fy3t7fil3bsgwbexrkawz8wwa8f61takkyf8.webp" alt="car" />
            <div  className='text-gray-500 flex justify-around mt-5 text-[12px]'>
               <i>13 دی 1400</i><EventNoteRoundedIcon/>
               <i>0 دیدگاه</i><ChatRoundedIcon/>
               <i>منعم دیزاین</i><AccountCircleRoundedIcon/>
            </div>
            <a href="#"><h1 className="m-9 font-bold text-indigo-950">گیربکس دوکلاچه</h1></a>
            <a href="#"><h3 className="m-9 relative">بیشتر بخوانید</h3><i className="absolute bottom-16 right-[700px] text-white text-2xl font-bold bg-yellow-500 px-3 py-1 rounded-full">+</i></a>
        </div>

        <div className="p-3 rounded-lg inline m-9 lg:m-6 border border-solid  border-slate-300">
            <img className="rounded-lg" src="https://monemdesign.com/voiture/wp-content/uploads/elementor/thumbs/listing3-pm3hn2xt2t2vwngx9r5wpk8scz4ty9nmcik3m9pbgk.webp" alt="" />
            <div  className='text-gray-500 flex justify-around mt-5 text-right text-[12px]'>
               <i>13 دی 1400</i><EventNoteRoundedIcon/>
               <i>0 دیدگاه</i><ChatRoundedIcon/>
               <i>منعم دیزاین</i><AccountCircleRoundedIcon/>
            </div>
            <a href="#"><h1 className="m-9 font-bold text-indigo-950">افزایش سرعت خودرو</h1></a>
            <a href="#"><h3 className="m-9 relative">بیشتر بخوانید</h3><i className="absolute bottom-16 right-[170px] text-white text-2xl font-bold bg-yellow-500 px-3 py-1 rounded-full">+</i></a>
        </div>
    </div>
    </div>
  )
}


