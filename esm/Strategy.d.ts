import { Action } from './Action';
/**
 *
 * @category Base Classes
 */
export declare class Strategy {
    name: string;
    subSlots: any;
    actions: Array<Action>;
    triggers: Array<Action>;
    numSubSlots: number;
    constructor(name: string);
    addSubSlot(name: string, type: string): void;
    addTrigger(newTrigger: Action): void;
    addAction(newAction: Action): void;
    print(): void;
    getSubSlots(): any;
    encodeForDsProxyCall(): (string | string[] | number[][])[];
}
