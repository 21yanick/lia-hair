import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
import { Placeholder } from "@/components/placeholder"
import { Gallery } from "@/components/gallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"
import { RevealOnScroll, HoverCard, StaggerContainer, StaggerItem, ButtonHover } from "@/components/motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <RevealOnScroll direction="left">
            <Logo width={140} height={45} />
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <ThemeToggle />
          </RevealOnScroll>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative gradient-lavender-subtle">
          <div className="container mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <RevealOnScroll>
                  <h1 className="text-hero font-bold mb-6">
                    Zeit für Sie
                    <span className="block text-primary">und Ihre Haare</span>
                  </h1>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                  <p className="text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
                    Mehr als nur Haarschnitt – hier bekommen Sie die Zeit 
                    und Aufmerksamkeit, die Sie verdienen.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.4}>
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <ButtonHover>
                      <Button size="lg" className="text-lg px-8 py-6 shadow-lg min-h-[56px]" asChild>
                        <a href="tel:+41791976484">
                          Jetzt anrufen
                        </a>
                      </Button>
                    </ButtonHover>
                    <ButtonHover>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-subtle min-h-[56px]">
                        Portfolio ansehen
                      </Button>
                    </ButtonHover>
                  </div>
                </RevealOnScroll>
              </div>
              <RevealOnScroll delay={0.6} direction="right">
                <HoverCard scale={1.05} lift={8}>
                  <Placeholder 
                    type="image" 
                    size="xl" 
                    aspect="square"
                    className="w-full max-w-md mx-auto shadow-2xl"
                  />
                </HoverCard>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
            </RevealOnScroll>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <StaggerItem>
                <HoverCard scale={1.03} lift={6}>
                  <Card className="text-center glass-subtle border-primary/20 shadow-lg">
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Placeholder type="service" size="lg" aspect="square" className="w-12 h-12 border-none bg-transparent" />
                      </div>
                      <CardTitle className="text-primary">Haarschnitt & Styling</CardTitle>
                      <CardDescription>
                        Schnitte, die zu Ihnen passen
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Klassisch oder modern - ich finde den Schnitt, der Ihre Persönlichkeit unterstreicht.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
              
              <StaggerItem>
                <HoverCard scale={1.03} lift={6}>
                  <Card className="text-center glass-subtle border-primary/20 shadow-lg">
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                        <Placeholder type="color" size="lg" aspect="square" className="w-12 h-12 border-none bg-transparent" />
                      </div>
                      <CardTitle className="text-primary">Farbe & Strähnen</CardTitle>
                      <CardDescription>
                        Natürliche und kreative Haarfarben
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Sanfte Highlights oder komplette Typveränderung - mit hochwertigen Produkten.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
              
              <StaggerItem>
                <HoverCard scale={1.03} lift={6}>
                  <Card className="text-center glass-subtle border-primary/20 shadow-lg">
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Placeholder type="service" size="lg" aspect="square" className="w-12 h-12 border-none bg-transparent" />
                      </div>
                      <CardTitle className="text-primary">Pflege & Treatments</CardTitle>
                      <CardDescription>
                        Gesundes Haar braucht die richtige Pflege
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Pflegende Kuren und Treatments, die Ihr Haar wieder zum Strahlen bringen.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 gradient-lavender-subtle">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
            </RevealOnScroll>
            <Gallery />
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll direction="left">
                <HoverCard scale={1.03} lift={8}>
                  <Placeholder 
                    type="person" 
                    size="xl" 
                    aspect="portrait"
                    className="w-full max-w-sm mx-auto shadow-2xl rounded-2xl overflow-hidden"
                  />
                </HoverCard>
              </RevealOnScroll>
              <div>
                <RevealOnScroll direction="right">
                  <h2 className="text-4xl font-bold mb-8 text-primary">Über mich</h2>
                </RevealOnScroll>
                <RevealOnScroll direction="right" delay={0.2}>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Willkommen in meinem Salon in Bellach! Ich schneide und style Haare 
                    mit Freude und langjähriger Erfahrung. Jeder Kunde ist mir wichtig - 
                    nehmen Sie sich die Zeit, die Sie brauchen.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll direction="right" delay={0.4}>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Von klassischen Schnitten bis zu modernen Trends - 
                    gemeinsam finden wir den Look, der zu Ihnen passt.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll direction="right" delay={0.6}>
                  <ButtonHover>
                    <Button variant="outline" size="lg" className="glass-subtle" asChild>
                      <a href="tel:+41791976484">
                        Beratung vereinbaren
                      </a>
                    </Button>
                  </ButtonHover>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 gradient-lavender-subtle">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16">Kontakt</h2>
            </RevealOnScroll>
            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StaggerItem className="h-full">
                <HoverCard scale={1.05} lift={8} className="h-full">
                  <Card className="text-center glass-card shadow-xl border-primary/20 h-full">
                    <CardContent className="pt-8 pb-8 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-3 text-lg">Telefon</h3>
                      <a 
                        href="tel:+41791976484" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg"
                      >
                        +41 79 197 64 84
                      </a>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
              
              <StaggerItem className="h-full">
                <HoverCard scale={1.05} lift={8} className="h-full">
                  <Card className="text-center glass-card shadow-xl border-primary/20 h-full">
                    <CardContent className="pt-8 pb-8 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-3 text-lg">Adresse</h3>
                      <a 
                        href="https://maps.google.com/?q=Römerstrasse+6,+4512+Bellach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Römerstrasse 6<br />
                        4512 Bellach
                      </a>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
              
              <StaggerItem className="h-full">
                <HoverCard scale={1.05} lift={8} className="h-full">
                  <Card className="text-center glass-card shadow-xl border-primary/20 h-full">
                    <CardContent className="pt-8 pb-8 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-3 text-lg">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Mittwoch: 09:00-18:30<br />
                        Samstag: 09:00-16:00
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Logo width={120} height={40} />
              <p className="text-muted-foreground text-sm mt-4 md:mt-0">
                &copy; 2025 Lia Hair. Alle Rechte vorbehalten.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </footer>
    </div>
  )
}
