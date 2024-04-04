import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      var io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let elem = entry.target;

            if (elem.classList.contains("sub-item")) {
              document.querySelectorAll(".transition").forEach((el) => {
                el.style.transform = "translateX(0px)";
                el.style.opacity = 1;
              });
            }

            if (entry.intersectionRatio >= 0) {
              elem.style.transform = "translateY(0px)";
              elem.style.opacity = 1;
              io.unobserve(elem);
            }
          }
        });
      });
      // Start observing an element
      document.querySelectorAll(".visible-on-scroll").forEach((el) => {
        io.observe(el);
      });
    } else {
      document.querySelectorAll(".visible-on-scroll").forEach((el) => {
        el.style.transform = "translateY(0px)";
        el.style.opacity = 1;
      });

      document.querySelectorAll(".transition").forEach((el) => {
        el.style.transform = "translateX(0px)";
        el.style.opacity = 1;
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
