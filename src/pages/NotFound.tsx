import React from 'react';
    import { Link } from 'react-router-dom';
    import { Home } from 'lucide-react';
    import Layout from '../components/Layout';

    const NotFound: React.FC = () => {
      return (
        <Layout>
          <section className="py-24 md:py-32">
            <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
              <span className="font-mono text-6xl md:text-8xl font-bold bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--chart-3))] bg-clip-text text-transparent">
                404
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-6 mb-4">
                Page not found
              </h1>
              <p className="text-[hsl(var(--muted-foreground))] mb-8">
                The route you're looking for doesn't exist or has been moved.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-white font-semibold hover:scale-105 transition-transform"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </section>
        </Layout>
      );
    };

    export default NotFound;