import { useEffect, useRef, useState } from "react";
import "./style.css";

export const AnimatedSection = ({ children }: { children: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};
