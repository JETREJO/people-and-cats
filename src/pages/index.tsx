import 'react-loading-skeleton/dist/skeleton.css'
import useFetchCatsFacts from "./api/catsFacts";
import useFetchRandomPeople from "./api/randomPeople";
import SkeletonCard from '@/components/skeletonCard';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Card from '@/components/card';

export default function Home() {

  const { ref, inView } = useInView();
  const [isError, setError] = useState<{error:Boolean, message:string}>( {error:false, message:""} );

  const cats = useFetchCatsFacts();
  const people = useFetchRandomPeople();

  useEffect(() => {
    if (inView) {
      cats.fetchNextPage();
      people.fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    if (cats.isError) { setError({error:true, message:cats.error.message}); }
    if (people.isError) { setError({error:true, message:people.error.message}); }
  }, [cats.isError, people.isError]);

  // if (cats.isError) return <p>Error con los gatos: {cats.error.message}</p>;
  // if (people.isError) return <p>Error con la gente: {people.error.message}</p>;

  return (
    <>
      <h1 className="text-center font-bold text-3xl pt-5 pb-5 sticky top-0
        bg-white border-2 border-b-black-300">
        Cats Facts 🐱
      </h1>
      <div className="min-h-screen flex justify-center bg-slate-100 pt-5">
        <ul className="w-full max-w-lg 0">
          {
            people.data && cats.data
              ? people.data.pages.map((page, indexPage:number) => (
                <>
                  {
                    page.results.map((data, index) => 
                        <Card key={`id${data.name.last}_${data.name.first}`}
                          peopleData={data}
                          cats={cats}
                          indexPage={indexPage}
                          indexCard={index} />
                    )
                  }
                  {
                    // Determine if its necessary to show Skeleton,
                    // show the skeleton if there are still pages to request
                    cats.data?.pages[indexPage] && cats.data?.pages[indexPage].next_page_url
                    ? cats.data?.pages[indexPage + 1]
                      ? <></>
                      : <div key={"sk"+indexPage+1} ref={ref}> <SkeletonCard/> </div>
                    : <></>
                  }
                </>
              )
            )
            : !isError.error && (cats.isLoading || people.isLoading) &&
              <SkeletonCard key={"skltn"+people.data?.pages.length} />
          }
          {
            isError.error &&
              <h1>An error has ocurred: {isError.message}</h1>  
          }
        </ul>
      </div>
    </>
  );
}
