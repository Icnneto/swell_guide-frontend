import { animate, scroll, hover } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";

hover("#mc-embedded-subscribe", (element) => {
    animate(element, { scale: 1.045})
 
    return () => animate(element, { scale: 1 })
});

