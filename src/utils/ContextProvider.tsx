import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [bookmarks, setBookmarks] = useState<any[]>([])
	const dataValues = {bookmarks, setBookmarks};
	return <Context.Provider value={dataValues}>{children}</Context.Provider>;
};
export default ContextProvider;
