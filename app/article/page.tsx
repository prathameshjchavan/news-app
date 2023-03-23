import { notFound } from "next/navigation";

type Props = {
	searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
	return <div>Article</div>;
}

export default ArticlePage;
