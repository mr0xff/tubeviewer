import type { Video } from "@/lib/types";

export default function Video(props: Video){

  return(
    <div className="bg-white ring flex flex-col h-full">
      <img src={props.thumbnail} alt={props.title} />
      <div className="px-3 py-2 flex flex-col justify-between h-full">
        <h2 className="text-xl font-medium">{props.title}</h2>
        <p className="text-sm">{(new Date(props.publishedAt).toLocaleDateString("pt-PT", { dateStyle: "long"}))}</p>
      </div>
    </div>
  );
}