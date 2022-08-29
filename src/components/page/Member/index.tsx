import { useEffect, FC } from "react";
import { Text } from "@mantine/core";
import { ComitteeCard, MemberCard } from "src/components/feature/Member/MemberCard";
import { Layout } from "src/components/layout";
import { AppLoading } from "src/components/ui-libraries/AppLoading";
import { useCurrentUser } from "src/global-states/atoms";
import { useFetchMembers } from "src/hooks/user/useFetchUserList";
import { User } from "src/modules/user/user.entity";

export const Member: FC = () => {
  const { currentUser } = useCurrentUser();
  const { fetchUser, userList, isLoading } = useFetchMembers();

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading || userList == null || currentUser == null) return <AppLoading />;

  const myField = currentUser?.field;
  const displayMyFieldMembers: () => JSX.Element | JSX.Element[] = () => {
    const myFieldMembers: User[] = userList.filter((user) => {
      const isMyFieldMember: boolean = user.field === myField;
      const isNotCurrentUser: boolean = user.uid !== currentUser.uid;
      return isMyFieldMember && isNotCurrentUser;
    });

    if (myFieldMembers.length === 0) return <Text>いないようです😭</Text>;
    return myFieldMembers.map((myFieldMember) => {
      return <MemberCard key={myFieldMember.uid} data={myFieldMember} />;
    });
  };

  return (
    <Layout>
      <div className="flex w-full flex-col flex-wrap gap-5">
        <div className="pt-5">
          <Text weight="bold">コミッティー</Text>
          <div className="flex flex-wrap gap-5">
            {userList
              .filter((user) => {
                const isDistinctLeaderPosition = user.position === 3 || user.position === 4 || user.position === 5;
                return isDistinctLeaderPosition;
              })
              .map((user) => (
                <ComitteeCard key={user.uid} {...user} />
              ))}
          </div>
        </div>
        <div>
          <Text weight="bold">{myField}を専門としているメンバー</Text>
          <div className="flex gap-2 rounded-md bg-white py-6 px-4 shadow-md">{displayMyFieldMembers()}</div>
        </div>
        <Text weight="bold">全員</Text>
        <div className="flex gap-2 rounded-md bg-white py-6 px-4 shadow-md">
          {userList.map((user) => {
            return <MemberCard data={user} key={user.uid} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

// TODO: リファクタ 📝
// 専門メンバーと全員でコンポーネント共通化できそう
// コミッティーでもできるかも？？

// TODO: 実装メモ 🚧
// myFieldを設定していない場合どうするのか？？
