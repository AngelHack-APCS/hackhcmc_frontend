import * as React from 'react'

const RecordingBackdrop = ({ isRecording, onClose }) => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity ${isRecording ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white p-6 rounded-lg shadow-xl text-center">
        <p className="text-xl mb-4">Recording...</p>
        <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse mx-auto mb-4"></div>
        <button 
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Stop Recording
        </button>
      </div>
    </div>
);

export default RecordingBackdrop

