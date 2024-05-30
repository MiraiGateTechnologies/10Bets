import { GameType } from '../models/game-types.enum';

export interface GameDetails {
    back1: number;
    back11: number;
    back12: number;
    eventName: string;
    myGameType: GameType;
    code: number;
    statsTitle: string;
    gameTime: string;
    gameId: string;
    inPlay: string;  // Assuming boolean type for real use
    lay1: number;
    lay11: number;
    lay12: number;
    marketId: string;
}