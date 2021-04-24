import { Logo, Layout, RadialLine, Button } from "./components";

function App() {
  return (
    <Layout>
      <header className="flex justify-center z-10">
        <Logo />
      </header>

      <main className="flex-1 flex justify-center">
        <h1 className="text-primary text-7xl flex flex-col items-center mt-16">
          <span className="font-semibold">卡牙潔莉塔</span>
          <span>飲料店</span>
        </h1>

        <div className="absolute bottom-1/4">
          <RadialLine />

          <div className="absolute transform -translate-x-1/2 -translate-y-1/2">
            <Button />
          </div>
        </div>
      </main>

      <footer className="text-primary text-lg flex justify-center py-4">
        <p>Traditional Flavor - Classic Heritage</p>
      </footer>
    </Layout>
  );
}

export default App;
