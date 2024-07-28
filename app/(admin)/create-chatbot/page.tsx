import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@apollo/client";

function CreateChatbot() {
  const [chatbotName] = useMutation();

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10">
      <Avatar seed="create-chatbot" />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create a new chatbot to assist you in your coversations with
          customers.
        </h2>
        <form className="flex flex-col md:flex-row gap-5 mt-5">
          <Input
            type="text"
            required
            placeholder="Chatbot Name..."
            className="max-w-lg "
          />
          <Button>Create Chatbot</Button>
        </form>

        <p className="text-gray-300 mt-5">Example: Customer Support Chatbot</p>
      </div>
    </div>
  );
}

export default CreateChatbot;
