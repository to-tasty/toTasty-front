export default function TextArea() {
  return (
    <div>
      <p className="mt-2 text-sm text-gray-500">This is a text area component.</p>
      <textarea
        className="w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your text here..."
      ></textarea>
    </div>
  );
}
