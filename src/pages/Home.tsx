import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HandHeart, ArrowRight, MapPin, Filter, Link2 } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] min-h-[600px]">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/25">
                <HandHeart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">VolunteerNow</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center pt-16">
          <div className="container py-20 lg:py-28">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">No sign-up required</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                Find Ways to{" "}
                <span className="text-primary">Give Back</span>
                {" "}Near You
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                Discover meaningful volunteer opportunities in your community.
                Browse, find, and connect with local organizations making a real difference.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/search">
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    Start Exploring
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">Free</div>
                  <div className="text-sm text-muted-foreground mt-1">Always</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">0</div>
                  <div className="text-sm text-muted-foreground mt-1">Sign-ups needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border/50 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find and connect with volunteer opportunities in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-apple hover:shadow-apple-hover transition-all duration-300">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Enter Location</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Type your city or neighborhood to find opportunities nearby
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-apple hover:shadow-apple-hover transition-all duration-300">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Filter className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Browse & Filter</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explore causes that matter to you and filter by category
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-apple hover:shadow-apple-hover transition-all duration-300">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Link2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Connect Directly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reach out to organizations directly — no middleman needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>VolunteerNow — Find meaningful ways to give back</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
