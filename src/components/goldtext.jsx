export default function GoldText({ text, className }) {
  return (
    <p className="font-tmr flex">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`bg-gradient-to-b from-white from-[15%] via-goldlight via-[40%] to-golddark to-[80%] bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(0,0,0,0.4)] ${(className.includes('text-5xl') || className.includes('text-4xl') || className.includes('text-6xl')) ? 'pb-1' : ''} ${className}`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </p>
  );
}
