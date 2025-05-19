import useMainContext from "../../utils/hooks/useMainContext";
import BookmarkCard from "./components/BookmarkCard";

const Bookmarks = () => {
  const {bookmarks} = useMainContext();
  return (
    <>
      <div className="w-11/12 grid grid-cols-3 mx-auto gap-6 my-12">
        {bookmarks.map(
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
								}
							) => (
								<BookmarkCard data={item} key={`bookmarkKey${item.pk}`} />
							)
						)}
      </div>
    </>
  )
}
export default Bookmarks