import { tutors } from "@/objects/tutors";
import Carousel from "./components/HomePage/carousel";
import SearchBar from "./components/searchBar";
import heroBg from '@/assets/hero image.png'
import TutorCard from "./components/HomePage/tutorCard";
export default function Home() {
  const carousels = [
    {
      'title': 'Popular Courses',
      'type': ['professional Courses', 'test'],
      'checkbox': ['Free Courses', 'Paid Courses'],
      'sort': ['Low To high', 'high To low']
    },
    {
      'title': 'Certifications Courses',
      'type': [],
      'checkbox': ['Free Certifications', 'Paid Certifications'],
      'sort': ['Best Seller']
    },
  ]
  return (
    <main className="min-h-screen pt-10">
      <div className=" flex relative flex-col">
        <img src={heroBg.src} className="pt-[5em]" />
        <div className="absolute flex flex-col left-0 right-0 items-center justify-center ">
          <SearchBar />
          <div className="flex flex-col max-w-[35em] m-auto pt-10">
            <p className="font-bold text-eupheus-blue  text-[1.7em] ">Explore what professionals like you are learning the most</p>
            <div className="self-center  ml-[10em] mt-[1em] shadow-xl">
              <button className='font-bold px-8 py-4 text-white rounded-xl bg-eupheus-blue'>Visit Courses</button></div>

          </div>
        </div>


      </div>
      <div>
        {
          carousels.map((e, i) => (<Carousel key={i} title={e.title} type={e.type} checkbox={e.checkbox} sort={e.sort} />))
        }
      </div>
      <div className="p-10 max-w-[1440px] m-auto">
        <p className="text-[2em] font-[600] text-eupheus-blue">Instructed Courses</p>
        <div className="flex justify-between ">
          <p className="max-w-[60vw] font-[600] text-[18px] mt-3 text-gray-400">Want someone to instruct you? No worries, here we introduce our CourseMania’s online Tutors  to assist & guide you in your professional  Path</p>
          <button className="font-bold px-8 py-4 text-white rounded-xl bg-eupheus-blue">Find A Tutor</button>
        </div>
        <div className="mt-10">
          <p className="text-[1.2em] font-bold text-eupheus-blue">Meet Our Popular Tutors</p>
          <div className="flex justify-between mt-10">
            {
              tutors.map((e, i) => (<TutorCard key={i} tutor={e} />))
            }
          </div>
        </div>

      </div>
    </main>
  );
}
