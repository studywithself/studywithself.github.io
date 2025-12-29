import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Stack from './components/Stack';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'Stack':
        return <Stack />;
      case 'Project':
        return <Project />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />

      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
