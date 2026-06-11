import { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  alt?: string;
  caption?: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, alt, caption, onClose }: ImageModalProps) {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.max(0.5, Math.min(4, prev + delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all"
        aria-label="Fermer"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="absolute top-4 left-4 z-[110] flex gap-2">
        <button
          onClick={handleZoomIn}
          disabled={scale >= 4}
          className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Zoom avant"
        >
          <ZoomIn className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleZoomOut}
          disabled={scale <= 0.5}
          className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Zoom arrière"
        >
          <ZoomOut className="w-6 h-6 text-white" />
        </button>
        {scale !== 1 && (
          <button
            onClick={resetZoom}
            className="px-3 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all text-white text-sm font-light"
          >
            Réinitialiser
          </button>
        )}
      </div>

      <div
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <img
          src={imageUrl}
          alt={alt || ''}
          className="max-w-full max-h-[90vh] object-contain select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
          draggable={false}
        />
      </div>

      {caption && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-lg max-w-2xl text-center">
          <p className="text-sm font-light">{caption}</p>
        </div>
      )}
    </div>
  );
}
