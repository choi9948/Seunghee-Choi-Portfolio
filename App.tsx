import React, { Suspense, lazy } from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    const Home = lazy(() => import('./src/pages/Home.tsx'));
    const Projects = lazy(() => import('./src/pages/Projects.tsx'));
    const Experience = lazy(() => import('./src/pages/Experience.tsx'));
    const About = lazy(() => import('./src/pages/About.tsx'));
    const NotFound = lazy(() => import('./src/pages/NotFound.tsx'));

    const Loading: React.FC = () => (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))]">
        <div className="w-8 h-8 border-2 border-white/10 border-t-[hsl(var(--accent))] rounded-full animate-spin" />
      </div>
    );

    const App: React.FC = () => {
      return (
        <Theme appearance="dark" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen font-sans">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="dark"
              />
            </main>
          </Router>
        </Theme>
      );
    };

    export default App;
