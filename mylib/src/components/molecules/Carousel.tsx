import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  MdDownload,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdZoomIn,
  MdZoomOut,
} from 'react-icons/md';
import ToolTip from '../atoms/ToolTip/ToolTip';

type DragPosition = {
  x: number;
  y: number;
};
type CarouselProps = {
  /** The format the images are in */
  imgFormat?: 'byte array' | 'url';
  /** An array of strings either byte arrays or urls determined by the "imgFormat" prop. Currently only one image format can be appliec */
  images: string[];
};

/** A carousel component that can create a caroucel from either byte array or url image format, specified in the props.
 *  When active in the caroucel Images can be zoomed, scrolled and downloaded.
 */
const Carousel = ({ images, imgFormat = 'byte array' }: CarouselProps) => {
  const caroucelRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [imageZoomSize, setImageZoomSize] = useState(100);

  const [isDragging, setIsDragging] = useState(false);
  const [
    dragStartPosition,
    setDragStartPosition,
  ] = useState<DragPosition | null>(null);
  const [
    imageCenterPosition,
    setImageCenterPosition,
  ] = useState<DragPosition | null>(null);

  useEffect(() => {
    caroucelRef.current = caroucelRef.current.slice(
      0,
      images ? images.length : 0
    );
  }, [images]);

  useEffect(() => {
    if (caroucelRef !== null) {
      caroucelRef.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex]);

  const scrollRight = () => {
    let nextLength: number;
    if (images) {
      if (currentIndex < images.length - 1) nextLength = currentIndex + 1;
      else nextLength = currentIndex;
      setCurrentIndex(nextLength);
    }
  };
  const scrollLeft = () => {
    let nextLength: number;
    if (currentIndex > 0) nextLength = currentIndex - 1;
    else nextLength = currentIndex;
    setCurrentIndex(nextLength);
  };

  // zooming
  useEffect(() => {
    if (caroucelRef.current[currentIndex]) {
      if (imageZoomSize <= 100) {
        caroucelRef.current[currentIndex].style.scale = `100%`;
        caroucelRef.current[currentIndex].style.transform =
          'translate(0px, 0px)';
      } else {
        caroucelRef.current[currentIndex].style.scale = `${imageZoomSize}%`;
      }
    }
  }, [imageZoomSize, currentIndex]);
  const zoomIn = () => {
    setImageZoomSize(imageZoomSize + 50);
  };
  const zoomOut = () => {
    if (imageZoomSize >= 150) setImageZoomSize(imageZoomSize - 50);
    else if (imageZoomSize !== 100) setImageZoomSize(100);
  };

  const handleMouseMoveCapture = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (
        isDragging &&
        dragStartPosition &&
        caroucelRef.current[currentIndex]
      ) {
        const ref = caroucelRef.current[currentIndex];

        const width = ref.clientWidth;
        const height = ref.clientHeight;

        // calculate delta
        const deltaX = dragStartPosition.x - e.clientX;
        const deltaY = dragStartPosition.y - e.clientY;

        if (imageCenterPosition) {
          const { x, y } = imageCenterPosition;

          ref.style.transform = `translate(${
            x - deltaX < width ? x - deltaX : width
          }px, ${y - deltaY < height ? y - deltaY : height}px)`;
        }
      }
    },
    [isDragging, dragStartPosition, currentIndex, imageCenterPosition]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (imageZoomSize > 100) {
        setIsDragging(true);
        setDragStartPosition({ x: e.clientX, y: e.clientY });
        const ref = caroucelRef.current[currentIndex];

        if (!ref.style.transform) ref.style.transform = 'translate(0px, 0px)';

        let backgroundPositionArray = ref.style.transform.split('translate(');
        backgroundPositionArray = backgroundPositionArray[1].split(',');
        backgroundPositionArray[1] = backgroundPositionArray[1].replace(
          ')',
          ''
        );

        const width = ref.clientWidth;
        const height = ref.clientHeight;
        let currentX, currentY;
        if (backgroundPositionArray[0].includes('%')) {
          currentX = Number(backgroundPositionArray[0].replace('%', ''));
          // convert to pixels
          currentX = width * (currentX / 100);
        } else {
          currentX = Number(backgroundPositionArray[0].replace('px', ''));
        }
        if (backgroundPositionArray[1].includes('%')) {
          currentY = Number(backgroundPositionArray[1].replace('%', ''));
          // convert to pixels
          currentY = height * (currentY / 100);
        } else {
          currentY = Number(backgroundPositionArray[1].replace('px', ''));
        }

        setImageCenterPosition({ x: currentX, y: currentY });
      }
    },
    [imageZoomSize, currentIndex]
  );

  return (
    <div className="relative">
      <div className="relative flex h-[70vh] flex-row overflow-hidden rounded-md">
        <>
          {images.map((image, i) => (
            <>
              <div className="relative max-h-full w-full shrink-0 overflow-hidden rounded-md">
                <div
                  key={i}
                  ref={el => {
                    el !== null && (caroucelRef.current[i] = el);
                  }}
                  className={`relative h-full max-h-full w-full shrink-0 translate-x-10 translate-y-20 overflow-hidden rounded-md
                transition-all duration-75
                ${
                  imageZoomSize > 100
                    ? isDragging
                      ? 'cursor-grabbing'
                      : 'cursor-grab'
                    : 'cursor-default'
                }`}
                  style={{
                    backgroundImage:
                      imgFormat === 'byte array'
                        ? `url(data:image/png;base64,${image})`
                        : `url("${image}")`,
                    backgroundPosition: '50% 50%',
                    transformOrigin: '50% 50%',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseMove={handleMouseMoveCapture}
                ></div>
              </div>
            </>
          ))}
        </>
      </div>
      {/* Floaters */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-row gap-2 rounded-md bg-black bg-opacity-25 px-2 py-1">
        <>
          {images.map((_img, i) => (
            <div
              className={` h-2 w-2 cursor-pointer rounded-full hover:scale-125 ${
                i === currentIndex ? 'bg-skin-primary' : 'bg-white'
              }`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </>
      </div>
      <div className="absolute right-0 top-0 m-2 flex flex-col items-center justify-center gap-4">
        <>
          {images && (
            <ToolTip text="Download" position="left" nowrap>
              {imgFormat === 'byte array' ? (
                <a
                  download="Image.png"
                  href={`data:image/png;base64,${images[currentIndex]}`}
                  className="cursor-pointer rounded-md bg-black bg-opacity-50 p-1.5 text-white hover:scale-125"
                >
                  <MdDownload className="text-2xl" />
                </a>
              ) : (
                <a
                  download
                  href={images[currentIndex]}
                  className="cursor-pointer rounded-md bg-black bg-opacity-50 p-1.5 text-white hover:scale-125"
                >
                  <MdDownload className="text-2xl" />
                </a>
              )}
            </ToolTip>
          )}
        </>
        <div className="flex flex-col items-center justify-center gap-4">
          <ToolTip text="Zoom In" position="left" nowrap>
            <button
              className="cursor-pointer rounded-md bg-black bg-opacity-50 p-1.5 text-white hover:scale-125"
              onClick={() => zoomIn()}
            >
              <MdZoomIn size={24} />
            </button>
          </ToolTip>
          <ToolTip text="Zoom Out" position="left" nowrap>
            <button
              className="cursor-pointer rounded-md bg-black bg-opacity-50 p-1.5 text-white hover:scale-125"
              onClick={() => zoomOut()}
            >
              <MdZoomOut size={24} />
            </button>
          </ToolTip>
        </div>
      </div>

      {/* Arrows */}
      <div
        className={`absolute right-0 top-1/2 mx-4 -translate-y-1/2 cursor-pointer rounded-md bg-black bg-opacity-25 text-white ${
          images && currentIndex < images.length - 1 ? 'visible' : 'invisible'
        }`}
        onClick={scrollRight}
      >
        <MdKeyboardArrowRight size={35} />
      </div>
      <div
        className={`absolute left-0 top-1/2 mx-4 -translate-y-1/2 cursor-pointer rounded-md bg-black bg-opacity-25 text-white ${
          currentIndex > 0 ? 'visible' : 'invisible'
        }`}
        onClick={scrollLeft}
      >
        <MdKeyboardArrowLeft size={35} />
      </div>
    </div>
  );
};

export default Carousel;
