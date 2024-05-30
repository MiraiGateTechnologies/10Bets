export interface EventData {
    TOSS: MarketData[];
    "WHO WILL WIN": MarketData[];
    odds_market: OddsMarketData[];
    bookmaker: MarketData[];
    fancy: any[]; // Adjust as needed if there's a known structure for "fancy" when it's populated.
}

export interface MarketData {
    id: number;
    runnerName: string;
    back: number;
    lay: number;
    marketType: string;
    status?: string;  // Optional as it might not be present in all market types
    dateTime: string;
}

export interface OddsMarketData {
    id: number;
    runnerName: string;
    back1: number;
    back2: number;
    back3: number;
    lay1: number;
    lay2: number;
    lay3: number;
    marketType: string;
    dateTime: string;
}
