const Adaptive = {
  xs: "xs",
  s: "s",
  m: "m",
  l: "l",
  xl: "xl",
};

function useAdaptiveTriggers({
  onExtraSmallEnter,
  onSmallEnter,
  onMediumEnter,
  onLargeEnter,
  onExtraLargeEnter,
}) {
  const [width, setWidth] = useState(Adaptive.xl);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth < 768) {
        onExtraSmallEnter?.();
        return setWidth(Adaptive.xs);
      }
      if (window?.innerWidth < 1024) {
        onSmallEnter?.();
        return setWidth(Adaptive.s);
      }
      if (window?.innerWidth < 1280) {
        onMediumEnter?.();
        return setWidth(Adaptive.m);
      }
      if (window?.innerWidth < 1440) {
        onLargeEnter?.();
        return setWidth(Adaptive.l);
      }
      onExtraLargeEnter?.();
      return setWidth(Adaptive.xl);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter,
    onExtraSmallEnter,
  ]);

  return width;
}

const Pages = {
  firstPage: "firstPage",
  secondPage: "secondPage",
  thirdPage: "thirdPage",
};

const ParallaxConfig = {
  [Adaptive.xs]: {
    pages: 2,
    [Pages.firstPage]: {
      offset: 0.22,
      speed: 0.6,
    },
    [Pages.secondPage]: {
      offset: 1,
      speed: 1,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
  [Adaptive.s]: {
    pages: 3,
    [Pages.firstPage]: {
      offset: 0.4,
      speed: 0.8,
    },
    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
  // [Adaptive.m]: {
  //   ...
  // },
  // [Adaptive.l]: {
  //   ...
  // },
  // [Adaptive.xl]: {
  //   ...
  // }
};
