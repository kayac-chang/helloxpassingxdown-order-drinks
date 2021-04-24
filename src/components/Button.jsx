export function Button() {
  return (
    <button className="border-primary border-6 rounded-full p-0.5">
      <div className="bg-primary text-on-primary p-4 rounded-full flex flex-col items-center -space-y-1">
        <span>Order</span>
        <span>Now</span>
      </div>
    </button>
  );
}
