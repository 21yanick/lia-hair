import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lia Hair</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Professional Hair Salon
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Moderne Haartrends und individuelle Styling-Lösungen für jeden Anlass.
            Professionelle Beratung und erstklassige Behandlungen.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Termin vereinbaren
          </Button>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Unsere Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Haarschnitt & Styling</CardTitle>
                <CardDescription>
                  Professionelle Schnitte für Damen und Herren
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Von klassisch bis trendy - wir finden den perfekten Look für Sie.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Coloration</CardTitle>
                <CardDescription>
                  Hochwertige Haarfarben und Strähnen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Natürliche Looks oder kreative Farbexperimente - alles ist möglich.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Haarpflege</CardTitle>
                <CardDescription>
                  Intensive Behandlungen für gesundes Haar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kuren und Treatments für optimale Haargesundheit und Glanz.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 Lia Hair. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
