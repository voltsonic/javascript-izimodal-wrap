interface iziModalWrapThemeWrap {
    it: (themeKey: string) => iziModalWrapThemeWrap;
    title: (title: string, subTitle?: string) => iziModalWrapThemeWrap;
    icon: (icon: string, iconText?: string) => iziModalWrapThemeWrap;
    end: () => iziModalWrap;
}
