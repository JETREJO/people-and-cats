import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <li className="bg-white mb-6 border shadow-lg shadow-slate-400 rounded-xl
                    max-w-lg overflow-hidden ms-5 me-5 p-5">
      <div className="flex items-center mb-3">
        <div className="me-3">
          <Skeleton circle={true} height={56} width={56} />
        </div>
        <div className="w-6/12">
          <Skeleton height={20} width={"100%"} />
        </div>
      </div>
      <Skeleton height={16} count={2} />
    </li>
  );
};

export default SkeletonCard;