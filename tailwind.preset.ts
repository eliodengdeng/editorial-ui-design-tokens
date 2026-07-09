import type { Config } from "tailwindcss";

const editorialUiPreset = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--eui-font-sans)"],
        display: ["var(--eui-font-display)"],
        cjk: ["var(--eui-font-cjk)"],
        code: ["var(--eui-font-code)"],
      },
      colors: {
        eui: {
          ink: "var(--eui-color-ink)",
          paper: "var(--eui-color-paper)",
          white: "var(--eui-color-white)",
          orange: "var(--eui-color-orange)",
          blue: "var(--eui-color-blue)",
          green: "var(--eui-color-green)",
          yellow: "var(--eui-color-yellow)",
          purple: "var(--eui-color-purple)",
          muted: "var(--eui-text-muted)",
          secondary: "var(--eui-text-secondary)",
          border: "var(--eui-border-default)",
          subtle: "var(--eui-border-subtle)",
        },
      },
      borderRadius: {
        "eui-sm": "var(--eui-radius-sm)",
        "eui-button": "var(--eui-radius-button)",
        "eui-popover": "var(--eui-popover-radius)",
        "eui-full": "var(--eui-radius-full)",
      },
      spacing: {
        "eui-1": "var(--eui-space-1)",
        "eui-2": "var(--eui-space-2)",
        "eui-3": "var(--eui-space-3)",
        "eui-4": "var(--eui-space-4)",
        "eui-5": "var(--eui-space-5)",
        "eui-6": "var(--eui-space-6)",
        "eui-8": "var(--eui-space-8)",
        "eui-10": "var(--eui-space-10)",
        "eui-15": "var(--eui-space-15)",
        "eui-20": "var(--eui-space-20)",
      },
      transitionTimingFunction: {
        "eui-standard": "var(--eui-ease-standard)",
        "eui-out": "var(--eui-ease-out)",
      },
    },
  },
} satisfies Partial<Config>;

export default editorialUiPreset;
