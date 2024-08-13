import client from "@/graphql/apolloClient";
import {
  INSERT_CHAT_SESSION,
  INSERT_GUEST,
  INSERT_MESSAGE,
} from "@/graphql/mutations/mutations";

export async function startNewChat(
  guestName: string,
  guestEmail: string,
  chatbotId: number,
  created_at: string
) {
  try {
    // 1. create a new guest entry
    const guestResult = await client.mutate({
      mutation: INSERT_GUEST,
      variables: { name: guestName, email: guestEmail, created_at },
    });

    const guestId = guestResult.data.insertGuests.id;

    // 2. initialize a new chat session

    const chatSessionResult = await client.mutate({
      mutation: INSERT_CHAT_SESSION,
      variables: { chatbot_id: chatbotId, created_at, guest_id: guestId },
    });

    const chatSessionId = chatSessionResult.data.insertChat_sessions.id;
    // 3. insert initial message

    await client.mutate({
      mutation: INSERT_MESSAGE,
      variables: {
        chat_session_id: chatSessionId,
        content: `Welcome ${guestName}!\n How can I assist you today? 🙂  `,
        sender: "ai",
        created_at: new Date().toISOString(),
      },
    });

    console.log("New Chat session started successfully");
    return chatSessionId;
  } catch (error) {
    console.error("Error starting new chat:", error);
  }
}
