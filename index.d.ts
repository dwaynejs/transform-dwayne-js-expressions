export interface Options {
  unscopables?: string[];
  sourceMap?: boolean;
  filename?: string;
  keepScope?: boolean;
  thisVarName?: string;
  useES6?: boolean;
  startLine?: number;
  startColumn?: number;
  startPosition?: number;
}

export interface SourceMap {
  version: number;
  sources: string[];
  sourcesContent: string[];
  names: string[];
  mappings: string;
  sourceRoot?: string;
  file?: string;
}

export = function (code: string, options?: Options): {
  code: string,
  map: SourceMap,
  vars: string[],
  generatedThisVar: boolean
};
