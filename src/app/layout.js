export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header style={{ textAlign: "center", marginBottom: "20px" }}>
          <nav>
            <a href="/" style={{ margin: "0 15px" }}>Главная</a>
            <a href="/about" style={{ margin: "0 15px" }}>О нас</a>
            <a href="/prices" style={{ margin: "0 15px" }}>Цены</a>
            <a href="/contacts" style={{ margin: "0 15px" }}>Контакты</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
