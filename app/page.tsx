import { categories } from "@/constants";
import { fetchNews } from "@/lib/fetchNews";

const Homepage = async () => {
	// fetch the news data
	const data: NewsResponse = await fetchNews(categories.join(","));

	return <div>Homepage</div>;
};

export default Homepage;
