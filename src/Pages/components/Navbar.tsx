import { Link, NavLink } from "react-router";
import hotel from "../../assets/hotel.png";

const Navbar = () => {
	const links = (
		<>
			<li>
				<NavLink to={"/"} end>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to={"/bookmarks"} end>
					My Bookmarks
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar backdrop-blur-sm bg-base-300/30 shadow-sm">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl flex gap-2 w-fit" to="/">
					<img src={hotel} alt="hotel" className="size-8" /><span>HotelWala</span>
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content backdrop-blur-xs bg-base-300/50 shadow-sm rounded-box z-50 mt-3 -ml-40 w-52 p-2"
					>
						{links}
					</ul>
				</div>
				<input
					type="checkbox"
					value="dracula"
					className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
				/>
				<ul className="menu menu-horizontal px-1 hidden lg:inline-flex">
					{links}
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
