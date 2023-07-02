'use client';
 
export default function HoverButton() {
 
  return (
    <button button-id="button" className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
        Naciśnij!
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
        </div>
    </button>
  );
}