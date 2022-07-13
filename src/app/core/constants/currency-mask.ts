import { createMask } from "@ngneat/input-mask";

export abstract class CurrencyMask {

    static readonly currencyInputMask = createMask({
        alias: 'numeric',
        groupSeparator: '.',
        digits: 0,
        digitsOptional: false,
        prefix: '$ ',
        placeholder: '0',
        parser(value: string) {
            return value.replace('$ ', '').replace('.','')
        },
      });
}