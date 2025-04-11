import React from 'react';
import { X } from 'lucide-react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const ResourceModal: React.FC<ResourceModalProps> = ({ isOpen, onClose, url, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-school-blue">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe 
            src={url} 
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceModal;
