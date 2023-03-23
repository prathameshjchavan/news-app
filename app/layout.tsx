import Header from "./Header";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<Header />
				<div>{children}</div>
			</body>
		</html>
	);
}
