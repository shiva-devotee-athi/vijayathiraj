import { TabsBtn, TabsContent, TabsProvider } from "@/components/tabs/Tabs";
import education_img_1 from "@/assets/images/education/edu_image_1.jpg";
import education_img_2 from "@/assets/images/education/edu_image_2.jpg";
import education_img_3 from "@/assets/images/education/edu_image_3.jpg";

const educationDetails = [
  {
    date: "2020-2022",
    title: "Master Degree in Mathematics",
    shortTitle: "MSC (MATHEMATICS)",
    tinyTitle: "MSC (MATHS)",
    imgSrc: education_img_3,
    position: "Ayya Nadar Janaki Ammal College",
    description:
      "My M.Sc. journey at Ayya Nadar Janaki Ammal College in Sivakasi was an enriching chapter of my life. The institution not only honed my mathematical skills but also became the canvas for countless memories. From late-night study sessions to joyous celebrations, I experienced a spectrum of emotions. The college, with its dedicated faculty and supportive peers, fostered an environment for both academic growth and personal development. It's where I cultivated lasting friendships, faced challenges, and celebrated triumphs, creating a tapestry of happy and sometimes bittersweet moments that I'll cherish forever. and Still i have four Arrears..",
  },
  {
    date: "2017-2020",
    title: "Bachelor's Degree in Mathematics",
    shortTitle: "BSC (MATHEMATICS)",
    tinyTitle: "BSC (MATHS)",
    imgSrc: education_img_2,
    position: "Arulmigu Kalasalingam College of Arts and Science",
    description:
      "My B.Sc. journey at Arulmigu Kalasalingam College of Arts & Science, Krishnankoil, began with uncertainty about my course choice. However, as time went on, I found clarity and realized my passion for mathematics. The college provided a nurturing environment that allowed me to discover and develop my skills. It was a transformative period, where I not only gained knowledge but also honed my abilities, setting the foundation for my academic and personal growth.",
  },
  {
    date: "2010-2017",
    title: "High school education (TN)",
    shortTitle: "Class XII",
    tinyTitle: "Class XII",
    imgSrc: education_img_1,
    position: "G S Hindu Higher Secondary School",
    description:
      "My school days were truly special, filled with cherished memories and valuable experiences. I had a wonderful group of friends, and we shared countless fun and mischievous moments together. I was dedicated to my studies, always respectful towards my teachers, and valued good behavior. Though I received a few silly punishments from my teachers, they only added to the charm and humor of my school life. The school provided a nurturing environment that encouraged us to excel academically and socially. Those years were a time of laughter, learning, and personal development, laying a strong foundation for my future endeavors.",
  },
];

function Educationpage() {
  // const [tags,setTags]= useState<string[]>([])
  return (
    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-md pt-2 p-0 md:p-4 relative">
      <TabsProvider defaultValue={educationDetails[0].title}>
        <div className="flex justify-center my-2">
          <div className="flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 text-black rounded-md border">
            {educationDetails.map((item, index) => (
              <TabsBtn key={index} value={item.title}>
                <span className="relative z-[2] uppercase hidden sm:block">
                  {item.shortTitle}
                </span>
                <span className="relative z-[2] uppercase block sm:hidden">
                  {item.tinyTitle}
                </span>
              </TabsBtn>
            ))}
          </div>
        </div>

        {educationDetails.map((item, index) => (
          <TabsContent key={index} value={item.title} className="p-0">
            <div className="bg-white dark:bg-[#1d1e22] px-0 py-4 md:px-6 md:py-6 rounded-lg shadow-lg flex flex-col item-start md:items-end md:flex-row">
              <img
                className="object-contain w-full rounded-t-lg h-48 md:h-auto md:w-48 lg:w-72 md:rounded-none md:rounded-s-lg"
                src={item.imgSrc}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 pb-0 leading-normal">
                <span className="block text-amber-600 font-semibold">
                  {item.date}
                </span>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
                  {item.title}
                </h2>
                <span className="block text-gray-600 dark:text-gray-400 italic">
                  {item.position}
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </TabsProvider>
      {/* <TagsInput tags={tags} setTags={setTags} editTag={true}/>
      <div className='mt-4'>
        <p>Current Tags:</p>
        <div className='flex gap-2 mt-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded'
            >
              {tag}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Educationpage;
