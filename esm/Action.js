var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Action_instances, _Action__getArgumentMappingWithSlots, _Action__getPlaceholderForType;
import AbiCoder from 'web3-eth-abi';
import { keccak256 } from 'web3-utils';
import ActionAbi from './abis/Action.json';
/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
 *
 * @category Base Classes
 */
export class Action {
    /**
     * @param name
     * @param contractAddress
     * @param paramTypes
     * @param args
     */
    constructor(name, contractAddress, paramTypes, args) {
        // if (new.target === Action) throw new TypeError("Actions are instantiated using derived classes");
        _Action_instances.add(this);
        if (paramTypes.length !== args.length)
            throw new Error('Parameters/arguments length mismatch');
        this.contractAddress = contractAddress;
        this.paramTypes = paramTypes;
        this.name = name;
        this.args = args;
        this.mappableArgs = args; // TODO change to class method
    }
    /**
     *
     */
    getId() {
        return keccak256(this.name).substr(0, 10);
    }
    /**
     *
     */
    _getArgumentMapping() {
        return this.mappableArgs.map(arg => {
            if (new RegExp(/\$\d+/).test(arg)) {
                if (Array.isArray(arg))
                    throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
                // eslint-disable-next-line
                return parseInt(arg.substr(1));
            }
            return 0;
        });
    }
    _parseParamType(paramType, arg) {
        if (typeof (paramType) === 'string') {
            if (paramType.startsWith('(')) {
                let _paramType = paramType.replace('(', '');
                _paramType = _paramType.replace(')', '');
                return _paramType.split(',');
            }
            if (paramType.endsWith('[]')) {
                return Array.from(Array(arg.length).fill(paramType.replace('[]', '')));
            }
        }
        return paramType;
    }
    /**
     *
     */
    _replaceWithPlaceholders(arg, paramType) {
        const paramTypeParsed = this._parseParamType(paramType, arg);
        if (Array.isArray(arg))
            return arg.map((_arg, i) => this._replaceWithPlaceholders(_arg, paramTypeParsed[i]));
        if (typeof (paramType) === 'string') {
            if (new RegExp(/\$\d+/).test(arg))
                return __classPrivateFieldGet(this, _Action_instances, "m", _Action__getPlaceholderForType).call(this, paramType);
            if (new RegExp(/&\w+/).test(arg))
                return __classPrivateFieldGet(this, _Action_instances, "m", _Action__getPlaceholderForType).call(this, paramType);
        }
        return arg;
    }
    /**
     *
     */
    _formatType(paramType) {
        if (Array.isArray(paramType))
            return `(${paramType.map((_paramType) => this._formatType(_paramType))})`;
        return paramType;
    }
    /**
     * Encode arguments for calling the action directly
     * @returns bytes-encoded args
     *
     */
    _encodeForCall() {
        const _arg = this._replaceWithPlaceholders(this.args, this.paramTypes);
        const _paramType = this._formatType(this.paramTypes);
        return [AbiCoder.encodeParameter(_paramType, _arg)];
    }
    encodeForL2DsProxyCall() {
        const executeActionDirectAbi = (ActionAbi.find(({ name }) => name === 'executeActionDirect'));
        return AbiCoder.encodeFunctionCall(executeActionDirectAbi, this._encodeForCall());
    }
    encodeForL2Recipe() {
        return this._encodeForCall()[0];
    }
    /**
     * Encode arguments for calling the action via DsProxy
     * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
     */
    encodeForDsProxyCall() {
        const executeActionDirectAbi = (ActionAbi.find(({ name }) => name === 'executeActionDirect'));
        return [
            this.contractAddress,
            AbiCoder.encodeFunctionCall(executeActionDirectAbi, this._encodeForCall()),
        ];
    }
    /**
     * Encodes action for Recipe call
     */
    encodeForRecipe() {
        return [
            this._encodeForCall()[0],
            '0x0000000000000000000000000000000000000000000000000000000000000000',
            this.getId(),
            this._getArgumentMapping(), // paramMappings
        ];
    }
    encodeForStrategy(subSlots) {
        return [
            this.getId(),
            __classPrivateFieldGet(this, _Action_instances, "m", _Action__getArgumentMappingWithSlots).call(this, subSlots), // paramMappings
        ];
    }
    /**
     * Assets requiring approval to be used by DsProxy
     * Approval is done from owner to DsProxy
     */
    getAssetsToApprove() {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * ETH value to be sent with transaction
     * @returns ETH value in wei
     */
    getEthValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return '0';
        });
    }
}
_Action_instances = new WeakSet(), _Action__getArgumentMappingWithSlots = function _Action__getArgumentMappingWithSlots(subSlots) {
    return this.mappableArgs.map(arg => {
        if (new RegExp(/\$\d+/).test(arg)) {
            if (Array.isArray(arg))
                throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
            // eslint-disable-next-line
            return parseInt(arg.substr(1));
        }
        // Handle SubSlots placeholder values in strategies
        if (new RegExp(/&\w+/).test(arg)) {
            if (arg === '&proxy')
                return 254;
            if (arg === '&eoa')
                return 255;
            // eslint-disable-next-line
            return parseInt(subSlots[arg].index);
        }
        return 0;
    });
}, _Action__getPlaceholderForType = function _Action__getPlaceholderForType(type) {
    // TODO handle arrays?
    // eslint-disable-next-line
    if (type.startsWith('bytes'))
        return `0x${'0'.repeat(parseInt(type.substr(5)) * 2)}`;
    if (type === 'address')
        return `0x${'0'.repeat(40)}`;
    if (type === 'string')
        return '';
    return '0';
};
