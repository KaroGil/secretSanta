// components/ChristmasAnimatedIcons.tsx by ChatGPT
import { useEffect } from 'react';

const christmasIcons = ['🎄', '🎅', '🎁', '❄️', '🔔', '⛄'];

function createIconElement(icon: string) {
  const element = document.createElement('div');
  element.textContent = icon;
  element.classList.add('animated-icon');
  element.style.top = `${Math.random() * 100}vh`;
  element.style.left = `${Math.random() * 100}vw`;
  element.style.animationDuration = `${15 + Math.random() * 5}s`; // Random speed
  return element;
}

export default function AnimatedIcons({ n = 20 }: { n?: number }) {
  useEffect(() => {
    const container = document.createElement('div');
    container.classList.add('christmas-icons-container');

    document.body.appendChild(container);

    // Set up an interval to gradually add icons one by one
    const intervalId = setInterval(() => {
      const icon =
        christmasIcons[Math.floor(Math.random() * christmasIcons.length)]; // Randomly pick an icon
      const iconElement = createIconElement(icon);

      container.appendChild(iconElement);

      // Remove the icon after its animation ends to avoid clutter
      iconElement.addEventListener('animationend', () => iconElement.remove());

      // Stop creating new icons once we've reached the specified number (n)
      if (container.childElementCount >= n) {
        clearInterval(intervalId); // Clear the interval once target count is reached
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      document.body.removeChild(container);
    };
  }, [n]);

  return null;
}
