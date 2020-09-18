import React from "react";

export enum ESizes {
  tiny = "w-8 h-8",
  small = "w-10 h-10",
  medium = "w-12 h-12",
  large = "w-16 h-16",
  giant = "w-20 h-20",
}

export enum ENameTextSizes {
  tiny = "text-xs font-bold",
  small = "text-sm",
  medium = "text-base",
  large = "text-lg",
  giant = "text-xl",
}

export enum ETitleTextSizes {
  tiny = "text-xs",
  small = "text-xs",
  medium = "text-xs",
  large = "text-sm",
  giant = "text-sm",
}

export enum EShapes {
  rectangle = "rounded-none",
  "semi-round" = "rounded-md",
  round = "rounded-full",
}

export type AvatarProps = {
  size?: "tiny" | "small" | "medium" | "large" | "giant";
  shape?: "rectangle" | "semi-round" | "round";
  title?: string;
  picture?: string;
  showInitials?: boolean;
  showName?: boolean;
  showTitle?: boolean;
  name?: string;
  color?: string;
};

export const Avatar = (props: AvatarProps) => {
  const {
    size = "medium",
    shape = "round",
    title,
    picture,
    showInitials = true,
    showName = true,
    showTitle = true,
    name,
    color = "#2A6466",
  } = props;

  let chosenSize = ESizes[size];
  let nameTextSize = ENameTextSizes[size];
  let titleTextSize = ETitleTextSizes[size];
  let chosenShape = EShapes[shape];
  return (
    <div className="flex items-center">
      {/* PICTURE START */}
      {picture ? (
        <div
          data-testid="img-container"
          style={{ backgroundImage: `url(${picture})` }}
          className={`${chosenSize} ${chosenSize} ${chosenShape} bg-cover bg-no-repeat`}
        />
      ) : (
        <div
          style={{ backgroundColor: color }}
          className={`flex justify-center items-center text-white ${chosenSize} ${chosenSize} ${chosenShape} ${nameTextSize}`}
        >
          {showInitials &&
            name
              ?.split(" ")
              .map((w) => w[0])
              .join("")
              .toUpperCase()}
        </div>
      )}
      {/* PICTURE END */}

      <div className="flex flex-col ml-2">
        {showName && <span className={`${nameTextSize}`}>{name}</span>}
        {showTitle && <span className={`${titleTextSize}`}>{title}</span>}
      </div>
    </div>
  );
};
