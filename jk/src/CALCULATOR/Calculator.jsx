import React, { useState, useEffect, useRef } from "react";

// Default export React component (single-file). TailwindCSS required in the host project.
export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [overwrite, setOverwrite] = useState(true); // next digit overwrites
  const containerRef = useRef(null);

  // Basic safe-eval for simple expressions: supports + - * / and decimals
  function evaluateExpression(expr) {
    try {
      // sanitize: only allow digits, . and operators
      if (!/^[0-9.+\-*/ ()]+$/.test(expr)) return "Error";
      // eslint-disable-next-line no-new-func
      // Use Function to evaluate; safe because we sanitised above (still avoid in production)
      // Round result to avoid long floats
      const val = new Function(`return (${expr})`)();
      if (!isFinite(val)) return "Error";
      return String(Math.round((val + Number.EPSILON) * 1e12) / 1e12);
    } catch (e) {
      return "Error";
    }
  }

  const handleButton = (val) => {
    if (val === "C") {
      setDisplay("0");
      setOverwrite(true);
      return;
    }
    if (val === "⌫") {
      setDisplay((d) => {
        if (d === "Error") return "0";
        if (d.length === 1) return "0";
        return d.slice(0, -1);
      });
      return;
    }
    if (val === "=") {
      setDisplay((d) => evaluateExpression(d));
      setOverwrite(true);
      return;
    }

    // If user pressed an operator
    const operators = ["+", "-", "*", "/"];
    if (operators.includes(val)) {
      setDisplay((d) => {
        if (d === "Error") return "0";
        // replace last operator if exists
        if (operators.includes(d.slice(-1))) {
          return d.slice(0, -1) + val;
        }
        return d + val;
      });
      setOverwrite(false);
      return;
    }

    // Digit or dot
    if (val === ".") {
      setDisplay((d) => {
        if (d === "Error") return "0.";
        // find last operator to check current number
        const match = d.match(/([+\-*/])([^+\-*/]*)$/);
        const current = match ? match[2] : d;
        if (current.includes('.')) return d; // ignore
        if (d === "0") return "0.";
        return d + ".";
      });
      setOverwrite(false);
      return;
    }

    // Digit 0-9
    setDisplay((d) => {
      if (d === "Error") return val;
      if (overwrite || d === "0") {
        setOverwrite(false);
        return val;
      }
      return d + val;
    });
  };

  // keyboard support
  useEffect(() => {
    function onKey(e) {
      const key = e.key;
      if ((/^[0-9]$/).test(key)) handleButton(key);
      if (key === ".") handleButton('.');
      if (key === "Backspace") handleButton('⌫');
      if (key === "Enter" || key === "=") handleButton('=');
      if (['+', '-', '*', '/'].includes(key)) handleButton(key);
      if (key.toLowerCase() === 'c') handleButton('C');
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [overwrite]);

  const buttons = [
    'C', '⌫', '(', ')',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 p-6">
      <div className="w-full max-w-md shadow-2xl rounded-2xl bg-white/80 backdrop-blur-md p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Tailwind Calculator</h2>
          <div className="text-sm text-gray-500">Responsive • Keyboard friendly</div>
        </div>

        <div className="rounded-xl p-3 bg-gray-900 text-right text-white font-mono">
          <div className="text-xs text-gray-400 truncate">Expression</div>
          <div data-testid="display" className="text-3xl md:text-4xl font-semibold break-words">{display}</div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {buttons.map((b) => (
            <button
              key={b}
              onClick={() => handleButton(b)}
              className={`py-3 rounded-lg text-lg font-medium shadow-sm focus:outline-none transform active:translate-y-0.5
                ${b === '=' ? 'col-span-1 bg-emerald-500 text-white hover:brightness-105' : ''}
                ${['/', '*', '-', '+'].includes(b) ? 'bg-orange-400 text-white' : ''}
                ${b === 'C' ? 'bg-red-500 text-white' : ''}
                ${b === '⌫' ? 'bg-yellow-400 text-white' : ''}
                ${!(['/', '*', '-', '+', 'C', '⌫', '='].includes(b)) && b !== '0' ? 'bg-gray-100' : ''}
                ${b === '0' ? 'col-span-2 bg-gray-100' : ''}
              `}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Tip: use your keyboard — numbers, + - * /, Enter for equals, Backspace to delete, C to clear.
        </div>
      </div>
    </div>
  );
}
