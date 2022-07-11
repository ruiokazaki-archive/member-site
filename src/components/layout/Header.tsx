/* eslint-disable @next/next/no-img-element */
import { FC, memo, useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import Image from "next/image";
import { currentUserState } from "src/global-states/atoms";
import { BellIcon } from "../ui-libraries/icon/BellIcon";
import { SettingModal } from "../feature/SettingModal";
import { NotificationModal } from "../feature/NotificationModal";

export const NavItem: FC = memo(() => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const default_url = "/default_icon.jpeg";
  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className="flex gap-5 items-center">
      <div
        onClick={() => {
          setOpenNotification(!openNotification);
        }}
        className="cursor-pointer select-none"
      >
        <BellIcon />
      </div>
      <NotificationModal bellOpened={openNotification} setBellOpened={setOpenNotification} />
      <button
        onClick={() => {
          setOpenSetting(!openSetting);
        }}
      >
        <img
          src={currentUser?.photoURL ? currentUser.photoURL : default_url}
          alt="ユーザ"
          className="w-10 h-10 rounded-full hover:opacity-90"
        />
      </button>
      <SettingModal
        opened={openSetting}
        setOpened={() => {
          setOpenSetting(!openSetting);
        }}
      ></SettingModal>
    </div>
  );
});
NavItem.displayName = "NavItem";

export const Header: FC = memo(() => {
  return (
    <header className="flex sticky top-0 z-10 justify-between items-center py-3 px-4 h-12 border-b">
      <Link href={"/"}>
        <Image src={"/favicons/favicon-32x32.png"} width={32} height={32} alt="Tech.Uniアイコン" />
      </Link>
      <NavItem />
    </header>
  );
});
Header.displayName = "Header";

// 通知・ユーザーアイコンをクリックした時に、モーダル表示する
