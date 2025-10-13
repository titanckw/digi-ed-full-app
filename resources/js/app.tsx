import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const pages = (import.meta as any).glob("./pages/page.tsx", {
            eager: true,
        });
        return pages[`./pages/page.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
