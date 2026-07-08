"use client";

import { MonitorCog, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/button";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const nextTheme = storedTheme ?? "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(
      new CustomEvent("portfolio-theme-change", {
        detail: { theme: nextTheme },
      }),
    );
    setTheme(nextTheme);
  };

  const Icon = theme === "dark" ? Moon : Sun;

  return (
    <Button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      size="icon"
      type="button"
      variant="ghost"
    >
      <Icon aria-hidden className="size-4" />
      <MonitorCog aria-hidden className="sr-only" />
    </Button>
  );
}
