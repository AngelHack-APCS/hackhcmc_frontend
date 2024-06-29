import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const useUpload = ({ onError, onResolved, options, spec }) => {
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      if (fileRejections[0].errors[0].code === 'file-too-large') {
        onError && onError(`File is larger than ${spec.max_size_mb} MB`);
      } else {
        onError && onError(fileRejections[0].errors[0].message);
      }
    }

    if (!acceptedFiles.length) return;
    return onResolved(acceptedFiles);
  }, [spec]);

  let dzAccept = {};
  const accept = spec.accept;

  if (Array.isArray(accept)) {
    accept.forEach((a) => {
      if (typeof a === 'string') {
        dzAccept[a] = [];
      }
    });
  } else if (typeof accept === 'object') {
    dzAccept = accept;
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: spec.max_files || undefined,
    accept: dzAccept,
    maxSize: (spec.max_size_mb || 2) * 1000000,
    ...options
  });

  return { getInputProps, getRootProps, isDragActive };
};

export { useUpload };
