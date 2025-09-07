import Lenis from '@studio-freight/lenis';

interface LenisScrollEvent {
  scroll: number;
  limit: number;
  velocity: number;
  direction: 'up' | 'down';
}

const lenis = new Lenis({
  lerp: 0.1,
  duration: 1.2,
  easing: (t: number) => t,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Properly type the scroll event
lenis.on('scroll', (e: LenisScrollEvent) => {
  console.log(e.scroll);      // current scroll position
  console.log(e.velocity);    // current scroll velocity
  console.log(e.direction);   // 'up' | 'down'
  console.log(e.limit);       // scrollable height
});
