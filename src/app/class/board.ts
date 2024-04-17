    // ./src/app/board.ts

    import { Player } from './player'
    export class Board {
      player: Player | undefined;
      tiles: Object[] | undefined;

      constructor(values: Object = {}) {
        Object.assign(this, values);
      }
    }
