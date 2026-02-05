import React from "react";
import { Card } from "@proton-ui/core";

/**
 * Card 完整展示页面 (Refactored to use Core Themes)
 */
export function CardShowcase() {
  const [activeTheme, setActiveTheme] =
    React.useState<string>("retro-futurism");

  const themes = [
    { id: "retro-futurism", name: "Retro Futurism" },
    { id: "neo-tokyo", name: "Neo Tokyo" },
    { id: "cyber-shrine", name: "Cyber Shrine" },
    { id: "dreamy-lofi", name: "Dreamy Lo-fi" },
    { id: "vaporwave", name: "Vaporwave" },
  ];

  return (
    <div className="min-h-screen bg-[var(--pixel-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--pixel-text-primary)]">
            Card 组件完整展示
          </h1>
          <p className="text-sm text-[var(--pixel-text-secondary)]">
            Powered by @proton-ui/core
          </p>
        </div>

        {/* 基础风格 */}
        <section className="space-y-8">
          <h2 className="text-2xl font-pixel text-[var(--pixel-text-primary)] border-b-2 border-[var(--pixel-border)] pb-2">
            基础风格 (Basic Style)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Card.Header title="Basic Card" />
              <Card.Body>This is a default pixel card.</Card.Body>
            </Card>
            <Card shadow="lg">
              <Card.Header title="Shadow Card" />
              <Card.Body>This card has a large shadow.</Card.Body>
            </Card>
          </div>
        </section>

        {/* 精美风格 */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-pixel text-[var(--pixel-text-primary)]">
              精美像素风格 (Enhanced Pixel Style)
            </h2>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`
                    p-3 rounded border-2 font-pixel text-sm
                    ${
                      activeTheme === theme.id
                        ? "border-[var(--pixel-accent-cyan)] bg-[var(--pixel-bg-tertiary)]"
                        : "border-[var(--pixel-border)]"
                    }
                  `}
              >
                {theme.name}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-lg border-2 border-[var(--pixel-border)] bg-[var(--pixel-bg-secondary)]">
            {/* Retro */}
            {activeTheme === "retro-futurism" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card pixelTheme="retro-futurism">
                  <Card.Header title="Retro Card" subtitle="Neon Glow" />
                  <Card.Body>
                    This card uses the retro-futurism theme prop.
                  </Card.Body>
                  <Card.Footer>
                    <button className="text-xs text-[#4ECDC4]">ACTION</button>
                  </Card.Footer>
                </Card>
                <Card pixelTheme="retro-futurism" decoration="scanline">
                  <Card.Header title="Scanline Card" />
                  <Card.Body>This card has a CRT scanline overlay.</Card.Body>
                </Card>
              </div>
            )}

            {/* Neo Tokyo */}
            {activeTheme === "neo-tokyo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card pixelTheme="neo-tokyo">
                  <Card.Header title="Neo Tokyo" subtitle="Glassmorphism" />
                  <Card.Body>Transparent glass effect with blur.</Card.Body>
                </Card>
              </div>
            )}

            {/* Shrine */}
            {activeTheme === "cyber-shrine" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card pixelTheme="cyber-shrine">
                  <Card.Header title="Cyber Shrine" subtitle="Sacred Gold" />
                  <Card.Body>Golden borders and shadows.</Card.Body>
                </Card>
              </div>
            )}

            {/* Others */}
            {["dreamy-lofi", "vaporwave"].includes(activeTheme) && (
              <Card pixelTheme={activeTheme as any}>
                <Card.Header title={activeTheme} />
                <Card.Body>Theme preview for {activeTheme}</Card.Body>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
