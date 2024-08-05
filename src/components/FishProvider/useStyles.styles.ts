import { makeStyles, mergeClasses } from "@griffel/react";
import { FishProviderProps, tokens } from "min-fish-ui";
import { useThemeStyleTag } from "./useThemeStyleTag";

const fishProviderClassNames = {
  root: "fish-ui-FishProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyles = ({ className, theme }: Partial<FishProviderProps>) => {
  const styles = useBaseStyles();
  // 根据 theme 创建 cssrules
  const { themeClassName } = useThemeStyleTag({ theme });

  const cls = mergeClasses(
    fishProviderClassNames.root,
    themeClassName,
    styles.root,
    className
  );

  return cls;
};
