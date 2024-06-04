import { useRouter } from "next/router";
import MainLayout from "../layout";
import ChatComponent from "../../components/direct-message/DirectMessageComponent";
import users from "./users.json";
import { useEffect, useState } from "react";
import NoDataFound from "@/components/exception/NoDataFound";
import { User } from "@/types/types";

const UserPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  console.log(router.query);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((user) => user.id === Number(userId));
      if (foundUser) {
        setSelectedUser(foundUser);
        setLoading(false);
      } else {
        console.error(`User with ID ${userId} not found`);
        setLoading(false);
      }
    }
  }, [userId]);

  if (loading) {
    return <MainLayout>Loading...</MainLayout>;
  }

  return (
    <MainLayout>
      {selectedUser ? (
        <ChatComponent user={selectedUser} />
      ) : (
        <NoDataFound type="user" />
      )}
    </MainLayout>
  );
};

export default UserPage;
