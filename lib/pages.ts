export const URLS: Record<string, string | undefined> = {
  "/": "https://example.com",
};

export const INDEXES: Record<string, number | undefined> = {
  "/": 0,
};

type Mapping = { path: string; url: string };
type UninitMapping = Pick<Mapping, "path"> & Partial<Omit<Mapping, "path">>;

const _INDEXED_MAPPING: Array<UninitMapping> = [{ path: "/" }];
_INDEXED_MAPPING.map(({ path }) => ({ path, url: URLS[path] }));

if (_INDEXED_MAPPING.filter(({ url }) => url !== undefined).length !== 0) {
  throw "implements error: mappings are uncompleted";
}
export const INDEXED_MAPPING: Array<Mapping> =
  _INDEXED_MAPPING as unknown as Array<Mapping>;
