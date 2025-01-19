export default function Loading() {
  return (
    <div className="w-screen bg-backgroundClr z-[99999] h-screen backdrop-blur	fixed inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-b-white rounded-full inline-block box-border animate-spin" />
    </div>
  );
}
