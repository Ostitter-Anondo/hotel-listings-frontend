import { FaBookmark, FaStar, FaStarHalf } from "react-icons/fa";
import useMainContext from "../../../utils/hooks/useMainContext";

const MiniCard = ({
	data,
	index,
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
	index: number;
}) => {
	const { bookmarks, setBookmarks } = useMainContext();

	const addBookmark = () => {
		if (
			!bookmarks.some(
				(elem: {
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
				}) => elem.pk === data.pk
			)
		) {
			setBookmarks((bookmarks: any[]) => {
				const updated = [...bookmarks, data];
				localStorage.setItem("bookmarks", JSON.stringify(updated));
        return updated
			});
		}
	};

	return (
		<tr>
			<th>{index + 1}</th>
			<td className="font-bold text-lg">
				<div className="indicator">
					<span
						className={
							`indicator-item badge badge-primary ` +
							`${
								bookmarks.some(
									(elem: {
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
									}) => elem.pk === data.pk
								)
									? ""
									: "hidden"
							}`
						}
					>
						<FaBookmark />
					</span>
					<div>{data.fields.title}</div>
				</div>
			</td>
			<td>{data.fields.city}</td>
			<td>{data.fields.decription}</td>
			<td>
				{data.fields.pool ? (
					<div className="badge badge-sm badge-info">Pool</div>
				) : (
					<></>
				)}
				{data.fields.breakfast ? (
					<div className="badge badge-sm badge-success">Breakfast</div>
				) : (
					<></>
				)}
				{!data.fields.breakfast && !data.fields.pool ? (
					<div className="badge h-fit text-center badge-dash badge-xs badge-error">
						No Amenities
					</div>
				) : (
					<></>
				)}
			</td>
			<td className="text-yellow-500">
				<div className="flex items-center gap-3">
					<div>{data.fields.rating}</div>
					<div className="flex">
						{new Array(Math.floor(data.fields.rating)).fill("").map(() => (
							<FaStar />
						))}
						{data.fields.rating % 1 != 0 ? <FaStarHalf /> : <></>}
					</div>
				</div>
			</td>
			<td>
				<div className="badge badge-soft badge-xl badge-warning">
					${data.fields.price}
				</div>
			</td>
			<td>
				<button
					onClick={addBookmark}
					className="btn btn-secondary rounded-full"
					disabled={bookmarks.some(
						(elem: {
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
						}) => elem.pk === data.pk
					)}
				>
					<FaBookmark /> Bookmark
				</button>
			</td>
		</tr>
	);
};
export default MiniCard;
