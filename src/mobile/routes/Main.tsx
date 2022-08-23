import Header from "@mobile/component/Header";
import "@mobile/css/contents-container.scoped.scss";

function MobileMain() {
	return (
		<div>
			<Header />
			<div id="contents-container">
				<h1>MobileMain Page</h1>
			</div>
		</div>
	);
}

export default MobileMain;
