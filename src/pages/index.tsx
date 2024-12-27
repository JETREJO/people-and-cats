import 'react-loading-skeleton/dist/skeleton.css'
import useFetchCatsFacts from "./api/catsFacts";
import useFetchRandomPeople from "./api/randomPeople";
import SkeletonCard from '@/components/skeletonCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Home() {

  const { ref, inView } = useInView();

  const cats = useFetchCatsFacts();
  const people = useFetchRandomPeople();

  useEffect(() => {
    if (inView) {
      cats.fetchNextPage();
    }
  }, [inView]);

  if (cats.isError) return <p>Error: {cats.error.message}</p>;
  if (people.isError) return <p>Error: {people.error.message}</p>;

  people && people.data && console.log("PEOPLE: ", people.data);
  cats && cats.data && console.log("CATS: ", cats.data.pages[0].data);


  return (
    <div className="min-h-screen flex justify-center bg-slate-100 pt-5">
      <ul className="w-full max-w-lg 0">
        {
          people.data && cats.data
            ? people.data.results.map((data:any, index:number) => (
                <li key={`id${data.name.last}_${data.name.first}`}
                  className="bg-white mb-6 border shadow-lg shadow-slate-400 rounded-xl
                  max-w-lg items-center overflow-hidden ms-5 me-5 p-5">
                  <div className="flex items-center mb-3">
                    <img src={data.picture.medium} alt="People face" className="me-3
                    rounded-full" />
                    <h2 className="font-semibold">{data.name.first} {data.name.last}</h2>
                  </div>
                  <p>{ cats.data.pages[0].data[index].fact }</p>
                </li>
              ))
            : <SkeletonCard/>
        }
        { cats.data?.pages[0].next_page_url &&
          <div ref={ref}>
            <SkeletonCard/>
          </div>
        }
      </ul>
    </div>
  );
}
