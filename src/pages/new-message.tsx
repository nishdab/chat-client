import NewMessage from "@/components/message/NewMessage";
import MainLayout from "./layout";
import { NewMessageProps } from "@/types/types";

const NewMessagePage: React.FC<NewMessageProps> = ({ users }) => {
  return (
    <MainLayout>
      <NewMessage users={users} />
    </MainLayout>
  );
};

export default NewMessagePage;
