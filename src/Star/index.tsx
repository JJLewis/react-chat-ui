import * as React from 'react';
import StarProps from "./interface";

const defaultStarStyles = {
  color: '#000000',
  size: 24,
};

export default class Star extends React.Component {
  props;

  constructor(props: StarProps) {
      super(props);
  }

  public render() {

    let { style } = this.props;
    style = style || defaultStarStyles;
    let starred = this.props.starred || false;

    const starFull = (
      <svg fill={style.color} height={style.size} width={style.size} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    );

    const starBorder = (
      <svg fill={style.color} height={style.size} width={style.size} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    );

    return (
      <div style={{float:(this.props.isUser ? 'right':'left')}}>
        {starred ? starFull : starBorder}
      </div>
    );
  }
}

export { StarProps };