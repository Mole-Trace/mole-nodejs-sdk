import { Config, Trace, BaseTraceConfig } from "../types";

export class Mole {
  config: (Config & BaseTraceConfig) | null;

  constructor(config: Config & BaseTraceConfig) {
    this.config = config;
  }

  init() {
    // this.config
  }

  trace(params: Trace) {}
}

const Redis = require("ioredis");
const redis = new Redis();

redis.set("foo", "bar");
