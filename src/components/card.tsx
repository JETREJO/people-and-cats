import { Cats } from "@/pages/api/getCatsData";
import { People, Result } from "@/pages/api/getPeopleData";

interface CardProps {
  peopleData: Result;
  cats: any;
  indexPage: number;
  indexCard: number
}

const Card: React.FC<CardProps> = ({peopleData, cats, indexPage, indexCard}) => {

  // console.log(indexPage);

  return (
    <li key={`id${peopleData.name.last}_${peopleData.name.first}`}
      className="bg-white mb-6 border shadow-lg shadow-slate-400 rounded-xl
                  max-w-lg items-center overflow-hidden ms-5 me-5 p-5">
      <div className="flex items-center mb-3">
        <img src={peopleData.picture.medium} alt="People face" className="me-3 rounded-full" />
        <h2 className="font-semibold">{peopleData.name.first} {peopleData.name.last}</h2>
      </div>
      {
        cats.data.pages[indexPage] && cats.data.pages[indexPage].data[indexCard] &&
        <p>{cats.data.pages[indexPage].data[indexCard].fact}</p>
      }
    </li>
  );
}

export default Card;