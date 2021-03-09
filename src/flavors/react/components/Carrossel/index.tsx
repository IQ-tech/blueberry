import React from "react";
import Staw from 'staw';
import classnames from "classnames";

interface CarrosselProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element[] | JSX.Element,
  type: 'swipe' | 'mixed' | 'desktop',
  title: string
};

const Carrossel:React.FC<CarrosselProps> = ({ type, title, children, ...props }) => {
  const hasArrows = type !== 'swipe'
  const carrosselClass = classnames('iq-carrossel', {
    'iq-carrossel--mixed': type === 'mixed',
    'iq-carrossel--desktop': type === 'desktop'
  })
  const visibleGutterConfig = {
    swipe: 32,
    mixed: 0,
    desktop: 32
  }

  return (
    <div className={carrosselClass}>
      <h2 className="iq-carrossel__title">
        {title}
      </h2>
      <Staw
        startAt={0}
        visibleGutter={visibleGutterConfig[type]}
        slidesPerView={'auto'}
        hasDots={false}
        hasArrows={hasArrows}
        {...props}
      >
        {children}
      </Staw>
    </div>
  )
};

export default Carrossel;