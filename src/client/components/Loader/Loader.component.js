import React from 'react';
import PropTypes from 'prop-types';
import './loader-component.css';

export default function Loader({ scale, color, withText }) {
  return (
    <div className="loader-component">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          background: '0 0',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width={50 * scale}
        height={50 * scale}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(80 50)">
          <circle r={6} fill={color}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-1.1217948717948718s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-1.1217948717948718s"
            />
          </circle>
        </g>
        <g transform="rotate(45 -50.355 121.569)">
          <circle r={6} fill={color} fillOpacity={0.875}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.9615384615384615s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.9615384615384615s"
            />
          </circle>
        </g>
        <g transform="rotate(90 -15 65)">
          <circle r={6} fill={color} fillOpacity={0.75}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.8012820512820512s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.8012820512820512s"
            />
          </circle>
        </g>
        <g transform="rotate(135 -.355 41.569)">
          <circle r={6} fill={color} fillOpacity={0.625}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.641025641025641s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.641025641025641s"
            />
          </circle>
        </g>
        <g transform="rotate(180 10 25)">
          <circle r={6} fill={color} fillOpacity={0.5}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.4807692307692307s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.4807692307692307s"
            />
          </circle>
        </g>
        <g transform="rotate(-135 20.355 8.431)">
          <circle r={6} fill={color} fillOpacity={0.375}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.3205128205128205s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.3205128205128205s"
            />
          </circle>
        </g>
        <g transform="rotate(-90 35 -15)">
          <circle r={6} fill={color} fillOpacity={0.25}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.16025641025641024s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.16025641025641024s"
            />
          </circle>
        </g>
        <g transform="rotate(-45 70.355 -71.569)">
          <circle r={6} fill={color} fillOpacity={0.125}>
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1.282051282051282s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            />
          </circle>
        </g>
      </svg>
      {withText && <p>Loading...</p>}
    </div>
  );
}

Loader.propTypes = {
  scale: PropTypes.number,
  color: PropTypes.string,
  withText: PropTypes.bool,
};

Loader.defaultProps = {
  scale: 1,
  color: '#ff1493',
  withText: true,
};
