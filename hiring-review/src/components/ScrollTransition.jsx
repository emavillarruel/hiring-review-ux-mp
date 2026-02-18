import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/ScrollTransition.css';

const ScrollTransition = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div
      ref={elementRef}
      className={`scroll-transition ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollTransition;
