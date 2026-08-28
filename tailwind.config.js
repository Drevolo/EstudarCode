/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./src/**/*.{js,css}"],
  // .dark é aplicado via JS (applyTheme) junto com data-theme="dark"
  darkMode: "class",
  corePlugins: {
    // O app tem seu próprio reset; desligar o preflight do Tailwind
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        brand: {
          green: "var(--green)",
          "green-dark": "var(--green-dark)",
          blue: "var(--accent-2)",
          red: "var(--red)",
          yellow: "var(--yellow)",
          purple: "var(--purple)",
          orange: "var(--orange)",
          cyan: "var(--cyan)"
        },
        surface: {
          DEFAULT: "var(--bg)",
          app: "var(--bg-app)",
          card: "var(--card)",
          "card-2": "var(--card-2)"
        },
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--muted)"
        },
        edge: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)"
        }
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)"
      },
      boxShadow: {
        card: "var(--shadow)",
        lg: "var(--shadow-lg)"
      },
      fontFamily: {
        sans: ["Nunito", "Segoe UI", "system-ui", "-apple-system", "sans-serif"]
      }
    }
  }
};
