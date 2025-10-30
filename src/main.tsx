import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// proximity visual/interaction (radial tint + near/far state)
import startProximity from "./hooks/use-proximity";

createRoot(document.getElementById("root")!).render(<App />);

// start the proximity detector (returns a stop function if needed)
try {
	// reduced threshold so the overlay only becomes 'near' when the cursor is closer
	startProximity({ threshold: 140 });
} catch (e) {
	// safe guard for SSR or environments where window isn't available
	// no-op on error
}
