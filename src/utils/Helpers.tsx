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

export const getURLParam = (param: string): string | null => {
    const params = new URLSearchParams(location.search);
    return params.get(param);
};

export const getPathSegment = (): any => {
    const segments = ['events', 'characters', 'stories', 'comics'];
    return segments.find((segment) => window.location.pathname.includes(segment)) || null;
  };