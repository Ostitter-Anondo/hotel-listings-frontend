import { useLoaderData } from "react-router";
import MiniCard from "./components/MiniCard";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import useMainContext from "../../utils/hooks/useMainContext";

const Home = () => {
  const {bookmarks} = useMainContext();
	const [data, setData] = useState<any[]>(useLoaderData());
	const formSubmitHandle = (e: any) => {
		fetch(
			`${import.meta.env.VITE_dbApi}/filteredhotels/?city=${
				e.target.city.value == "" ? "all" : e.target.city.value
			}&ratings=${e.target.ratings.value}&amenities=${e.target.amenities.value}`
		)
			.then((data) => data.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.error(error));
	};

	const resetFilter = () => {
		fetch(`${import.meta.env.VITE_dbApi}/hotels/`)
			.then((data) => data.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.error(error));
	};

  console.log(localStorage.getItem('bookmarks')?true:false)
  console.log(bookmarks)
	return (
		<>
			<div className="p-12">
				<div className="bg-gradient-to-r from-base-300/50 p-3 pr-20 rounded w-fit">
          <h3 className="font-extrabold text-lg">Filters</h3>
        </div>
				<div className="flex flex-wrap items-end p-3 gap-6">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							formSubmitHandle(e);
						}}
						className="flex items-end gap-3"
					>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">By City</legend>
							<input
								type="text"
								name="city"
								placeholder="city"
								className="input input-secondary"
							/>
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">By Amenities</legend>
							<select name="amenities" className="select select-primary">
								<option value="all">Pool or Breakfast</option>
								<option value="both">Pool & Breakfast</option>
								<option value="pool">Has Pool</option>
								<option value="breakfast">Has Breakfast</option>
							</select>
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">By Rating</legend>
							<select name="ratings" className="select border-yellow-400">
								<option value="1">All</option>
								<option value="2">Two Stars and Up</option>
								<option value="3">Three Stars and Up</option>
								<option value="4">Four Stars and Up</option>
							</select>
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend"></legend>
							<button type="submit" className="btn btn-success">
								<FaFilter />
							</button>
						</fieldset>
					</form>
					<fieldset className="fieldset">
						<legend className="fieldset-legend"></legend>
						<button onClick={()=>{resetFilter()}} className="btn btn-sm btn-outline btn-warning" disabled={data.length==30?true:false}>
							Reset Filter
						</button>
					</fieldset>
				</div>
			</div>
			<div className="overflow-x-auto w-11/12 mx-auto mb-12">
				<table className="table table-zebra">
					{/* head */}
					<thead className="bg-base-300">
						<tr>
							<th></th>
							<th>Name</th>
							<th>Location</th>
							<th>Description</th>
							<th>Amenities</th>
							<th>Ratings</th>
							<th>Price/Night</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data?.map(
							(
								item: {
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
								},
								index: number
							) => (
								<MiniCard data={item} index={index} key={`hotelKey${item.pk}`} />
							)
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default Home;
