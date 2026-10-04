import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f3f0]">
      <div className="text-center">
        <h1 className="text-[120px] font-light text-[#141415] leading-none mb-[20px]">404</h1>
        <p className="text-[16px] text-[rgba(20,20,21,0.45)] mb-[30px]">Page not found</p>
        <Link 
          href="/" 
          className="inline-block text-[13px] text-[#141415] border border-[#141415] px-[16px] py-[10px] rounded-full hover:bg-[#141415] hover:text-[#fafaf9] transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
