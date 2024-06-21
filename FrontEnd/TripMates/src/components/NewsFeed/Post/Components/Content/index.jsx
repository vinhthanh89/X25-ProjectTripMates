/* eslint-disable react/prop-types */
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { MdPlace } from "react-icons/md";

const Content = ({post}) => {

  const content = [
    {
      text: "The villages of Vietnam are renowned for their idyllic settings, often nestled amidst lush green rice paddies, winding rivers, and majestic mountains. Each village has its unique charm and offers a glimpse into the traditional way of life that has been preserved for generations. One such village is Duong Lam, located near Hanoi. Known as the 'ancient village,' Duong Lam boasts centuries-old houses made of laterite, a type of red clay, and traditional Vietnamese architecture. Walking through its narrow, winding lanes, visitors are transported back in time, experiencing the rustic charm of a bygone era. The village is home to ancient pagodas, communal houses, and ancestral temples, reflecting the spiritual and cultural heritage of Vietnam. Visitors can also explore the local markets, where artisans showcase their traditional crafts and culinary delights. Whether you're strolling along the cobblestone streets or enjoying a leisurely bike ride through the countryside, Duong Lam offers a peaceful retreat from the hustle and bustle of modern life, inviting you to immerse yourself in the timeless beauty of rural Vietnam. As you wander through the village, you'll encounter friendly locals going about their daily routines, tending to their crops or engaging in age-old traditions passed down through generations. Every corner of Duong Lam tells a story, from the ancient banyan trees that shade the village square to the quaint teahouses where villagers gather to share tales of times gone by. The village's rich history is palpable at every turn, making it a must-visit destination for anyone eager to explore Vietnam's cultural heritage. From sunrise to sunset, Duong Lam captivates the senses with its serene atmosphere and breathtaking scenery, offering a glimpse into a way of life that has remained unchanged for centuries. Whether you're a history enthusiast, a nature lover, or simply seeking a tranquil escape from the chaos of modernity, Duong Lam promises an unforgettable journey through Vietnam's past and present.",
    },
  ];

  const thumbnail =
    "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-4">
        {/* <span className="flex items-center gap-2 font-bold">
          <MdPlace />
          <img
            src="../../../../../../public/vietnam.png"
            alt=""
            className="w-[2rem] h-[2rem]"
          />
          Vietnam
        </span> */}
        {/* <h1 className="text-4xl font-bold">
          Top 10 places you should visit in Vietnam and make sure to take photos
          <div className="text-base">
            <span className="flex items-center gap-2 font-bold">
              <MdPlace />
              Vietnam
            </span>
          </div>
        </h1> */}
        {/* <div className="flex flex-col items-center gap-2 p-[1.5rem]">
          <img src={thumbnail} alt="Thumbnail" className="rounded" />
          <span className="text-gray-400">A picture taken in the Village</span>
        </div>
        {content.map((item, index) => (
          <div key={index} className="gap-2 p-[1.5rem]">
            <p className="text-lg">{item.text}</p>
          </div>
        ))} */}
        <FroalaEditorView model={post.content} />
      </div>
    </div>
  );
};

export default Content;
