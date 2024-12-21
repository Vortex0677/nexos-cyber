export default function PricesPage() {
    return (
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Цены</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Утренний тариф (9:00–16:00): 100₽/час</li>
          <li>Вечерний тариф (16:00–23:00): 130₽/час</li>
          <li>Ночной тариф (23:00–9:00): 120₽/час</li>
        </ul>
      </main>
    );
  }
  