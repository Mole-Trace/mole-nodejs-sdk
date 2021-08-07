export interface Config {
  host: string;
  port: number;
  token: number;
  identifier: "uuid" | "header";
}

interface TraceExtra {
  [k: string]: any;
}

export interface BaseTraceConfig {
  group?: string;
  service?: string;
}

export interface Trace extends BaseTraceConfig {
  name: string;

  state?: string | number;
  status?: "success" | "failed" | "pending" | "unknown";
  startedAt?: Date;
  finishedAt?: Date;
  extra?: TraceExtra | TraceExtra[];
}
