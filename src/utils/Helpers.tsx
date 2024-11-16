export const updateURLParams = (param: string, value: string): void => {
    const params = new URLSearchParams(location.search);
    params.set(param, value);
    window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
};

export const deleteURLParams = (param: string): void => {
    const params = new URLSearchParams(location.search);
    params.delete(param);
    window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
};
