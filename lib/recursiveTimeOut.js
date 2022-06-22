import { useCallback, useEffect, useRef, useState } from "react";

export const RecursiveTimeout = (callback, delay) => {
  // we use this state to check if our carousel in running or not
  const [isRunning, setIsRunning] = useState(false);

  // we will use stop and play methods as a way to control our
  // carousel's animation states to start and stop animating it.
  const stop = useCallback(() => setIsRunning(false), [setIsRunning]);
  const play = useCallback(() => setIsRunning(true), [setIsRunning]);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning) return;
    let id = 0;

    function tick() {
      // if our carousel is not running then use the clearTimeout()
      // method to cancel the setTimeout() method we might have used.
      if (!isRunning) return clearTimeout(id);
      savedCallback.current();
      requestAnimationFrame(() => (id = setTimeout(tick, delay)));
    }

    // else start an animation with a timeout delay of { delay }
    requestAnimationFrame(() => (id = setTimeout(tick, delay)));

    return () => {
      if (id) clearTimeout(id);
      stop();
    };
  }, [isRunning, delay, stop]);

  // return our play or stop method which we can call from
  // our parent element.
  return { play, delay, stop };
};
