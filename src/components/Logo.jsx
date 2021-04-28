import clsx from "clsx";

export function Logo({ className }) {
  return (
    <h2
      className={clsx(
        "bg-primary text-on-primary py-4 px-6 inline-flex flex-col justify-center items-center rounded rounded-t-none",
        className
      )}
    >
      <span>Kayac Jarita</span>
      <span>Boba Store</span>
    </h2>
  );
}
