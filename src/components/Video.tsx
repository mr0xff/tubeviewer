import type { Video } from "@/lib/types";

export default function Video(props: Video){

  return(
    <div className="bg-white ring ring-gray-300 flex flex-col h-full hover:cursor-pointer rounded-xl overflow-hidden hover:shadow-md transition duration-500 hover:ring-orange-200">
      <img src={props.thumbnail} alt={props.title} />
      <div className="px-3 py-2 flex flex-col justify-between h-full">
        <h2 className="text-lg font-medium">{props.title}</h2>
        <p className="text-sm text-gray-500">{(new Date(props.publishedAt).toLocaleDateString("pt-PT", { dateStyle: "long"}))}</p>
      </div>
    </div>
  );
}