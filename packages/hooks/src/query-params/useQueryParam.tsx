import { useState } from "react";
import { valueOrEmpty } from "./utils";

type QueryParamReturn<K extends string> = Record<K, string> & {
  update: (value: string) => void;
};

type QueryParamParams<K extends string> = K;

const useQueryParam = <K extends string>(key: QueryParamParams<K>): QueryParamReturn<K> => {
  const isServer = typeof window === "undefined";
  const href = isServer ? "" : window.location.href;

  const [_param, _setParam] = useState(valueOrEmpty(href, key));

  const update = (value: string) => {
    if (isServer) return;

    const url = new URL(href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, "", url.toString()); // silently update URL

    _setParam(value);
  };

  return { [key]: _param, update } as QueryParamReturn<K>;
};

export default useQueryParam;
