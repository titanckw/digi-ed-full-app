import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const pages = (import.meta as any).glob("./Pages/**/*.tsx", {
            eager: true,
        });
        return pages[`./Pages/${name}.tsx`] as Promise<any>;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
