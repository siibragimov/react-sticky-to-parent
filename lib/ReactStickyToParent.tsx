  import React, { useRef, CSSProperties } from 'react'
  import { useElementBounding, useElementSize, useWindowScroll, useWindowSize } from '@reactuses/core'
  import './ReactStickyToParent.css'

  interface Props {
    parent: React.RefObject<HTMLElement>;
    children: React.ReactNode;
  }

function ReactStickyToParent ({ parent, children }: Props) {

  const sticky = useRef<HTMLDivElement>(null);
  const parentRef: React.RefObject<HTMLElement> = parent;

  const { y: scrollY } = useWindowScroll();
  const { height: windowHeight } = useWindowSize();
  const [ ,height ] = useElementSize(sticky);
  const [ ,parentHeight ] = useElementSize(parentRef);
  const { left, right } = useElementBounding(parentRef);

  const stickyTop: number = (parentRef?.current?.getBoundingClientRect().top ?? 0) + scrollY;
  const parentBottom: number = stickyTop + parentHeight - windowHeight;

  const getStyles = (): CSSProperties => {
    const max = Math.max(parentBottom - (stickyTop + height - windowHeight), 0);
    const min = 0;
    const current =
      height > windowHeight
        ? scrollY + windowHeight - height - stickyTop
        : scrollY - stickyTop;

    return current >= min && current <= max
      ? {
          ...(height > windowHeight ? { bottom: 0 } : { top: 0 }),
          position: 'fixed',
          left: `${left}px`,
          right: `${right}px`,
        }
      : { top: `${current < min ? min : max}px` };
  };

  const styles = getStyles()

return (
    <div
      ref={sticky}
      className="sticky-to-parent"
      style={styles}>
      {children}
    </div>
  )
}

export default ReactStickyToParent
