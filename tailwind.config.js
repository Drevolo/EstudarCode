/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./src/**/*.{js,css}"],
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
          "green-text": "var(--green-text)",
          blue: "var(--accent-2)",
          "accent-soft": "var(--accent-soft)",
          red: "var(--red)",
          "red-soft": "var(--red-soft)",
          yellow: "var(--yellow)",
          "yellow-soft": "var(--yellow-soft)",
          "yellow-text": "var(--yellow-text)",
          purple: "var(--purple)",
          orange: "var(--orange)",
          cyan: "var(--cyan)"
        },
        surface: {
          DEFAULT: "var(--bg)",
          app: "var(--bg-app)",
          card: "var(--card)",
          code: "var(--bg-code)"
        },
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--muted)",
          code: "var(--code-text)"
        },
        code: {
          kw: "var(--c-kw)",
          cmt: "var(--c-cmt)",
          str: "var(--c-str)",
          num: "var(--c-num)",
          fn: "var(--c-fn)",
          tag: "var(--c-tag)"
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
