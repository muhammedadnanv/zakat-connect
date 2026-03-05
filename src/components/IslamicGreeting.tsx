import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const IslamicGreeting = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2400);
    const hideTimer = setTimeout(() => setVisible(false), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: "600ms" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-emerald-deep/85" />
      <div className="relative z-10 text-center px-6">
        <p
          className="text-5xl md:text-7xl font-display mb-4 opacity-0"
          style={{
            color: "hsl(var(--gold))",
            animation: "greeting-text 1s ease-out 0.3s forwards",
          }}
        >
          بِسْمِ ٱللَّٰهِ
        </p>
        <p
          className="text-lg md:text-xl font-body opacity-0"
          style={{
            color: "hsl(var(--gold-light))",
            animation: "greeting-text 1s ease-out 0.8s forwards",
          }}
        >
          In the Name of Allah, the Most Gracious, the Most Merciful
        </p>
        <div
          className="mt-6 w-24 h-0.5 mx-auto opacity-0"
          style={{
            background: "hsl(var(--gold))",
            animation: "greeting-line 1s ease-out 1.2s forwards",
          }}
        />
      </div>
    </div>
  );
};

export default IslamicGreeting;
