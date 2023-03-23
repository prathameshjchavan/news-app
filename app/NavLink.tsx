import Link from "next/link";

type Props = {
	category: string;
	isActive: boolean;
};

function NavLink({ category }: Props) {
	return (
		<Link href={`/news/${category}`} className="navLink">
			{category}
		</Link>
	);
}

export default NavLink;
