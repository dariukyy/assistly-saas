"use client";

import { REMOVE_CHARACTERISTIC } from "@/graphql/mutations/mutations";
import { ChatbotCharacteristic } from "@/types/types";
import { useMutation } from "@apollo/client";
import { CircleX } from "lucide-react";
import { toast } from "sonner";

function Characteristic({
  characteristic,
}: {
  characteristic: ChatbotCharacteristic;
}) {
  const [removeCharacteristic] = useMutation(REMOVE_CHARACTERISTIC, {
    refetchQueries: ["GetChatbotById"],
  });

  async function handleRemoveCharateristic(characteristicId: number) {
    try {
      await removeCharacteristic({
        variables: {
          characteristicId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <li
      key={characteristic.id}
      className="relative p-10 bg-white border rounded-md"
    >
      {characteristic.content}
      <CircleX
        className="w-6 h-6 text-white fill-red-500 absolute top-1 right-1 cursor-pointer hover:opacity-50"
        onClick={() => {
          const promise = handleRemoveCharateristic(characteristic.id);
          toast.promise(promise, {
            loading: "Removing...",
            success: "Characteristic removed",
            error: "Failed to remove characteristic",
          });
        }}
      />
    </li>
  );
}

export default Characteristic;
