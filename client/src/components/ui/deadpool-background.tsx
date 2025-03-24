export function DeadpoolBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 opacity-5">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        <pattern id="deadpool-pattern" patternUnits="userSpaceOnUse" width="40" height="40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#E21A1A" strokeWidth="2" />
          <circle cx="13" cy="15" r="5" fill="#E21A1A" />
          <circle cx="27" cy="15" r="5" fill="#E21A1A" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#E21A1A" strokeWidth="2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#deadpool-pattern)" />
      </svg>
    </div>
  );
}