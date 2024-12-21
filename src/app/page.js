export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">Добро пожаловать в Nexos Cyber Club</h1>
      <p className="text-lg mt-4">Ваше лучшее место для киберспорта и развлечений.</p>
      <div className="mt-8">
        <a
          href="/about"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        >
          Узнать больше
        </a>
      </div>
    </main>
  );
}
