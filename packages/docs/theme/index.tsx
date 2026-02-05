import React, { useEffect } from "react";
import Theme from "rspress/theme";
import { PixelCat } from "./components/PixelCat";
import { BackToTop } from "./components/BackToTop";
import { LogoCat } from "./components/LogoCat";
import { CoreFeatures } from "./components/CoreFeatures";
import { ScrollDownButton } from "./components/ScrollDownButton";

import { useNavbarHide } from "./hooks";
import "@proton-ui/core/styles/pixel-theme.css";
import "@proton-ui/core/styles/pixel-utilities.css";
import "./global.css";

const Layout = () => {
  useEffect(() => {
    // 强制深色模式
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("rspress-theme", "dark");
  }, []);

  const isNavbarHidden = useNavbarHide(100);

  useEffect(() => {
    const navbar = document.querySelector(".rspress-nav");
    if (navbar) {
      if (isNavbarHidden) {
        navbar.classList.add("nav-hidden");
      } else {
        navbar.classList.remove("nav-hidden");
      }
    }
  }, [isNavbarHidden]);

  useEffect(() => {
    const replaceLogo = () => {
      const logoContainer = document.querySelector(".rspress-nav-logo");
      if (logoContainer && !logoContainer.querySelector(".custom-logo-cat")) {
        logoContainer.innerHTML = "";
        const container = document.createElement("div");
        container.className = "custom-logo-cat";
        logoContainer.appendChild(container);

        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(container);
          root.render(<LogoCat />);
        });
      }
    };

    setTimeout(replaceLogo, 100);
    setTimeout(replaceLogo, 500);
    setTimeout(replaceLogo, 1000);
  }, []);

  useEffect(() => {
    const addHeroCat = () => {
      const heroSection = document.querySelector(".rspress-home-hero");
      if (heroSection && !heroSection.querySelector(".pixel-cat-hero")) {
        const catContainer = document.createElement("div");
        catContainer.className = "pixel-cat-hero";

        const catImg = document.createElement("img");
        catImg.src = "/pixel-cat/idle-1-blue.svg";
        catImg.alt = "Proton UI Mascot";
        catImg.style.imageRendering = "pixelated";

        let frame = 0;
        const frames = [
          "/pixel-cat/idle-1-blue.svg",
          "/pixel-cat/idle-2-blue.svg",
        ];
        setInterval(() => {
          frame = (frame + 1) % frames.length;
          catImg.src = frames[frame] ?? "";
        }, 500);

        catContainer.appendChild(catImg);
        heroSection.appendChild(catContainer);
      }
    };

    setTimeout(addHeroCat, 100);
    setTimeout(addHeroCat, 500);
    setTimeout(addHeroCat, 1000);
  }, []);

  useEffect(() => {
    const addScrollButton = () => {
      // Only add on homepage
      const currentPath = window.location.pathname;
      console.log("📍 Current path:", currentPath);

      if (currentPath !== "/" && currentPath !== "/index.html") {
        console.log("⏭️ Skipping - not on homepage");
        return;
      }

      // Debug: Check what elements exist
      console.log("🔍 Checking for hero sections...");
      const selector1 = document.querySelector(".rspress-home-hero");
      const selector2 = document.querySelector(
        "[data-component-name='HomeHero']"
      );
      const selector3 = document.querySelector(".hero");
      const selector4 = document.querySelector("section.max-w-6xl");
      const selector5 = document.querySelector("[class*='hero']");

      console.log("Found elements:", {
        ".rspress-home-hero": selector1,
        "[data-component-name='HomeHero']": selector2,
        ".hero": selector3,
        "section.max-w-6xl": selector4,
        "[class*='hero']": selector5,
      });

      // Try multiple selectors for hero section
      const heroSection =
        selector1 || selector2 || selector3 || selector4 || selector5;

      if (heroSection && !document.querySelector(".scroll-down-container")) {
        console.log(
          "🎯 Adding scroll button to hero section:",
          heroSection.className
        );
        const container = document.createElement("div");
        container.className = "scroll-down-container";
        heroSection.appendChild(container);

        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(container);
          root.render(<ScrollDownButton />);
          console.log("✅ Scroll button rendered");
        });
      } else {
        console.log("❌ Hero section not found or button already exists", {
          heroSection: !!heroSection,
          heroClass: heroSection?.className,
          containerExists: !!document.querySelector(".scroll-down-container"),
        });
      }
    };

    // Try multiple times with increasing delays
    setTimeout(addScrollButton, 500);
    setTimeout(addScrollButton, 1000);
    setTimeout(addScrollButton, 2000);

    // Also try on route changes
    const observer = new MutationObserver(() => {
      addScrollButton();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const addTechStackTags = () => {
      const heroTagline = document.querySelector(".rspress-home-hero-tagline");

      if (heroTagline && !document.querySelector(".hero-tech-stack")) {
        const techStacks = [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Rspress",
          "tsup",
          "Vite",
          "Vitest",
          "Playwright",
          "pnpm",
          "Turborepo",
          "Changesets",
        ];

        const container = document.createElement("div");
        container.className = "hero-tech-stack";
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.gap = "15px";
        container.style.marginTop = "24px";

        techStacks.forEach((tech) => {
          const tag = document.createElement("span");
          tag.className = "tech-tag";
          tag.textContent = tech;
          tag.style.cssText = `
            display: inline-flex !important;
            align-items: center !important;
            padding: 6px 14px !important;
            background: #0d1117 !important;
            border: 4px solid #292A2C !important;
            border-radius: 6px !important;
            font-size: 0.85rem !important;
            font-weight: 900 !important;
            color: #CCDDED !important;
            font-family: "Ark Pixel", monospace !important;
            white-space: nowrap !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2) !important;
            transition: all 0.2s ease !important;
            cursor: default !important;
          `;

          tag.addEventListener("mouseenter", () => {
            tag.style.cssText = `
              display: inline-flex !important;
              align-items: center !important;
              padding: 6px 14px !important;
              background: #161b22 !important;
              border: 2px solid #30363d !important;
              border-radius: 6px !important;
              font-size: 0.75rem !important;
              font-weight: 700 !important;
              color: #ffffff !important;
              font-family: "Ark Pixel", monospace !important;
              white-space: nowrap !important;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3) !important;
              transition: all 0.2s ease !important;
              cursor: default !important;
              transform: translateY(-1px) !important;
            `;
          });

          tag.addEventListener("mouseleave", () => {
            tag.style.cssText = `
              display: inline-flex !important;
              align-items: center !important;
              padding: 6px 14px !important;
              background: #0d1117 !important;
              border: 2px solid #21262d !important;
              border-radius: 6px !important;
              font-size: 0.75rem !important;
              font-weight: 700 !important;
              color: #f0f6fc !important;
              font-family: "Ark Pixel", monospace !important;
              white-space: nowrap !important;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2) !important;
              transition: all 0.2s ease !important;
              cursor: default !important;
            `;
          });

          container.appendChild(tag);
        });

        heroTagline.parentNode?.insertBefore(
          container,
          heroTagline.nextSibling
        );
      }
    };

    setTimeout(addTechStackTags, 200);
    setTimeout(addTechStackTags, 600);
    setTimeout(addTechStackTags, 1200);
    setTimeout(addTechStackTags, 2000);
  }, []);

  return (
    <>
      <Theme.Layout />
      {typeof window !== "undefined" &&
        (window.location.pathname === "/" ||
          window.location.pathname === "/index.html") && (
          <div style={{ position: "relative", zIndex: 1 }}>
            <CoreFeatures />
          </div>
        )}
      <PixelCat />
      <BackToTop />
    </>
  );
};

export * from "rspress/theme";

export default {
  ...Theme,
  Layout,
};

export * from "./components";
export * from "./hooks";
