const ChartIcon = ({
  size = 40,
  color = '#000000',
  strokeWidth = 0,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 24 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill="currentColor" d="M12 7c0-.684.343-1.287.866-1.648A5.574 5.574 0 0 0 7.43 1a.436.436 0 0 0-.43.445V6.5a.5.5 0 0 0 .5.5zM8 2.035A4.574 4.574 0 0 1 11.965 6H8zM1 7.501a5.5 5.5 0 0 0 5 5.477v-1.005a4.5 4.5 0 0 1-1-8.716V7a2 2 0 0 0 2 2h2c0-.364.097-.706.268-1H7a1 1 0 0 1-1-1V2.571c0-.294-.253-.526-.542-.47A5.5 5.5 0 0 0 1 7.5M14 6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m-3 2a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-4 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z"/>
    </svg>
  );
};

export default ChartIcon;