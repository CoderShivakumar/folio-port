import { Route, Switch } from 'wouter';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { AchievementDetail } from './components/AchievementDetail';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <Skills />
      <Projects />
      <Hackathons />
      <Achievements />
      <Experience />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/achievements/:id" component={AchievementDetail} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-[hsl(45,40%,95%)]">
          <div className="text-center">
            <h1 className="text-4xl text-[hsl(230,50%,30%)] mb-4">404 - Page Not Found</h1>
            <a href="/" className="text-[hsl(45,95%,55%)] hover:underline">
              Return to home
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}