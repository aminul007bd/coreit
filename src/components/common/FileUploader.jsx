import { Button, Code, FileUpload, Stack, useFileUpload } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import { useEffect } from "react";

const FileUploader = ({ onFileUpload, setFileUploadInstance, error }) => {
  const accept = {
    "text/csv": [".csv"],
    "text/xls": [".xls"],
    "text/xlsx": [".xlsx"],
  };

  const fileUpload = useFileUpload({
    maxFiles: 1,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    accept: accept,
  });

  const accepted = fileUpload.acceptedFiles.map((file) => file.name);
  const rejected = fileUpload.rejectedFiles.map((e) => ({
    name: e.file.name,
    errors: e.errors,
  }));
  const invalidFileType = rejected[0]?.errors[0];

  // Monitor accepted files and trigger file upload validation
  useEffect(() => {
    if (accepted.length > 0) {
      onFileUpload(fileUpload.acceptedFiles);
    }
  }, [accepted, onFileUpload, fileUpload.acceptedFiles]);

  const clearFiles = () => {
    fileUpload.clearFiles();
  };

  useEffect(() => {
    if (setFileUploadInstance) {
      setFileUploadInstance(() => clearFiles);
    }
  }, [setFileUploadInstance]);

  return (
    <Stack align="flex-start" marginTop={2} marginBottom={2}>
      <FileUpload.RootProvider value={fileUpload}>
        <FileUpload.HiddenInput required /> {/* Chakra UI "required" here */}
        <FileUpload.Trigger asChild>
          <Button variant="outline" size="sm">
            <HiUpload /> Upload file
          </Button>
        </FileUpload.Trigger>
        <FileUpload.List />
      </FileUpload.RootProvider>
      {fileUpload && accepted.length > 0 && (
        <Code colorPalette="green">accepted: {accepted.join(", ")}</Code>
      )}
      {fileUpload && rejected.length > 0 && <Code colorPalette="red">{invalidFileType}</Code>}
      {fileUpload && accepted.length === 0 && <Code colorPalette="red">File is required</Code>}
    </Stack>
  );
};

export default FileUploader;
