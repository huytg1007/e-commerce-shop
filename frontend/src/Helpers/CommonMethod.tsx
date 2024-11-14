
export const removeDoubleSlashes = (input: string): string => {
    return input.replace(/\/{1,2}/g, ''); // Remove both single and double slashes
};

export const fetchBlobFromUrl = async (blobUrl: string): Promise<Blob> => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return blob;
};
  
export const createFileFromBlob = (blob: Blob, fileName: string): File => {
    // You can optionally specify the MIME type here if known
    return new File([blob], fileName, { type: blob.type });
};