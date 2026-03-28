export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: "100lvh" }}>
        <header
          style={{
            backgroundColor: "#f5f5f5",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid #e0e0e0",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "#212121",
            margin: 0,
          }}
        >
          Next.js Tutorial Layout
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "#89CFF0",
            padding: "0.75rem 1rem",
            fontSize: "0.85rem",
            color: "#212121",
            textAlign: "center",
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} My Next.js Tutorial
        </footer>
      </body>
    </html>
  );
}

