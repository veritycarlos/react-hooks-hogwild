import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<Filter />
			</div>
			<div className="sixteen wide column centered">
				<HogList hogs={hogs}/>
			</div>
		</div>
	);
}

export default App;
