import clsx from "clsx";
import type { FC } from "react";

type Props = {
  className?: string;
  size?: "large" | "small";
  iconColor?: "white" | "gray";
};

export const InstagramIcon: FC<Props> = ({ size, iconColor, className }) => {
  const classes = clsx([
    {
      "w-8 h-8": size === "large",
      "w-6 h-6": size === "small",
      "text-white": iconColor === "white",
      "text-gray-600": iconColor === "gray",
    },
    className,
  ]);

  return (
    <svg className={classes} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z" />
    </svg>
  );
};

// Propsのデフォルト値
InstagramIcon.defaultProps = {
  className: "cursor-pointer",
  size: "small",
};
