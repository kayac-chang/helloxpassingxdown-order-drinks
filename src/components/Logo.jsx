import clsx from "clsx";

export function Logo({ className }) {
  return (
    <h2
      className={clsx(
        "bg-primary text-on-primary py-4 px-6 rounded inline-flex flex-col justify-center items-center",
        className
      )}
    >
      <span>Kayac Jarita</span>
      <span>Boba Store</span>
    </h2>
  );
}
