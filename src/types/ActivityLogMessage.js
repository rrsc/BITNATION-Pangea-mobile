// @flow

export type ActivityLogMessage = {
  id: string,
  msg: string,
  params: string,
  interpret: boolean,
  created_at: Date
};
