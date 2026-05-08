
import { appConfig } from "../lib/config";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{appConfig.app.name}</h1>
      <p>{appConfig.app.description}</p>
      <div className="mt-8">
         {/* Generated UI will connect here in actual exported project */}
         <p>This is a starting point. Start building your components based on the config.</p>
      </div>
    </main>
  );
}
