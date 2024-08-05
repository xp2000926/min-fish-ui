// 传递 theme 主题，生效的区域是它的子组件
// 跨组件层级传递参数（theme）
// Props 1-2 层
// context 深层次

import { Theme } from "min-fish-ui";
import React from "react";
import { useStyles } from "./useStyles.styles";

// 1.  创建context

type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);
export type FishProviderProps = React.HTMLAttributes<
  React.ChildContextProvider<ThemeContextValue>
> & {
  // 主题
  theme: ThemeContextValue;
};
// 2.  创建 Provider
export const FishProvider = ({ className, theme, children, ...restProps }) => {
  const cls = useStyles({ className, theme });
  return (
    <ThemeContext.Provider value={theme} {...restProps}>
      <div className={cls}>{children}</div>
    </ThemeContext.Provider>
  );
};

// 3. 根据 Theme 创建 sccrules
