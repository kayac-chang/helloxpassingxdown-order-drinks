import { Link } from "react-router-dom";
import { Logo, Layout, Circle } from "../components";

const Text = {
  Title: "LE BOBOBA",
  Link: "Order Now",
  Footer: "Traditional Flavor - Classic Heritage",
};

export default function Entry() {
  return (
    <Layout className="flex flex-col">
      <header className="flex justify-center z-10">
        <Logo />
      </header>

      <main className="flex-1 flex flex-col">
        <h1 className="text-primary text-center font-semibold text-7xl flex flex-col items-center mt-16">
          {Text.Title}
        </h1>

        <div className="flex justify-center mt-52">
          <Link to="/products/">
            <Circle
              type="solid"
              size="lg"
              className="text-on-primary flex items-center justify-center text-center text-lg leading-5"
            >
              {Text.Link}
            </Circle>
          </Link>
        </div>
      </main>

      <footer className="text-primary text-lg flex justify-center py-4 mt-auto">
        <p>{Text.Footer}</p>
      </footer>
    </Layout>
  );
}
