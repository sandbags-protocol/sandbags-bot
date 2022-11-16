export enum SandbagsBotJudgerResult {
  reject = 0,
  pass = 1,
}

export interface SandbagsBotBaseJudger {
  process: (sandbags: any) => SandbagsBotJudgerResult
}
