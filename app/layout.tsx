// app/layout.tsx
// ... (imports)
import Footer from "@/components/Footer";

// ... (der Rest der Datei)
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* WICHTIG: Die Startseite rendert ihren eigenen Footer.
            Für alle anderen Seiten wird der Footer hier gerendert.
            Wir müssen eine Logik hinzufügen, um das zu steuern.
            ODER: Wir entfernen den Footer von hier und fügen ihn
            auf jeder Seite manuell hinzu, wo er benötigt wird.
            Letzteres ist sauberer. */}
        <main>{children}</main>
        {/* Footer wird jetzt pro Seite hinzugefügt. */}
      </body>
    </html>
  );
}