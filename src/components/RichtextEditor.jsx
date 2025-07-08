import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useCallback } from "react";

// Helper function for debouncing
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// Image upload handler (replace with your actual implementation)
const uploadImage = async (file) => {
  // Example: Upload to Cloudinary/S3/your backend
  return "https://example.com/uploaded-image.jpg";
};

const RichTextEditor = ({
  initialContent = "<p>Enter job description here...</p>",
  onSave,
}) => {
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get your FREE API key from https://www.tiny.cloud/
  const apiKey = import.meta.env.VITE_TINYMACE_KEY;

  const handleSave = useCallback(() => {
    try {
      if (editorRef.current) {
        const content = editorRef.current.getContent();
        onSave(content);
      }
    } catch (err) {
      console.error("Failed to save content:", err);
      setError("Failed to save job description");
    }
  }, [onSave]);

  // Toolbar configuration
  const toolbarConfig = [
    "undo redo | blocks | bold italic underline",
    "alignleft aligncenter alignright | bullist numlist outdent indent",
    "link image | removeformat | help",
  ].join(" | ");

  return (
    <div className="job-description-editor space-y-2">
      {error && (
        <div className="text-red-500 p-2 bg-red-50 rounded">{error}</div>
      )}

      {isLoading && <div className="text-gray-500">Loading editor...</div>}

      <Editor
        apiKey={apiKey}
        onInit={(evt, editor) => {
          editorRef.current = editor;
          setIsLoading(false);
        }}
        initialValue={initialContent}
        init={{
          height: 500,
          menubar: false,
          plugins: "lists link autolink image charmap table wordcount", // Updated plugin list
          toolbar: toolbarConfig,
          content_style: `
          body {
            font-family: 'Inter', Arial, sans-serif;
            font-size: 14px;
            line-height: 1.5;
          }
          ul, ol {
            padding-left: 20px;
            margin: 10px 0;
          }
        `,
          images_upload_handler: uploadImage,
          setup: (editor) => {
            editor.on("keyup change", debounce(handleSave, 30000));
          },
          // Add CDN configuration:
          base_url: `https://cdn.tiny.cloud/1/${apiKey}/tinymce/6`,
          suffix: ".min",
        }}
      />

      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Save Description
      </button>
    </div>
  );
};

export default RichTextEditor;
