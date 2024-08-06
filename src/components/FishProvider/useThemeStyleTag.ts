import * as React from "react";
import { FishProviderProps } from "min-fish-ui";
import { createCSSRuleFromTheme } from "./createCSSRuleFromTheme";

// 生成 style 标签
const createStyleTag = (
  target: Document | undefined,
  elementAttributes: Record<string, string>
) => {
  if (!target) {
    return undefined;
  }

  const tag = target.createElement("style");

  Object.keys(elementAttributes).forEach((attrName) => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });

  target.head.appendChild(tag);
  return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }

    sheet.insertRule(rule, 0);
  }
};

export const useThemeStyleTag = ({ theme }: Partial<FishProviderProps>) => {
  const targetDocument = document;

  const generatedId = React.useId();
  // id里冒号，冒号不能用在 css类名中，所以去掉
  const escapedId = React.useMemo(
    () => generatedId.replace(/:/g, ""),
    [generatedId]
  );
  // 唯一类名，css 规则
  const themeClassName = "fish-ui-FishProvider" + escapedId;

  //根据 theme 生成css 规则
  //   console.log("theme", theme);
  const rule = React.useMemo(
    () => createCSSRuleFromTheme(`.${themeClassName}`, theme),
    [theme, themeClassName]
  );
  // console.log("rule", rule);
  //生成 style 标签
  const styleTag = React.useRef<HTMLStyleElement | undefined | null>();
  React.useLayoutEffect(() => {
    styleTag.current = createStyleTag(targetDocument, {
      id: themeClassName,
    });
    if (styleTag.current) {
      insertSheet(styleTag.current, rule);
    }

    return () => {
      styleTag.current?.remove();
    };
  }, [themeClassName, targetDocument, rule]);
  console.log(
    "%c [themeClassName]-64",
    "font-size: 13px;background:pink;color:#bf2c9f",
    themeClassName
  );

  return { themeClassName, rule };
};
