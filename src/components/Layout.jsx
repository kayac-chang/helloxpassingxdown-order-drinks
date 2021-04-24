import { BlueLine } from "./Shape";

export function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background font-heiti py-4">
      <div className="space-y-2 w-full">
        <BlueLine className="border-b-4" />

        <BlueLine className="border-b-8" />
      </div>

      <div className="flex-1 w-full flex flex-col overflow-scroll relative">
        {children}
      </div>

      <div className="space-y-2 w-full">
        <BlueLine className="border-b-4" />

        <BlueLine className="border-b-8" />
      </div>
    </div>
  );
}
