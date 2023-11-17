import React from 'react';

interface DocumentViewerProps {
  pdfUrl: string; 
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ pdfUrl }) => {
  return (
    <div>
      <iframe
        src={pdfUrl}
        width="100%"
        height="500px" 
        title="PDF Viewer"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default DocumentViewer;
