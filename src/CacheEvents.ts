import { EventEmitter } from "events";

export class CacheEvents {
    /**
     * (key, value)
     */
    static readonly EXPIRE = "expire";
    /**
     * (stat, incAmount, prevAmount)
     */
    static readonly STAT = "stat";

    static readonly ALL: string[] = [CacheEvents.EXPIRE, CacheEvents.STAT];

    static forward(source: EventEmitter, emitter: EventEmitter) {
        CacheEvents.ALL.forEach(e => {
            source.on(e, (...args: any[]) => emitter.emit(e, ...args));
        });
    }
}