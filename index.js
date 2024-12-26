import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from ".app";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<app/>
	</StrictMode
);