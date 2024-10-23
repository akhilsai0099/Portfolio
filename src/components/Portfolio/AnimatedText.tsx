import { useEffect, useRef, useState } from "react";

export default function AnimatedText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const originalText = useRef(text);
  const iterationCount = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const animateText = () => {
      const newText = text
        .split("")
        .map((char, index) => {
          if (index < iterationCount.current) {
            return originalText.current[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setDisplayText(newText);
      iterationCount.current += 1;

      if (iterationCount.current > text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    };

    intervalRef.current = setInterval(animateText, 33);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return <span className="inline-block">{displayText}</span>;
}
