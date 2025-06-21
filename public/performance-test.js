// Performance Test Script - Add to browser console to monitor scroll performance

(function () {
  console.log("🚀 Scroll Performance Monitor Started");

  let frameCount = 0;
  let lastTime = performance.now();
  let scrollEvents = 0;
  let lastScrollTime = performance.now();

  // Monitor FPS during scroll
  function measureScrollFPS() {
    frameCount++;
    const currentTime = performance.now();

    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

      console.log(`📊 Scroll FPS: ${fps}fps`, fps >= 55 ? "✅" : "⚠️");

      if (fps < 45) {
        console.warn("🐌 Low FPS detected - scroll performance may be laggy");
      } else if (fps >= 55) {
        console.log("🎯 Excellent scroll performance!");
      }

      frameCount = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(measureScrollFPS);
  }

  // Monitor scroll event frequency
  function monitorScrollEvents() {
    scrollEvents++;
    const currentTime = performance.now();

    if (currentTime - lastScrollTime >= 1000) {
      console.log(`📈 Scroll events/sec: ${scrollEvents}`);

      if (scrollEvents > 100) {
        console.warn("⚠️ High scroll event frequency - consider throttling");
      } else {
        console.log("✅ Good scroll event frequency");
      }

      scrollEvents = 0;
      lastScrollTime = currentTime;
    }
  }

  // Monitor scroll smoothness
  let lastScrollY = window.pageYOffset;
  let jumpCount = 0;

  function monitorScrollSmoothness() {
    const currentScrollY = window.pageYOffset;
    const scrollDiff = Math.abs(currentScrollY - lastScrollY);

    // Detect scroll jumps (non-smooth scrolling)
    if (scrollDiff > 50) {
      jumpCount++;
      if (jumpCount > 5) {
        console.warn("⚠️ Scroll jumps detected - scrolling may not be smooth");
        jumpCount = 0;
      }
    }

    lastScrollY = currentScrollY;
  }

  // Performance metrics
  function checkPerformanceMetrics() {
    const navigation = performance.getEntriesByType("navigation")[0];
    const paintEntries = performance.getEntriesByType("paint");

    console.log("🎯 Performance Metrics:");
    console.log(
      `  DOM Content Loaded: ${
        navigation.domContentLoadedEventEnd - navigation.navigationStart
      }ms`
    );

    paintEntries.forEach((entry) => {
      console.log(`  ${entry.name}: ${entry.startTime}ms`);
    });

    // Check for layout shifts
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.value > 0.1) {
            console.warn(`⚠️ Layout shift detected: ${entry.value}`);
          }
        }
      });
      observer.observe({ entryTypes: ["layout-shift"] });
    }
  }

  // Test scroll performance
  function runScrollTest() {
    console.log("🧪 Running scroll performance test...");

    // Smooth scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        console.log("✅ Scroll test completed - check metrics above");
      }, 2000);
    }, 3000);
  }

  // Add event listeners
  window.addEventListener("scroll", monitorScrollEvents, { passive: true });
  window.addEventListener("scroll", monitorScrollSmoothness, { passive: true });

  // Start monitoring
  requestAnimationFrame(measureScrollFPS);

  // Check initial metrics
  setTimeout(checkPerformanceMetrics, 1000);

  // Expose test function globally
  window.testScrollPerformance = runScrollTest;

  console.log("✅ Performance monitor ready!");
  console.log(
    "💡 Run window.testScrollPerformance() to test scroll smoothness"
  );
})();

// Usage:
// 1. Copy and paste this script in browser console
// 2. Scroll the page and watch the console for performance metrics
// 3. Run window.testScrollPerformance() for automatic scroll test
