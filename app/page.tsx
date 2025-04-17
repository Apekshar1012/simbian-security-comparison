import WithoutSimbianSection from "./components/WithoutSimbian";
import WithSimbianSection from "./components/WithSimbian";

export default function Home() {
  return (
    <main className={`bg-white flex flex-col`}>
      <div className="flex justify-center items-center">
        <WithoutSimbianSection />
      </div>
      <div className="flex justify-center items-center">
        <WithSimbianSection />
      </div>
  </main>
  );
}