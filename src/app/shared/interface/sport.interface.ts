export interface MatchData {
    code: string;
    bits: Bits;
    sessionPM: number;
    title: string;
    matchMax: number;
    oddsLink: string;
    matchcode: string;
    usedLimit: number;
    sessionBet: SessionBet[];
    name: string;
    matchBet: any[];
    coin: number;
    status: boolean;
    matchMin: number;
    streamLink: string;
  }
  
  interface Bits {
    [key: string]: number;
  }
  
  export interface SessionBet {
    autono: number;
    sessionname: string;
    bitamount: number;
    bitrate: string;
    bitrun: number;
    bitmode: string;
    run: number;
    status: boolean;
  }

  export interface MatchOdds {
    id: number;
    team: string;
    krate: number;
    lrate: number;
    matchcode:any
  }
    