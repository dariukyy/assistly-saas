function EditChatbot({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="px-0 md:p-10">
      <div>
        <h2 className="text-white text-sm font-bold">Link to Chat</h2>
        <p className="text-sm italic text-white">
          Share this link with your customers to start conversations with your
          chatbot
        </p>
      </div>
    </div>
  );
}

export default EditChatbot;
