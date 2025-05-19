import {
	FaCheck,
	FaStar,
	FaStarHalf,
	FaTrashCan,
	FaXmark,
} from "react-icons/fa6";
import useMainContext from "../../../utils/hooks/useMainContext";

const BookmarkCard = ({
	data,
}: {
	data: {
		model: string;
		pk: number;
		fields: {
			breakfast: boolean;
			city: string;
			decription: string;
			pool: boolean;
			price: number;
			rating: number;
			title: string;
		};
	};
}) => {
	const { setBookmarks } = useMainContext();
	const removeBookmark = () => {
		setBookmarks((bookmarks: any[]) => {
			const updated = bookmarks.filter(
				(e: {
					model: string;
					pk: number;
					fields: {
						breakfast: boolean;
						city: string;
						decription: string;
						pool: boolean;
						price: number;
						rating: number;
						title: string;
					};
				}) => e.pk != data.pk
			);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      return updated
		});
	};

	return (
		<div className="card bg-base-200 shadow-sm h-[28em] hover:scale-105 hover:z-10 hover:drop-shadow-xl hover:drop-shadow-primary transition-all">
			<div className="card-body justify-between">
				<div className="flex flex-col gap-3">
					<span className="badge badge-xs badge-success">
						{data.fields.city}
					</span>
					<div className="flex justify-between items-center">
						<h3 className="text-2xl font-bold">{data.fields.title}</h3>
						<span className="badge badge-soft badge-md badge-warning h-fit text-center">
							${data.fields.price}/🌙
						</span>
					</div>
				</div>
				<ul className="mt-6 flex flex-col gap-2 text-xs">
					<li className="text-lg">{data.fields.decription}</li>
					<li className="flex items-center gap-2">
						<FaCheck
							className={data.fields.pool ? "text-green-500 text-lg" : "hidden"}
						/>
						<FaXmark
							className={data.fields.pool ? "hidden" : "text-red-500 text-lg"}
						/>
						<span>Pool Facilities</span>
					</li>
					<li className="flex items-center gap-2">
						<FaCheck
							className={
								data.fields.breakfast ? "text-green-500 text-lg" : "hidden"
							}
						/>
						<FaXmark
							className={
								data.fields.breakfast ? "hidden" : "text-red-500 text-lg"
							}
						/>
						<span>Complimentary Breakfast</span>
					</li>
					<li className="text-yellow-500 text-xl">
						<div className="flex items-center gap-3">
							<div>{data.fields.rating}</div>
							<div className="flex">
								{new Array(Math.floor(data.fields.rating)).fill("").map(() => (
									<FaStar />
								))}
								{data.fields.rating % 1 != 0 ? <FaStarHalf /> : <></>}
							</div>
						</div>
					</li>
				</ul>
				<div className="mt-6">
					<button onClick={removeBookmark} className="btn btn-error btn-block">
						<FaTrashCan />
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};
export default BookmarkCard;
