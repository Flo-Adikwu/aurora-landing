import { useState } from "react";

const STORYBOOK_URL = "https://aurora-design-system-main.vercel.app";

function App() {
  const [copiedNpm, setCopiedNpm] = useState(false);

  const handleCopyNpm = () => {
    navigator.clipboard.writeText("npm install aurora-design-system");
    setCopiedNpm(true);
    setTimeout(() => setCopiedNpm(false), 2000);
  };

  const components = [
    { name: "Button", icon: "🔘" },
    { name: "Input", icon: "📝" },
    { name: "Select", icon: "📋" },
    { name: "Checkbox", icon: "☑️" },
    { name: "Radio", icon: "🔘" },
    { name: "Switch", icon: "🎚️" },
    { name: "Modal", icon: "🪟" },
    { name: "Tooltip", icon: "💬" },
    { name: "Card", icon: "🃏" },
    { name: "Badge", icon: "🏷️" },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance with minimal bundle size",
    },
    {
      icon: "♿",
      title: "Accessible",
      description: "WCAG 2.1 AA compliant with full ARIA support",
    },
    {
      icon: "🎨",
      title: "Customizable",
      description: "Multiple variants and full Tailwind integration",
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Mobile-first design that works everywhere",
    },
    {
      icon: "🧪",
      title: "Well Tested",
      description: "200+ tests with comprehensive coverage",
    },
    {
      icon: "📖",
      title: "Documented",
      description: "Interactive Storybook with live examples",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-aurora animate-gradient flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold text-gray-900">Aurora</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#components"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Components
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <a
                href="https://github.com/Flo-Adikwu/aurora-design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href={STORYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 gradient-aurora text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Docs
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-aurora-50 border border-aurora-200 rounded-full text-aurora-700 text-sm font-medium mb-8 animate-glow">
            <span className="animate-pulse">✨</span>
            10 Production-Ready Components
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Beautiful UIs with{" "}
            <span className="text-gradient gradient-aurora animate-gradient">
              Aurora
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A modern React component library with TypeScript, Tailwind CSS, and
            Web3 aesthetics. Accessible, customizable, and production-ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={STORYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 gradient-aurora text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Documentation
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="https://github.com/Flo-Adikwu/aurora-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-lg hover:border-gray-300 transition-all hover:scale-105"
            >
              View on GitHub
            </a>
          </div>

          {/* NPM Install */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 bg-gray-900 text-green-400 px-6 py-4 rounded-xl font-mono text-sm sm:text-base">
              <span className="text-gray-500">$</span>
              <span className="flex-1 text-left">
                npm install aurora-design-system
              </span>
              <button
                onClick={handleCopyNpm}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {copiedNpm ? "✓" : "📋"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section
        id="components"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              10 Beautiful Components
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build modern interfaces
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {components.map((component, index) => (
              <div
                key={component.name}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-aurora-500 hover:shadow-lg transition-all cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {component.icon}
                </div>
                <div className="font-semibold text-gray-900 group-hover:text-aurora-600 transition-colors">
                  {component.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={STORYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aurora-600 hover:text-aurora-700 font-semibold text-lg"
            >
              Explore All Components
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Aurora?
            </h2>
            <p className="text-xl text-gray-600">
              Built with best practices and modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-aurora-500 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple & Elegant API
            </h2>
            <p className="text-xl text-gray-600">
              Intuitive props, TypeScript support, and full autocomplete
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm leading-relaxed">
              <code>{`import { Button, Card, Input } from 'aurora-design-system';

function App() {
  return (
    <Card variant="gradient" padding="lg">
      <h2>Welcome to Aurora</h2>
      <Input 
        label="Email" 
        type="email"
        placeholder="you@example.com"
      />
      <Button variant="gradient" size="lg">
        Get Started
      </Button>
    </Card>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-aurora animate-gradient opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Start building beautiful interfaces with Aurora today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={STORYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 gradient-aurora text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              View Documentation
            </a>
            <a
              href="https://github.com/Flo-Adikwu/aurora-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-lg hover:border-gray-300 transition-all hover:scale-105"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-aurora flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-gray-600">
                Built with ❤️ by{" "}
                <a
                  href="https://linkedin.com/in/florenceadikwu1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aurora-600 hover:text-aurora-700 font-semibold"
                >
                  Florence Adikwu
                </a>
              </span>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <a
                href={STORYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                Documentation
              </a>
              <a
                href="https://github.com/Flo-Adikwu/aurora-design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/florenceadikwu1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
