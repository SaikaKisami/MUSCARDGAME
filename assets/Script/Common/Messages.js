export const MESSAGE_TYPE = {
  // Messages from Server to Client
  SC_SET_CARDS: "SC_SET_CARDS",
  SC_ADD_CARDS: "SC_ADD_CARDS",
  SC_DO_MUS_CLAIM: "SC_DO_MUS_CLAIM",
  SC_DO_MUS_DISCARD: "SC_DO_MUS_DISCARD",
  SC_DO_MUS_ALARM: "SC_DO_MUS_ALARM",
  SC_DO_DISCARD_ALARM: "SC_DO_DISCARD_ALARM",
  SC_DO_BIG: "SC_DO_BIG",
  SC_DO_SMALL: "SC_DO_SMALL",
  SC_DO_PAIRS: "SC_DO_PAIRS",
  SC_DO_GAME: "SC_DO_GAME",
  SC_DO_POINTS: "SC_DO_POINTS",
  SC_DO_ALARM: "SC_DO_ALARM",
  SC_DO_END_ROUND: "SC_DO_END_ROUND",
  SC_EVAL_PAIRS: "SC_EVAL_PAIRS",
  SC_EVAL_GAME: "SC_EVAL_GAME",
  SC_SHARE_POINT: "SC_SHARE_POINT",
  SC_SEND_POINT: "SC_SEND_POINT",
  SC_DISPLAY_DISCARD: "SC_DISPLAY_DISCARD",

  // Messsages from Client to Server
  CS_CLAIM_MUS: "CS_CLAIM_MUS",
  CS_DISCARD_CARDS: "CS_DISCARD_CARDS",
  CS_ACTION_ACCEPT: "CS_ACTION_ACCEPT",
  CS_ACTION_PASS: "CS_ACTION_PASS",
  CS_ACTION_ALLIN: "CS_ACTION_ALLIN",
  CS_ACTION_ENVIDO: "CS_ACTION_ENVIDO",
  CS_ACTION_BET_MORE: "CS_ACTION_BET_MORE",
  CS_RESTART: "CS_RESTART",
};

export const ROUNDS = {
  MUS_CLAIM: 0,
  MUS_DISCARD: 1,
  BIG: 2,
  SMALL: 3,
  EVAL_PAIRS: 3.5,
  PAIRS: 4,
  EVAL_GAME: 4.5,
  GAME: 5,
  POINTS: 6,
  SHAREPOINTS: 7,
  END: 8,
};
