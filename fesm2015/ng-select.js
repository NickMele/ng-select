import { Directive, TemplateRef, Injectable, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, EventEmitter, Output, ViewChild, NgZone, ViewEncapsulation, HostListener, Optional, Inject, NgModule, forwardRef, ChangeDetectorRef, ContentChild, HostBinding, ContentChildren, InjectionToken, Attribute, defineInjectable } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { takeUntil, startWith, tap, debounceTime, map, filter } from 'rxjs/operators';
import { Subject, fromEvent, merge } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgOptionTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptionTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-option-tmp]' },] }
];
/** @nocollapse */
NgOptionTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgOptgroupTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptgroupTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
];
/** @nocollapse */
NgOptgroupTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLabelTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-label-tmp]' },] }
];
/** @nocollapse */
NgLabelTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgMultiLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgMultiLabelTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
];
/** @nocollapse */
NgMultiLabelTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-header-tmp]' },] }
];
/** @nocollapse */
NgHeaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgFooterTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-footer-tmp]' },] }
];
/** @nocollapse */
NgFooterTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgNotFoundTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgNotFoundTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
];
/** @nocollapse */
NgNotFoundTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgTypeToSearchTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTypeToSearchTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
];
/** @nocollapse */
NgTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgLoadingTextTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingTextTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
];
/** @nocollapse */
NgLoadingTextTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgTagTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTagTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-tag-tmp]' },] }
];
/** @nocollapse */
NgTagTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgLoadingSpinnerTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingSpinnerTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-loadingspinner-tmp]' },] }
];
/** @nocollapse */
NgLoadingSpinnerTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ConsoleService {
    /**
     * @param {?} message
     * @return {?}
     */
    warn(message) {
        console.warn(message);
    }
}
ConsoleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ ConsoleService.ngInjectableDef = defineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    const match = (a) => {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        /** @type {?} */
        const val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ItemsList {
    /**
     * @param {?} _ngSelect
     * @param {?} _selectionModel
     */
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get filteredItems() {
        return this._filteredItems;
    }
    /**
     * @return {?}
     */
    get markedIndex() {
        return this._markedIndex;
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectionModel.value;
    }
    /**
     * @return {?}
     */
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    /**
     * @return {?}
     */
    get noItemsToSelect() {
        return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get maxItemsSelected() {
        return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get lastSelectedItem() {
        /** @type {?} */
        let i = this.selectedItems.length - 1;
        for (; i >= 0; i--) {
            /** @type {?} */
            let item = this.selectedItems[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this._items = items.map((item, index) => this.mapItem(item, index));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findItem(value) {
        /** @type {?} */
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = item => this._ngSelect.compareWith(item.value, value);
        }
        else if (this._ngSelect.bindValue) {
            findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
        }
        else {
            findBy = item => item.value === value ||
                !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
        }
        return this._items.find(item => findBy(item));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        /** @type {?} */
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    clearSelected(keepDisabled = false) {
        this._selectionModel.clear(keepDisabled);
        this._items.forEach(item => {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    findByLabel(term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(item => {
            /** @type {?} */
            const label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            /** @type {?} */
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                }
                /** @type {?} */
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    /** @type {?} */
                    const head = this._items.find(x => x === last.parent);
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    /**
     * @return {?}
     */
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(x => !x.selected);
        }
        else {
            this._filteredItems = this._items;
        }
    }
    /**
     * @return {?}
     */
    unmarkItem() {
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    markNextItem() {
        this._stepToItem(+1);
    }
    /**
     * @return {?}
     */
    markPreviousItem() {
        this._stepToItem(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        const indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && indexOfLastSelected > -1) {
            this._markedIndex = indexOfLastSelected;
        }
        else {
            if (this._ngSelect.excludeGroupsFromDefaultSelection) {
                this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled && !x.children) : -1;
            }
            else {
                this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    resolveNested(option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            let keys = key.split('.');
            /** @type {?} */
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    mapItem(item, index) {
        /** @type {?} */
        const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: newId(),
        };
    }
    /**
     * @return {?}
     */
    mapSelectedItems() {
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            /** @type {?} */
            const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
            /** @type {?} */
            const item = isDefined(value) ? this.findItem(value) : null;
            this._selectionModel.unselect(selected, multiple);
            this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            const parent = item.parent;
            /** @type {?} */
            const parentExists = this._filteredItems.find(x => x === parent);
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [...this._filteredItems.sort((a, b) => (a.index - b.index))];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter(x => x !== item);
        if (item.parent) {
            /** @type {?} */
            const children = item.parent.children;
            if (children.every(x => x.selected)) {
                this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
        }
    }
    /**
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    _defaultSearchFn(search, opt) {
        /** @type {?} */
        const label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    /**
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    _groupBy(items, prop) {
        /** @type {?} */
        const groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[/** @type {?} */ (prop)])) {
            for (const item of items) {
                /** @type {?} */
                const children = (item.value[/** @type {?} */ (prop)] || []).map((x, index) => this.mapItem(x, index));
                groups.set(item, children);
            }
            return groups;
        }
        /** @type {?} */
        const isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const keyFn = (item) => {
            /** @type {?} */
            let key = isFnKey ? (/** @type {?} */ (prop))(item.value) : item.value[/** @type {?} */ (prop)];
            return isDefined(key) ? key : undefined;
        };
        // Group items by key.
        for (const item of items) {
            /** @type {?} */
            let key = keyFn(item);
            /** @type {?} */
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    /**
     * @param {?} groups
     * @return {?}
     */
    _flatten(groups) {
        /** @type {?} */
        const isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const items = [];
        /** @type {?} */
        const withoutGroup = groups.get(undefined) || [];
        items.push(...withoutGroup);
        /** @type {?} */
        let i = withoutGroup.length;
        for (const key of Array.from(groups.keys())) {
            if (!isDefined(key)) {
                continue;
            }
            /** @type {?} */
            const isObjectKey = isObject(key);
            /** @type {?} */
            const parent = {
                label: isObjectKey ? '' : /** @type {?} */ (key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            const groupKey = isGroupByFn ? this._ngSelect.bindLabel : /** @type {?} */ (this._ngSelect.groupBy);
            /** @type {?} */
            const groupValue = this._ngSelect.groupValue || (() => {
                if (isObjectKey) {
                    return (/** @type {?} */ (key)).value;
                }
                return { [groupKey]: key };
            });
            /** @type {?} */
            const children = groups.get(key).map(x => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(x => x.value));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WindowService {
    /**
     * @param {?} fn
     * @return {?}
     */
    requestAnimationFrame(fn) {
        return window.requestAnimationFrame(fn);
    }
    /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    setTimeout(handler, timeout) {
        return window.setTimeout(handler, timeout);
    }
}
WindowService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ WindowService.ngInjectableDef = defineInjectable({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VirtualScrollService {
    /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    calculateItems(d, dropdownEl, bufferAmount) {
        /** @type {?} */
        const scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        /** @type {?} */
        const scrollTop = Math.max(0, dropdownEl.scrollTop);
        /** @type {?} */
        const indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        /** @type {?} */
        let end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        /** @type {?} */
        const maxStartEnd = end;
        /** @type {?} */
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        /** @type {?} */
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        let topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= bufferAmount;
        start = Math.max(0, start);
        end += bufferAmount;
        end = Math.min(d.itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    }
    /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    calculateDimensions(itemsLength, index, panelEl, contentEl) {
        /** @type {?} */
        const panelRect = panelEl.getBoundingClientRect();
        /** @type {?} */
        const itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        /** @type {?} */
        const itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    }
}
VirtualScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ VirtualScrollService.ngInjectableDef = defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
const BOTTOM_CSS_CLASS = 'ng-select-bottom';
class NgDropdownPanelComponent {
    /**
     * @param {?} _renderer
     * @param {?} _zone
     * @param {?} _virtualScrollService
     * @param {?} _window
     * @param {?} _elementRef
     * @param {?} _document
     */
    constructor(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.outsideClick = new EventEmitter();
        this._destroy$ = new Subject();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = () => { };
        this._disposeDocumentResizeListener = () => { };
        this._dropdown = _elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = /** @type {?} */ ($event.target);
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._handleScroll();
        if (this._document) {
            merge(fromEvent(this._document, 'touchstart', { capture: true }), fromEvent(this._document, 'mousedown', { capture: true }))
                .pipe(takeUntil(this._destroy$))
                .subscribe(($event) => this._handleOutsideClick($event));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["items"]) {
            this._isScrolledToMarked = false;
            this._handleItemsChange(changes["items"]);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._whenContentReady().then(() => {
            if (this._destroy$.closed) {
                return;
            }
            if (this.appendTo) {
                this._appendDropdown();
                this._handleDocumentResize();
            }
            this.updateDropdownPosition();
        });
    }
    /**
     * @return {?}
     */
    refresh() {
        return new Promise(resolve => {
            this._zone.runOutsideAngular(() => {
                this._window.requestAnimationFrame(() => {
                    this._updateItems().then(resolve);
                });
            });
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    scrollInto(item) {
        if (!item) {
            return;
        }
        /** @type {?} */
        const index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        const d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        /** @type {?} */
        const scrollEl = this.scrollElementRef.nativeElement;
        /** @type {?} */
        const buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            /** @type {?} */
            const contentEl = this.contentElementRef.nativeElement;
            /** @type {?} */
            const childrenHeight = Array.from(contentEl.children).slice(0, index).reduce((c, n) => c + n.clientHeight, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    }
    /**
     * @return {?}
     */
    scrollIntoTag() {
        /** @type {?} */
        const el = this.scrollElementRef.nativeElement;
        /** @type {?} */
        const d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    }
    /**
     * @return {?}
     */
    updateDropdownPosition() {
        this._window.setTimeout(() => {
            this._currentPosition = this._calculateCurrentPosition(this._dropdown);
            if (this._currentPosition === 'top') {
                this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
                this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
                this._renderer.addClass(this._select, TOP_CSS_CLASS);
                this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
            }
            else {
                this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
                this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
                this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
                this._renderer.removeClass(this._select, TOP_CSS_CLASS);
            }
            if (this.appendTo) {
                this._updateAppendedDropdownPosition();
            }
            this._dropdown.style.opacity = '1';
        }, 0);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleOutsideClick($event) {
        if (this._select.contains($event.target)) {
            return;
        }
        if (this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        const path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this.outsideClick.emit();
    }
    /**
     * @return {?}
     */
    _handleScroll() {
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', () => {
            this.refresh();
            this._fireScrollToEnd();
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _handleItemsChange(items) {
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(() => {
            if (this.appendTo && this._currentPosition === 'top') {
                this._updateAppendedDropdownPosition();
            }
        });
    }
    /**
     * @return {?}
     */
    _updateItems() {
        NgZone.assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(() => {
                this.update.emit(this.items.slice());
                this._scrollToMarked();
            });
            return Promise.resolve();
        }
        /** @type {?} */
        const loop = (resolve) => {
            /** @type {?} */
            const d = this._calculateDimensions();
            /** @type {?} */
            const res = this._virtualScrollService.calculateItems(d, this.scrollElementRef.nativeElement, this.bufferAmount || 0);
            (/** @type {?} */ (this.paddingElementRef.nativeElement)).style.height = `${res.scrollHeight}px`;
            (/** @type {?} */ (this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
            if (res.start !== this._previousStart || res.end !== this._previousEnd) {
                this._zone.run(() => {
                    this.update.emit(this.items.slice(res.start, res.end));
                    this.scroll.emit({ start: res.start, end: res.end });
                });
                this._previousStart = res.start;
                this._previousEnd = res.end;
                if (this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (this._startupLoop === true) {
                this._startupLoop = false;
                this._scrollToMarked();
                resolve();
            }
        };
        return new Promise((resolve) => loop(resolve));
    }
    /**
     * @return {?}
     */
    _fireScrollToEnd() {
        if (this._scrollToEndFired) {
            return;
        }
        /** @type {?} */
        const scroll = this.scrollElementRef.nativeElement;
        /** @type {?} */
        const padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    _calculateDimensions(index = 0) {
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    _handleDocumentResize() {
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', () => {
            this._updateAppendedDropdownPosition();
        });
    }
    /**
     * @return {?}
     */
    _scrollToMarked() {
        if (this._isScrolledToMarked || !this.markedItem) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this.markedItem);
    }
    /**
     * @param {?} dropdownEl
     * @return {?}
     */
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        const selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        const offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        const height = selectRect.height;
        /** @type {?} */
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    /**
     * @return {?}
     */
    _appendDropdown() {
        /** @type {?} */
        const parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
        }
        parent.appendChild(this._dropdown);
    }
    /**
     * @return {?}
     */
    _updateAppendedDropdownPosition() {
        /** @type {?} */
        const parent = document.querySelector(this.appendTo) || document.body;
        this._dropdown.style.display = 'none';
        /** @type {?} */
        const selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        const boundingRect = parent.getBoundingClientRect();
        this._dropdown.style.display = '';
        /** @type {?} */
        const offsetTop = selectRect.top - boundingRect.top;
        /** @type {?} */
        const offsetLeft = selectRect.left - boundingRect.left;
        /** @type {?} */
        const topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
        this._dropdown.style.top = offsetTop + topDelta + 'px';
        this._dropdown.style.bottom = 'auto';
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = selectRect.width + 'px';
        this._dropdown.style.minWidth = selectRect.width + 'px';
    }
    /**
     * @return {?}
     */
    _whenContentReady() {
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        /** @type {?} */
        const ready = (resolve) => {
            /** @type {?} */
            const ngOption = this._dropdown.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            this._zone.runOutsideAngular(() => {
                setTimeout(() => ready(resolve), 5);
            });
        };
        return new Promise((resolve) => ready(resolve));
    }
}
NgDropdownPanelComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'ng-dropdown-panel',
                template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length > 0">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
            }] }
];
/** @nocollapse */
NgDropdownPanelComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: VirtualScrollService },
    { type: WindowService },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: Input }],
    markedItem: [{ type: Input }],
    position: [{ type: Input }],
    appendTo: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    filterValue: [{ type: Input }],
    update: [{ type: Output }],
    scroll: [{ type: Output }],
    scrollToEnd: [{ type: Output }],
    outsideClick: [{ type: Output }],
    contentElementRef: [{ type: ViewChild, args: ['content', { read: ElementRef },] }],
    scrollElementRef: [{ type: ViewChild, args: ['scroll', { read: ElementRef },] }],
    paddingElementRef: [{ type: ViewChild, args: ['padding', { read: ElementRef },] }],
    handleMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgOptionComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new Subject();
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = this._isDisabled(value); }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["disabled"]) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
}
NgOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
NgOptionComponent.ctorParameters = () => [
    { type: ElementRef }
];
NgOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgSelectConfig {
    constructor() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
    }
}
NgSelectConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgSelectConfig.ngInjectableDef = defineInjectable({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECTION_MODEL_FACTORY = new InjectionToken('ng-select-selection-model');
class NgSelectComponent {
    /**
     * @param {?} classes
     * @param {?} tabIndex
     * @param {?} autoFocus
     * @param {?} config
     * @param {?} newSelectionModel
     * @param {?} _elementRef
     * @param {?} _cd
     * @param {?} _console
     */
    constructor(classes, tabIndex, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.tabIndex = tabIndex;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.clearable = true;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.excludeGroupsFromDefaultSelection = false;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.autoCorrect = 'off';
        this.autoCapitalize = 'off';
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this.openEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.clearEvent = new EventEmitter();
        this.addEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.disabled = false;
        this.viewPortItems = [];
        this.filterValue = null;
        this.dropdownId = newId();
        this._items = [];
        this._defaultLabel = 'label';
        this._primitive = true;
        this._pressedKeys = [];
        this._destroy$ = new Subject();
        this._keyPress$ = new Subject();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this.clearItem = (item) => {
            /** @type {?} */
            const option = this.selectedItems.find(x => x.value === item);
            this.unselect(option);
        };
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get items() { return this._items; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._itemsAreUsed = true;
        this._items = value;
    }
    ;
    /**
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    /**
     * @return {?}
     */
    get filtered() { return !!this.filterValue && this.searchable; }
    ;
    /**
     * @return {?}
     */
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    /**
     * @return {?}
     */
    get selectedValues() {
        return this.selectedItems.map(x => x.value);
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._handleKeyPresses();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["multiple"]) {
            this.itemsList.clearSelected();
        }
        if (changes["items"]) {
            this._setItems(changes["items"].currentValue || []);
        }
        if (changes["isOpen"]) {
            this._manualOpen = isDefined(changes["isOpen"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown($event) {
        if (KeyCode[$event.which]) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    $event.preventDefault();
                    $event.stopPropagation();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = /** @type {?} */ ($event.target);
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        $event.stopPropagation();
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        if (this._isTypeahead) {
            this.typeahead.next(null);
        }
        this.clearEvent.emit();
    }
    /**
     * @return {?}
     */
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.filterValue) {
            this.focus();
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd) {
                this._clearSearch();
            }
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
            this._updateNgModel();
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.filterInput.nativeElement.focus();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    /**
     * @return {?}
     */
    selectTag() {
        /** @type {?} */
        let tag;
        if (isFunction(this.addTag)) {
            tag = (/** @type {?} */ (this.addTag))(this.filterValue);
        }
        else {
            tag = this._primitive ? this.filterValue : { [this.bindLabel]: this.filterValue };
        }
        /** @type {?} */
        const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
        if (isPromise(tag)) {
            tag.then(item => this.select(handleTag(item))).catch(() => { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    /**
     * @return {?}
     */
    showClear() {
        return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
    }
    /**
     * @return {?}
     */
    get showAddTag() {
        if (!this.filterValue) {
            return false;
        }
        /** @type {?} */
        const term = this.filterValue.toLowerCase();
        return this.addTag &&
            (!this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term))) &&
            !this.loading;
    }
    /**
     * @return {?}
     */
    showNoItemsFound() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
            !this.showAddTag;
    }
    /**
     * @return {?}
     */
    showTypeToSearch() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.filterValue && !this.loading;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        this.filterValue = term;
        if (this._isTypeahead) {
            this.typeahead.next(this.filterValue);
        }
        else {
            this.itemsList.filter(this.filterValue);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map(x => x.value) });
        this.open();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        this.focused = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    /**
     * @return {?}
     */
    detectChanges() {
        if (!(/** @type {?} */ (this._cd)).destroyed) {
            this._cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    updateDropdownPosition() {
        if (this.dropdownPanel) {
            this.dropdownPanel.updateDropdownPosition();
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        /** @type {?} */
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.filterValue) && !this._isTypeahead) {
            this.itemsList.filter(this.filterValue);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    /**
     * @return {?}
     */
    _setItemsFromNgOptions() {
        /** @type {?} */
        const handleNgOptions = (options) => {
            this.items = options.map(option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        };
        /** @type {?} */
        const handleOptionChange = () => {
            /** @type {?} */
            const changedOrDestroyed = merge(this.ngOptions.changes, this._destroy$);
            merge(...this.ngOptions.map(option => option.stateChange$))
                .pipe(takeUntil(changedOrDestroyed))
                .subscribe(option => {
                /** @type {?} */
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe(startWith(this.ngOptions), takeUntil(this._destroy$))
            .subscribe(options => {
            this.bindLabel = this._defaultLabel;
            handleNgOptions(options);
            handleOptionChange();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isValidWriteValue(value) {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        const validateBinding = (item) => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Binding object(${JSON.stringify(item)}) with bindValue is not allowed.`);
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(item => validateBinding(item));
        }
        else {
            return validateBinding(value);
        }
    }
    /**
     * @param {?} ngModel
     * @return {?}
     */
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        const select = (val) => {
            /** @type {?} */
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                const isValObject = isObject(val);
                /** @type {?} */
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            (/** @type {?} */ (ngModel)).forEach(item => select(item));
        }
        else {
            select(ngModel);
        }
    }
    /**
     * @return {?}
     */
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(takeUntil(this._destroy$), tap(letter => this._pressedKeys.push(letter)), debounceTime(200), filter(() => this._pressedKeys.length > 0), map(() => this._pressedKeys.join('')))
            .subscribe(term => {
            /** @type {?} */
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        });
    }
    /**
     * @return {?}
     */
    _updateNgModel() {
        /** @type {?} */
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                /** @type {?} */
                let value = null;
                if (item.children) {
                    value = item.value[/** @type {?} */ (this.groupBy)];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        /** @type {?} */
        const selected = this.selectedItems.map(x => x.value);
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _clearSearch() {
        if (!this.filterValue) {
            return;
        }
        this.filterValue = null;
        this.itemsList.resetFilteredItems();
    }
    /**
     * @return {?}
     */
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollInto(this.itemsList.markedItem);
    }
    /**
     * @return {?}
     */
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollIntoTag();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleTab($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    /**
     * @param {?} nextStep
     * @return {?}
     */
    _nextItemIsTag(nextStep) {
        /** @type {?} */
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.filterValue
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    /**
     * @return {?}
     */
    _handleBackspace() {
        if (this.filterValue || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    /**
     * @return {?}
     */
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    }
}
NgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-select',
                template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\" [id]=\"dropdownId + '-placeholder'\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\">{{item.label}}</span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #filterInput\n                   type=\"text\"\n                   [attr.autocomplete]=\"labelForId ? 'off' : dropdownId\"\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [attr.autocorrect]=\"autoCorrect\"\n                   [attr.autocapitalize]=\"autoCapitalize\"\n                   [readOnly]=\"!searchable\"\n                   [disabled]=\"disabled\"\n                   [value]=\"filterValue ? filterValue : ''\"\n                   (input)=\"filter(filterInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-labelledby]=\"dropdownId + '-placeholder'\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defautlLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defautlLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n    class=\"ng-dropdown-panel\"\n    [virtualScroll]=\"virtualScroll\"\n    [bufferAmount]=\"bufferAmount\"\n    [appendTo]=\"appendTo\"\n    [position]=\"dropdownPosition\"\n    [headerTemplate]=\"headerTemplate\"\n    [footerTemplate]=\"footerTemplate\"\n    [filterValue]=\"filterValue\"\n    [items]=\"itemsList.filteredItems\"\n    [markedItem]=\"itemsList.markedItem\"\n    (update)=\"viewPortItems = $event\"\n    (scroll)=\"scroll.emit($event)\"\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\n    (outsideClick)=\"close()\"\n    [class.ng-select-multiple]=\"multiple\"\n    [ngClass]=\"appendTo ? classes : null\"\n    [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\">{{item.label}}</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NgSelectComponent),
                        multi: true
                    }],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'listbox',
                    'class': 'ng-select',
                    '[class.ng-select-single]': '!multiple',
                },
                styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            }] }
];
/** @nocollapse */
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['class',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: Attribute, args: ['autofocus',] }] },
    { type: NgSelectConfig },
    { type: undefined, decorators: [{ type: Inject, args: [SELECTION_MODEL_FACTORY,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    bindLabel: [{ type: Input }],
    bindValue: [{ type: Input }],
    clearable: [{ type: Input }],
    markFirst: [{ type: Input }],
    placeholder: [{ type: Input }],
    notFoundText: [{ type: Input }],
    typeToSearchText: [{ type: Input }],
    addTagText: [{ type: Input }],
    loadingText: [{ type: Input }],
    clearAllText: [{ type: Input }],
    dropdownPosition: [{ type: Input }],
    appendTo: [{ type: Input }],
    loading: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    hideSelected: [{ type: Input }],
    selectOnTab: [{ type: Input }],
    openOnEnter: [{ type: Input }],
    maxSelectedItems: [{ type: Input }],
    groupBy: [{ type: Input }],
    groupValue: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    selectableGroup: [{ type: Input }],
    selectableGroupAsModel: [{ type: Input }],
    searchFn: [{ type: Input }],
    excludeGroupsFromDefaultSelection: [{ type: Input }],
    clearOnBackspace: [{ type: Input }],
    labelForId: [{ type: Input }],
    autoCorrect: [{ type: Input }],
    autoCapitalize: [{ type: Input }],
    typeahead: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-multiple',] }],
    addTag: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-taggable',] }],
    searchable: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-searchable',] }],
    isOpen: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-opened',] }],
    items: [{ type: Input }],
    compareWith: [{ type: Input }],
    clearSearchOnAdd: [{ type: Input }],
    blurEvent: [{ type: Output, args: ['blur',] }],
    focusEvent: [{ type: Output, args: ['focus',] }],
    changeEvent: [{ type: Output, args: ['change',] }],
    openEvent: [{ type: Output, args: ['open',] }],
    closeEvent: [{ type: Output, args: ['close',] }],
    searchEvent: [{ type: Output, args: ['search',] }],
    clearEvent: [{ type: Output, args: ['clear',] }],
    addEvent: [{ type: Output, args: ['add',] }],
    removeEvent: [{ type: Output, args: ['remove',] }],
    scroll: [{ type: Output, args: ['scroll',] }],
    scrollToEnd: [{ type: Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: ContentChild, args: [NgOptionTemplateDirective, { read: TemplateRef },] }],
    optgroupTemplate: [{ type: ContentChild, args: [NgOptgroupTemplateDirective, { read: TemplateRef },] }],
    labelTemplate: [{ type: ContentChild, args: [NgLabelTemplateDirective, { read: TemplateRef },] }],
    multiLabelTemplate: [{ type: ContentChild, args: [NgMultiLabelTemplateDirective, { read: TemplateRef },] }],
    headerTemplate: [{ type: ContentChild, args: [NgHeaderTemplateDirective, { read: TemplateRef },] }],
    footerTemplate: [{ type: ContentChild, args: [NgFooterTemplateDirective, { read: TemplateRef },] }],
    notFoundTemplate: [{ type: ContentChild, args: [NgNotFoundTemplateDirective, { read: TemplateRef },] }],
    typeToSearchTemplate: [{ type: ContentChild, args: [NgTypeToSearchTemplateDirective, { read: TemplateRef },] }],
    loadingTextTemplate: [{ type: ContentChild, args: [NgLoadingTextTemplateDirective, { read: TemplateRef },] }],
    tagTemplate: [{ type: ContentChild, args: [NgTagTemplateDirective, { read: TemplateRef },] }],
    loadingSpinnerTemplate: [{ type: ContentChild, args: [NgLoadingSpinnerTemplateDirective, { read: TemplateRef },] }],
    dropdownPanel: [{ type: ViewChild, args: [forwardRef(() => NgDropdownPanelComponent),] }],
    ngOptions: [{ type: ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
    filterInput: [{ type: ViewChild, args: ['filterInput',] }],
    disabled: [{ type: HostBinding, args: ['class.ng-select-disabled',] }],
    filtered: [{ type: HostBinding, args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgOptionHighlightDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    /**
     * @return {?}
     */
    _highlightLabel() {
        /** @type {?} */
        const label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        /** @type {?} */
        const indexOfTerm = stripSpecialChars(label)
            .toLowerCase()
            .indexOf(stripSpecialChars(this.term).toLowerCase());
        if (indexOfTerm > -1) {
            this._setInnerHtml(label.substring(0, indexOfTerm)
                + `<span class="highlighted">${label.substr(indexOfTerm, this.term.length)}</span>`
                + label.substring(indexOfTerm + this.term.length, label.length));
        }
        else {
            this._setInnerHtml(label);
        }
    }
    /**
     * @return {?}
     */
    get _canHighlight() {
        return isDefined(this.term) && isDefined(this.label);
    }
    /**
     * @param {?} html
     * @return {?}
     */
    _setInnerHtml(html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    }
}
NgOptionHighlightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngOptionHighlight]'
            },] }
];
/** @nocollapse */
NgOptionHighlightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NgOptionHighlightDirective.propDecorators = {
    term: [{ type: Input, args: ['ngOptionHighlight',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    /**
     * @return {?}
     */
    get value() {
        return this._selected;
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (groupAsModel || !item.children) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                const childrenCount = item.parent.children.length;
                /** @type {?} */
                const selectedCount = item.parent.children.filter(x => x.selected).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (!groupAsModel) {
                    this._selected = [...this._selected, ...item.children];
                }
            }
        }
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    unselect(item, multiple) {
        this._selected = this._selected.filter(x => x !== item);
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter(x => x !== item));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    clear(keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
    }
    /**
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    _setChildrenSelectedState(children, selected) {
        children.forEach(x => x.selected = selected);
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    _removeChildren(parent) {
        this._selected = this._selected.filter(x => x.parent !== parent);
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    _removeParent(parent) {
        this._selected = this._selected.filter(x => x !== parent);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
const ɵ0 = DefaultSelectionModelFactory;
class NgSelectModule {
}
NgSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgSelectComponent, SELECTION_MODEL_FACTORY, NgSelectModule, NgSelectConfig, ConsoleService as ɵs, NgDropdownPanelComponent as ɵo, NgOptionHighlightDirective as ɵt, NgOptionComponent as ɵr, NgFooterTemplateDirective as ɵi, NgHeaderTemplateDirective as ɵh, NgLabelTemplateDirective as ɵf, NgLoadingSpinnerTemplateDirective as ɵn, NgLoadingTextTemplateDirective as ɵl, NgMultiLabelTemplateDirective as ɵg, NgNotFoundTemplateDirective as ɵj, NgOptgroupTemplateDirective as ɵe, NgOptionTemplateDirective as ɵd, NgTagTemplateDirective as ɵm, NgTypeToSearchTemplateDirective as ɵk, DefaultSelectionModel as ɵc, DefaultSelectionModelFactory as ɵb, VirtualScrollService as ɵp, WindowService as ɵq };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctdGVtcGxhdGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2NvbnNvbGUuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3ZhbHVlLXV0aWxzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvc2VhcmNoLWhlbHBlci50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2lkLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaXRlbXMtbGlzdC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC50eXBlcy50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3dpbmRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmlydHVhbC1zY3JvbGwuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLW9wdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3NlbGVjdGlvbi1tb2RlbC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctb3B0aW9uLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGdyb3VwLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbGFiZWwtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1tdWx0aS1sYWJlbC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctaGVhZGVyLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWZvb3Rlci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1ub3Rmb3VuZC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXR5cGV0b3NlYXJjaC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5ndGV4dC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXRhZy10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5nc3Bpbm5lci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb25zb2xlU2VydmljZSB7XG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgaXNEZWZpbmVkKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuIiwiY29uc3QgZGlhY3JpdGljcyA9IHtcbiAgICAnXFx1MjRCNic6ICdBJyxcbiAgICAnXFx1RkYyMSc6ICdBJyxcbiAgICAnXFx1MDBDMCc6ICdBJyxcbiAgICAnXFx1MDBDMSc6ICdBJyxcbiAgICAnXFx1MDBDMic6ICdBJyxcbiAgICAnXFx1MUVBNic6ICdBJyxcbiAgICAnXFx1MUVBNCc6ICdBJyxcbiAgICAnXFx1MUVBQSc6ICdBJyxcbiAgICAnXFx1MUVBOCc6ICdBJyxcbiAgICAnXFx1MDBDMyc6ICdBJyxcbiAgICAnXFx1MDEwMCc6ICdBJyxcbiAgICAnXFx1MDEwMic6ICdBJyxcbiAgICAnXFx1MUVCMCc6ICdBJyxcbiAgICAnXFx1MUVBRSc6ICdBJyxcbiAgICAnXFx1MUVCNCc6ICdBJyxcbiAgICAnXFx1MUVCMic6ICdBJyxcbiAgICAnXFx1MDIyNic6ICdBJyxcbiAgICAnXFx1MDFFMCc6ICdBJyxcbiAgICAnXFx1MDBDNCc6ICdBJyxcbiAgICAnXFx1MDFERSc6ICdBJyxcbiAgICAnXFx1MUVBMic6ICdBJyxcbiAgICAnXFx1MDBDNSc6ICdBJyxcbiAgICAnXFx1MDFGQSc6ICdBJyxcbiAgICAnXFx1MDFDRCc6ICdBJyxcbiAgICAnXFx1MDIwMCc6ICdBJyxcbiAgICAnXFx1MDIwMic6ICdBJyxcbiAgICAnXFx1MUVBMCc6ICdBJyxcbiAgICAnXFx1MUVBQyc6ICdBJyxcbiAgICAnXFx1MUVCNic6ICdBJyxcbiAgICAnXFx1MUUwMCc6ICdBJyxcbiAgICAnXFx1MDEwNCc6ICdBJyxcbiAgICAnXFx1MDIzQSc6ICdBJyxcbiAgICAnXFx1MkM2Ric6ICdBJyxcbiAgICAnXFx1QTczMic6ICdBQScsXG4gICAgJ1xcdTAwQzYnOiAnQUUnLFxuICAgICdcXHUwMUZDJzogJ0FFJyxcbiAgICAnXFx1MDFFMic6ICdBRScsXG4gICAgJ1xcdUE3MzQnOiAnQU8nLFxuICAgICdcXHVBNzM2JzogJ0FVJyxcbiAgICAnXFx1QTczOCc6ICdBVicsXG4gICAgJ1xcdUE3M0EnOiAnQVYnLFxuICAgICdcXHVBNzNDJzogJ0FZJyxcbiAgICAnXFx1MjRCNyc6ICdCJyxcbiAgICAnXFx1RkYyMic6ICdCJyxcbiAgICAnXFx1MUUwMic6ICdCJyxcbiAgICAnXFx1MUUwNCc6ICdCJyxcbiAgICAnXFx1MUUwNic6ICdCJyxcbiAgICAnXFx1MDI0Myc6ICdCJyxcbiAgICAnXFx1MDE4Mic6ICdCJyxcbiAgICAnXFx1MDE4MSc6ICdCJyxcbiAgICAnXFx1MjRCOCc6ICdDJyxcbiAgICAnXFx1RkYyMyc6ICdDJyxcbiAgICAnXFx1MDEwNic6ICdDJyxcbiAgICAnXFx1MDEwOCc6ICdDJyxcbiAgICAnXFx1MDEwQSc6ICdDJyxcbiAgICAnXFx1MDEwQyc6ICdDJyxcbiAgICAnXFx1MDBDNyc6ICdDJyxcbiAgICAnXFx1MUUwOCc6ICdDJyxcbiAgICAnXFx1MDE4Nyc6ICdDJyxcbiAgICAnXFx1MDIzQic6ICdDJyxcbiAgICAnXFx1QTczRSc6ICdDJyxcbiAgICAnXFx1MjRCOSc6ICdEJyxcbiAgICAnXFx1RkYyNCc6ICdEJyxcbiAgICAnXFx1MUUwQSc6ICdEJyxcbiAgICAnXFx1MDEwRSc6ICdEJyxcbiAgICAnXFx1MUUwQyc6ICdEJyxcbiAgICAnXFx1MUUxMCc6ICdEJyxcbiAgICAnXFx1MUUxMic6ICdEJyxcbiAgICAnXFx1MUUwRSc6ICdEJyxcbiAgICAnXFx1MDExMCc6ICdEJyxcbiAgICAnXFx1MDE4Qic6ICdEJyxcbiAgICAnXFx1MDE4QSc6ICdEJyxcbiAgICAnXFx1MDE4OSc6ICdEJyxcbiAgICAnXFx1QTc3OSc6ICdEJyxcbiAgICAnXFx1MDFGMSc6ICdEWicsXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxuICAgICdcXHUwMUYyJzogJ0R6JyxcbiAgICAnXFx1MDFDNSc6ICdEeicsXG4gICAgJ1xcdTI0QkEnOiAnRScsXG4gICAgJ1xcdUZGMjUnOiAnRScsXG4gICAgJ1xcdTAwQzgnOiAnRScsXG4gICAgJ1xcdTAwQzknOiAnRScsXG4gICAgJ1xcdTAwQ0EnOiAnRScsXG4gICAgJ1xcdTFFQzAnOiAnRScsXG4gICAgJ1xcdTFFQkUnOiAnRScsXG4gICAgJ1xcdTFFQzQnOiAnRScsXG4gICAgJ1xcdTFFQzInOiAnRScsXG4gICAgJ1xcdTFFQkMnOiAnRScsXG4gICAgJ1xcdTAxMTInOiAnRScsXG4gICAgJ1xcdTFFMTQnOiAnRScsXG4gICAgJ1xcdTFFMTYnOiAnRScsXG4gICAgJ1xcdTAxMTQnOiAnRScsXG4gICAgJ1xcdTAxMTYnOiAnRScsXG4gICAgJ1xcdTAwQ0InOiAnRScsXG4gICAgJ1xcdTFFQkEnOiAnRScsXG4gICAgJ1xcdTAxMUEnOiAnRScsXG4gICAgJ1xcdTAyMDQnOiAnRScsXG4gICAgJ1xcdTAyMDYnOiAnRScsXG4gICAgJ1xcdTFFQjgnOiAnRScsXG4gICAgJ1xcdTFFQzYnOiAnRScsXG4gICAgJ1xcdTAyMjgnOiAnRScsXG4gICAgJ1xcdTFFMUMnOiAnRScsXG4gICAgJ1xcdTAxMTgnOiAnRScsXG4gICAgJ1xcdTFFMTgnOiAnRScsXG4gICAgJ1xcdTFFMUEnOiAnRScsXG4gICAgJ1xcdTAxOTAnOiAnRScsXG4gICAgJ1xcdTAxOEUnOiAnRScsXG4gICAgJ1xcdTI0QkInOiAnRicsXG4gICAgJ1xcdUZGMjYnOiAnRicsXG4gICAgJ1xcdTFFMUUnOiAnRicsXG4gICAgJ1xcdTAxOTEnOiAnRicsXG4gICAgJ1xcdUE3N0InOiAnRicsXG4gICAgJ1xcdTI0QkMnOiAnRycsXG4gICAgJ1xcdUZGMjcnOiAnRycsXG4gICAgJ1xcdTAxRjQnOiAnRycsXG4gICAgJ1xcdTAxMUMnOiAnRycsXG4gICAgJ1xcdTFFMjAnOiAnRycsXG4gICAgJ1xcdTAxMUUnOiAnRycsXG4gICAgJ1xcdTAxMjAnOiAnRycsXG4gICAgJ1xcdTAxRTYnOiAnRycsXG4gICAgJ1xcdTAxMjInOiAnRycsXG4gICAgJ1xcdTAxRTQnOiAnRycsXG4gICAgJ1xcdTAxOTMnOiAnRycsXG4gICAgJ1xcdUE3QTAnOiAnRycsXG4gICAgJ1xcdUE3N0QnOiAnRycsXG4gICAgJ1xcdUE3N0UnOiAnRycsXG4gICAgJ1xcdTI0QkQnOiAnSCcsXG4gICAgJ1xcdUZGMjgnOiAnSCcsXG4gICAgJ1xcdTAxMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjInOiAnSCcsXG4gICAgJ1xcdTFFMjYnOiAnSCcsXG4gICAgJ1xcdTAyMUUnOiAnSCcsXG4gICAgJ1xcdTFFMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjgnOiAnSCcsXG4gICAgJ1xcdTFFMkEnOiAnSCcsXG4gICAgJ1xcdTAxMjYnOiAnSCcsXG4gICAgJ1xcdTJDNjcnOiAnSCcsXG4gICAgJ1xcdTJDNzUnOiAnSCcsXG4gICAgJ1xcdUE3OEQnOiAnSCcsXG4gICAgJ1xcdTI0QkUnOiAnSScsXG4gICAgJ1xcdUZGMjknOiAnSScsXG4gICAgJ1xcdTAwQ0MnOiAnSScsXG4gICAgJ1xcdTAwQ0QnOiAnSScsXG4gICAgJ1xcdTAwQ0UnOiAnSScsXG4gICAgJ1xcdTAxMjgnOiAnSScsXG4gICAgJ1xcdTAxMkEnOiAnSScsXG4gICAgJ1xcdTAxMkMnOiAnSScsXG4gICAgJ1xcdTAxMzAnOiAnSScsXG4gICAgJ1xcdTAwQ0YnOiAnSScsXG4gICAgJ1xcdTFFMkUnOiAnSScsXG4gICAgJ1xcdTFFQzgnOiAnSScsXG4gICAgJ1xcdTAxQ0YnOiAnSScsXG4gICAgJ1xcdTAyMDgnOiAnSScsXG4gICAgJ1xcdTAyMEEnOiAnSScsXG4gICAgJ1xcdTFFQ0EnOiAnSScsXG4gICAgJ1xcdTAxMkUnOiAnSScsXG4gICAgJ1xcdTFFMkMnOiAnSScsXG4gICAgJ1xcdTAxOTcnOiAnSScsXG4gICAgJ1xcdTI0QkYnOiAnSicsXG4gICAgJ1xcdUZGMkEnOiAnSicsXG4gICAgJ1xcdTAxMzQnOiAnSicsXG4gICAgJ1xcdTAyNDgnOiAnSicsXG4gICAgJ1xcdTI0QzAnOiAnSycsXG4gICAgJ1xcdUZGMkInOiAnSycsXG4gICAgJ1xcdTFFMzAnOiAnSycsXG4gICAgJ1xcdTAxRTgnOiAnSycsXG4gICAgJ1xcdTFFMzInOiAnSycsXG4gICAgJ1xcdTAxMzYnOiAnSycsXG4gICAgJ1xcdTFFMzQnOiAnSycsXG4gICAgJ1xcdTAxOTgnOiAnSycsXG4gICAgJ1xcdTJDNjknOiAnSycsXG4gICAgJ1xcdUE3NDAnOiAnSycsXG4gICAgJ1xcdUE3NDInOiAnSycsXG4gICAgJ1xcdUE3NDQnOiAnSycsXG4gICAgJ1xcdUE3QTInOiAnSycsXG4gICAgJ1xcdTI0QzEnOiAnTCcsXG4gICAgJ1xcdUZGMkMnOiAnTCcsXG4gICAgJ1xcdTAxM0YnOiAnTCcsXG4gICAgJ1xcdTAxMzknOiAnTCcsXG4gICAgJ1xcdTAxM0QnOiAnTCcsXG4gICAgJ1xcdTFFMzYnOiAnTCcsXG4gICAgJ1xcdTFFMzgnOiAnTCcsXG4gICAgJ1xcdTAxM0InOiAnTCcsXG4gICAgJ1xcdTFFM0MnOiAnTCcsXG4gICAgJ1xcdTFFM0EnOiAnTCcsXG4gICAgJ1xcdTAxNDEnOiAnTCcsXG4gICAgJ1xcdTAyM0QnOiAnTCcsXG4gICAgJ1xcdTJDNjInOiAnTCcsXG4gICAgJ1xcdTJDNjAnOiAnTCcsXG4gICAgJ1xcdUE3NDgnOiAnTCcsXG4gICAgJ1xcdUE3NDYnOiAnTCcsXG4gICAgJ1xcdUE3ODAnOiAnTCcsXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxuICAgICdcXHUwMUM4JzogJ0xqJyxcbiAgICAnXFx1MjRDMic6ICdNJyxcbiAgICAnXFx1RkYyRCc6ICdNJyxcbiAgICAnXFx1MUUzRSc6ICdNJyxcbiAgICAnXFx1MUU0MCc6ICdNJyxcbiAgICAnXFx1MUU0Mic6ICdNJyxcbiAgICAnXFx1MkM2RSc6ICdNJyxcbiAgICAnXFx1MDE5Qyc6ICdNJyxcbiAgICAnXFx1MjRDMyc6ICdOJyxcbiAgICAnXFx1RkYyRSc6ICdOJyxcbiAgICAnXFx1MDFGOCc6ICdOJyxcbiAgICAnXFx1MDE0Myc6ICdOJyxcbiAgICAnXFx1MDBEMSc6ICdOJyxcbiAgICAnXFx1MUU0NCc6ICdOJyxcbiAgICAnXFx1MDE0Nyc6ICdOJyxcbiAgICAnXFx1MUU0Nic6ICdOJyxcbiAgICAnXFx1MDE0NSc6ICdOJyxcbiAgICAnXFx1MUU0QSc6ICdOJyxcbiAgICAnXFx1MUU0OCc6ICdOJyxcbiAgICAnXFx1MDIyMCc6ICdOJyxcbiAgICAnXFx1MDE5RCc6ICdOJyxcbiAgICAnXFx1QTc5MCc6ICdOJyxcbiAgICAnXFx1QTdBNCc6ICdOJyxcbiAgICAnXFx1MDFDQSc6ICdOSicsXG4gICAgJ1xcdTAxQ0InOiAnTmonLFxuICAgICdcXHUyNEM0JzogJ08nLFxuICAgICdcXHVGRjJGJzogJ08nLFxuICAgICdcXHUwMEQyJzogJ08nLFxuICAgICdcXHUwMEQzJzogJ08nLFxuICAgICdcXHUwMEQ0JzogJ08nLFxuICAgICdcXHUxRUQyJzogJ08nLFxuICAgICdcXHUxRUQwJzogJ08nLFxuICAgICdcXHUxRUQ2JzogJ08nLFxuICAgICdcXHUxRUQ0JzogJ08nLFxuICAgICdcXHUwMEQ1JzogJ08nLFxuICAgICdcXHUxRTRDJzogJ08nLFxuICAgICdcXHUwMjJDJzogJ08nLFxuICAgICdcXHUxRTRFJzogJ08nLFxuICAgICdcXHUwMTRDJzogJ08nLFxuICAgICdcXHUxRTUwJzogJ08nLFxuICAgICdcXHUxRTUyJzogJ08nLFxuICAgICdcXHUwMTRFJzogJ08nLFxuICAgICdcXHUwMjJFJzogJ08nLFxuICAgICdcXHUwMjMwJzogJ08nLFxuICAgICdcXHUwMEQ2JzogJ08nLFxuICAgICdcXHUwMjJBJzogJ08nLFxuICAgICdcXHUxRUNFJzogJ08nLFxuICAgICdcXHUwMTUwJzogJ08nLFxuICAgICdcXHUwMUQxJzogJ08nLFxuICAgICdcXHUwMjBDJzogJ08nLFxuICAgICdcXHUwMjBFJzogJ08nLFxuICAgICdcXHUwMUEwJzogJ08nLFxuICAgICdcXHUxRURDJzogJ08nLFxuICAgICdcXHUxRURBJzogJ08nLFxuICAgICdcXHUxRUUwJzogJ08nLFxuICAgICdcXHUxRURFJzogJ08nLFxuICAgICdcXHUxRUUyJzogJ08nLFxuICAgICdcXHUxRUNDJzogJ08nLFxuICAgICdcXHUxRUQ4JzogJ08nLFxuICAgICdcXHUwMUVBJzogJ08nLFxuICAgICdcXHUwMUVDJzogJ08nLFxuICAgICdcXHUwMEQ4JzogJ08nLFxuICAgICdcXHUwMUZFJzogJ08nLFxuICAgICdcXHUwMTg2JzogJ08nLFxuICAgICdcXHUwMTlGJzogJ08nLFxuICAgICdcXHVBNzRBJzogJ08nLFxuICAgICdcXHVBNzRDJzogJ08nLFxuICAgICdcXHUwMUEyJzogJ09JJyxcbiAgICAnXFx1QTc0RSc6ICdPTycsXG4gICAgJ1xcdTAyMjInOiAnT1UnLFxuICAgICdcXHUyNEM1JzogJ1AnLFxuICAgICdcXHVGRjMwJzogJ1AnLFxuICAgICdcXHUxRTU0JzogJ1AnLFxuICAgICdcXHUxRTU2JzogJ1AnLFxuICAgICdcXHUwMUE0JzogJ1AnLFxuICAgICdcXHUyQzYzJzogJ1AnLFxuICAgICdcXHVBNzUwJzogJ1AnLFxuICAgICdcXHVBNzUyJzogJ1AnLFxuICAgICdcXHVBNzU0JzogJ1AnLFxuICAgICdcXHUyNEM2JzogJ1EnLFxuICAgICdcXHVGRjMxJzogJ1EnLFxuICAgICdcXHVBNzU2JzogJ1EnLFxuICAgICdcXHVBNzU4JzogJ1EnLFxuICAgICdcXHUwMjRBJzogJ1EnLFxuICAgICdcXHUyNEM3JzogJ1InLFxuICAgICdcXHVGRjMyJzogJ1InLFxuICAgICdcXHUwMTU0JzogJ1InLFxuICAgICdcXHUxRTU4JzogJ1InLFxuICAgICdcXHUwMTU4JzogJ1InLFxuICAgICdcXHUwMjEwJzogJ1InLFxuICAgICdcXHUwMjEyJzogJ1InLFxuICAgICdcXHUxRTVBJzogJ1InLFxuICAgICdcXHUxRTVDJzogJ1InLFxuICAgICdcXHUwMTU2JzogJ1InLFxuICAgICdcXHUxRTVFJzogJ1InLFxuICAgICdcXHUwMjRDJzogJ1InLFxuICAgICdcXHUyQzY0JzogJ1InLFxuICAgICdcXHVBNzVBJzogJ1InLFxuICAgICdcXHVBN0E2JzogJ1InLFxuICAgICdcXHVBNzgyJzogJ1InLFxuICAgICdcXHUyNEM4JzogJ1MnLFxuICAgICdcXHVGRjMzJzogJ1MnLFxuICAgICdcXHUxRTlFJzogJ1MnLFxuICAgICdcXHUwMTVBJzogJ1MnLFxuICAgICdcXHUxRTY0JzogJ1MnLFxuICAgICdcXHUwMTVDJzogJ1MnLFxuICAgICdcXHUxRTYwJzogJ1MnLFxuICAgICdcXHUwMTYwJzogJ1MnLFxuICAgICdcXHUxRTY2JzogJ1MnLFxuICAgICdcXHUxRTYyJzogJ1MnLFxuICAgICdcXHUxRTY4JzogJ1MnLFxuICAgICdcXHUwMjE4JzogJ1MnLFxuICAgICdcXHUwMTVFJzogJ1MnLFxuICAgICdcXHUyQzdFJzogJ1MnLFxuICAgICdcXHVBN0E4JzogJ1MnLFxuICAgICdcXHVBNzg0JzogJ1MnLFxuICAgICdcXHUyNEM5JzogJ1QnLFxuICAgICdcXHVGRjM0JzogJ1QnLFxuICAgICdcXHUxRTZBJzogJ1QnLFxuICAgICdcXHUwMTY0JzogJ1QnLFxuICAgICdcXHUxRTZDJzogJ1QnLFxuICAgICdcXHUwMjFBJzogJ1QnLFxuICAgICdcXHUwMTYyJzogJ1QnLFxuICAgICdcXHUxRTcwJzogJ1QnLFxuICAgICdcXHUxRTZFJzogJ1QnLFxuICAgICdcXHUwMTY2JzogJ1QnLFxuICAgICdcXHUwMUFDJzogJ1QnLFxuICAgICdcXHUwMUFFJzogJ1QnLFxuICAgICdcXHUwMjNFJzogJ1QnLFxuICAgICdcXHVBNzg2JzogJ1QnLFxuICAgICdcXHVBNzI4JzogJ1RaJyxcbiAgICAnXFx1MjRDQSc6ICdVJyxcbiAgICAnXFx1RkYzNSc6ICdVJyxcbiAgICAnXFx1MDBEOSc6ICdVJyxcbiAgICAnXFx1MDBEQSc6ICdVJyxcbiAgICAnXFx1MDBEQic6ICdVJyxcbiAgICAnXFx1MDE2OCc6ICdVJyxcbiAgICAnXFx1MUU3OCc6ICdVJyxcbiAgICAnXFx1MDE2QSc6ICdVJyxcbiAgICAnXFx1MUU3QSc6ICdVJyxcbiAgICAnXFx1MDE2Qyc6ICdVJyxcbiAgICAnXFx1MDBEQyc6ICdVJyxcbiAgICAnXFx1MDFEQic6ICdVJyxcbiAgICAnXFx1MDFENyc6ICdVJyxcbiAgICAnXFx1MDFENSc6ICdVJyxcbiAgICAnXFx1MDFEOSc6ICdVJyxcbiAgICAnXFx1MUVFNic6ICdVJyxcbiAgICAnXFx1MDE2RSc6ICdVJyxcbiAgICAnXFx1MDE3MCc6ICdVJyxcbiAgICAnXFx1MDFEMyc6ICdVJyxcbiAgICAnXFx1MDIxNCc6ICdVJyxcbiAgICAnXFx1MDIxNic6ICdVJyxcbiAgICAnXFx1MDFBRic6ICdVJyxcbiAgICAnXFx1MUVFQSc6ICdVJyxcbiAgICAnXFx1MUVFOCc6ICdVJyxcbiAgICAnXFx1MUVFRSc6ICdVJyxcbiAgICAnXFx1MUVFQyc6ICdVJyxcbiAgICAnXFx1MUVGMCc6ICdVJyxcbiAgICAnXFx1MUVFNCc6ICdVJyxcbiAgICAnXFx1MUU3Mic6ICdVJyxcbiAgICAnXFx1MDE3Mic6ICdVJyxcbiAgICAnXFx1MUU3Nic6ICdVJyxcbiAgICAnXFx1MUU3NCc6ICdVJyxcbiAgICAnXFx1MDI0NCc6ICdVJyxcbiAgICAnXFx1MjRDQic6ICdWJyxcbiAgICAnXFx1RkYzNic6ICdWJyxcbiAgICAnXFx1MUU3Qyc6ICdWJyxcbiAgICAnXFx1MUU3RSc6ICdWJyxcbiAgICAnXFx1MDFCMic6ICdWJyxcbiAgICAnXFx1QTc1RSc6ICdWJyxcbiAgICAnXFx1MDI0NSc6ICdWJyxcbiAgICAnXFx1QTc2MCc6ICdWWScsXG4gICAgJ1xcdTI0Q0MnOiAnVycsXG4gICAgJ1xcdUZGMzcnOiAnVycsXG4gICAgJ1xcdTFFODAnOiAnVycsXG4gICAgJ1xcdTFFODInOiAnVycsXG4gICAgJ1xcdTAxNzQnOiAnVycsXG4gICAgJ1xcdTFFODYnOiAnVycsXG4gICAgJ1xcdTFFODQnOiAnVycsXG4gICAgJ1xcdTFFODgnOiAnVycsXG4gICAgJ1xcdTJDNzInOiAnVycsXG4gICAgJ1xcdTI0Q0QnOiAnWCcsXG4gICAgJ1xcdUZGMzgnOiAnWCcsXG4gICAgJ1xcdTFFOEEnOiAnWCcsXG4gICAgJ1xcdTFFOEMnOiAnWCcsXG4gICAgJ1xcdTI0Q0UnOiAnWScsXG4gICAgJ1xcdUZGMzknOiAnWScsXG4gICAgJ1xcdTFFRjInOiAnWScsXG4gICAgJ1xcdTAwREQnOiAnWScsXG4gICAgJ1xcdTAxNzYnOiAnWScsXG4gICAgJ1xcdTFFRjgnOiAnWScsXG4gICAgJ1xcdTAyMzInOiAnWScsXG4gICAgJ1xcdTFFOEUnOiAnWScsXG4gICAgJ1xcdTAxNzgnOiAnWScsXG4gICAgJ1xcdTFFRjYnOiAnWScsXG4gICAgJ1xcdTFFRjQnOiAnWScsXG4gICAgJ1xcdTAxQjMnOiAnWScsXG4gICAgJ1xcdTAyNEUnOiAnWScsXG4gICAgJ1xcdTFFRkUnOiAnWScsXG4gICAgJ1xcdTI0Q0YnOiAnWicsXG4gICAgJ1xcdUZGM0EnOiAnWicsXG4gICAgJ1xcdTAxNzknOiAnWicsXG4gICAgJ1xcdTFFOTAnOiAnWicsXG4gICAgJ1xcdTAxN0InOiAnWicsXG4gICAgJ1xcdTAxN0QnOiAnWicsXG4gICAgJ1xcdTFFOTInOiAnWicsXG4gICAgJ1xcdTFFOTQnOiAnWicsXG4gICAgJ1xcdTAxQjUnOiAnWicsXG4gICAgJ1xcdTAyMjQnOiAnWicsXG4gICAgJ1xcdTJDN0YnOiAnWicsXG4gICAgJ1xcdTJDNkInOiAnWicsXG4gICAgJ1xcdUE3NjInOiAnWicsXG4gICAgJ1xcdTI0RDAnOiAnYScsXG4gICAgJ1xcdUZGNDEnOiAnYScsXG4gICAgJ1xcdTFFOUEnOiAnYScsXG4gICAgJ1xcdTAwRTAnOiAnYScsXG4gICAgJ1xcdTAwRTEnOiAnYScsXG4gICAgJ1xcdTAwRTInOiAnYScsXG4gICAgJ1xcdTFFQTcnOiAnYScsXG4gICAgJ1xcdTFFQTUnOiAnYScsXG4gICAgJ1xcdTFFQUInOiAnYScsXG4gICAgJ1xcdTFFQTknOiAnYScsXG4gICAgJ1xcdTAwRTMnOiAnYScsXG4gICAgJ1xcdTAxMDEnOiAnYScsXG4gICAgJ1xcdTAxMDMnOiAnYScsXG4gICAgJ1xcdTFFQjEnOiAnYScsXG4gICAgJ1xcdTFFQUYnOiAnYScsXG4gICAgJ1xcdTFFQjUnOiAnYScsXG4gICAgJ1xcdTFFQjMnOiAnYScsXG4gICAgJ1xcdTAyMjcnOiAnYScsXG4gICAgJ1xcdTAxRTEnOiAnYScsXG4gICAgJ1xcdTAwRTQnOiAnYScsXG4gICAgJ1xcdTAxREYnOiAnYScsXG4gICAgJ1xcdTFFQTMnOiAnYScsXG4gICAgJ1xcdTAwRTUnOiAnYScsXG4gICAgJ1xcdTAxRkInOiAnYScsXG4gICAgJ1xcdTAxQ0UnOiAnYScsXG4gICAgJ1xcdTAyMDEnOiAnYScsXG4gICAgJ1xcdTAyMDMnOiAnYScsXG4gICAgJ1xcdTFFQTEnOiAnYScsXG4gICAgJ1xcdTFFQUQnOiAnYScsXG4gICAgJ1xcdTFFQjcnOiAnYScsXG4gICAgJ1xcdTFFMDEnOiAnYScsXG4gICAgJ1xcdTAxMDUnOiAnYScsXG4gICAgJ1xcdTJDNjUnOiAnYScsXG4gICAgJ1xcdTAyNTAnOiAnYScsXG4gICAgJ1xcdUE3MzMnOiAnYWEnLFxuICAgICdcXHUwMEU2JzogJ2FlJyxcbiAgICAnXFx1MDFGRCc6ICdhZScsXG4gICAgJ1xcdTAxRTMnOiAnYWUnLFxuICAgICdcXHVBNzM1JzogJ2FvJyxcbiAgICAnXFx1QTczNyc6ICdhdScsXG4gICAgJ1xcdUE3MzknOiAnYXYnLFxuICAgICdcXHVBNzNCJzogJ2F2JyxcbiAgICAnXFx1QTczRCc6ICdheScsXG4gICAgJ1xcdTI0RDEnOiAnYicsXG4gICAgJ1xcdUZGNDInOiAnYicsXG4gICAgJ1xcdTFFMDMnOiAnYicsXG4gICAgJ1xcdTFFMDUnOiAnYicsXG4gICAgJ1xcdTFFMDcnOiAnYicsXG4gICAgJ1xcdTAxODAnOiAnYicsXG4gICAgJ1xcdTAxODMnOiAnYicsXG4gICAgJ1xcdTAyNTMnOiAnYicsXG4gICAgJ1xcdTI0RDInOiAnYycsXG4gICAgJ1xcdUZGNDMnOiAnYycsXG4gICAgJ1xcdTAxMDcnOiAnYycsXG4gICAgJ1xcdTAxMDknOiAnYycsXG4gICAgJ1xcdTAxMEInOiAnYycsXG4gICAgJ1xcdTAxMEQnOiAnYycsXG4gICAgJ1xcdTAwRTcnOiAnYycsXG4gICAgJ1xcdTFFMDknOiAnYycsXG4gICAgJ1xcdTAxODgnOiAnYycsXG4gICAgJ1xcdTAyM0MnOiAnYycsXG4gICAgJ1xcdUE3M0YnOiAnYycsXG4gICAgJ1xcdTIxODQnOiAnYycsXG4gICAgJ1xcdTI0RDMnOiAnZCcsXG4gICAgJ1xcdUZGNDQnOiAnZCcsXG4gICAgJ1xcdTFFMEInOiAnZCcsXG4gICAgJ1xcdTAxMEYnOiAnZCcsXG4gICAgJ1xcdTFFMEQnOiAnZCcsXG4gICAgJ1xcdTFFMTEnOiAnZCcsXG4gICAgJ1xcdTFFMTMnOiAnZCcsXG4gICAgJ1xcdTFFMEYnOiAnZCcsXG4gICAgJ1xcdTAxMTEnOiAnZCcsXG4gICAgJ1xcdTAxOEMnOiAnZCcsXG4gICAgJ1xcdTAyNTYnOiAnZCcsXG4gICAgJ1xcdTAyNTcnOiAnZCcsXG4gICAgJ1xcdUE3N0EnOiAnZCcsXG4gICAgJ1xcdTAxRjMnOiAnZHonLFxuICAgICdcXHUwMUM2JzogJ2R6JyxcbiAgICAnXFx1MjRENCc6ICdlJyxcbiAgICAnXFx1RkY0NSc6ICdlJyxcbiAgICAnXFx1MDBFOCc6ICdlJyxcbiAgICAnXFx1MDBFOSc6ICdlJyxcbiAgICAnXFx1MDBFQSc6ICdlJyxcbiAgICAnXFx1MUVDMSc6ICdlJyxcbiAgICAnXFx1MUVCRic6ICdlJyxcbiAgICAnXFx1MUVDNSc6ICdlJyxcbiAgICAnXFx1MUVDMyc6ICdlJyxcbiAgICAnXFx1MUVCRCc6ICdlJyxcbiAgICAnXFx1MDExMyc6ICdlJyxcbiAgICAnXFx1MUUxNSc6ICdlJyxcbiAgICAnXFx1MUUxNyc6ICdlJyxcbiAgICAnXFx1MDExNSc6ICdlJyxcbiAgICAnXFx1MDExNyc6ICdlJyxcbiAgICAnXFx1MDBFQic6ICdlJyxcbiAgICAnXFx1MUVCQic6ICdlJyxcbiAgICAnXFx1MDExQic6ICdlJyxcbiAgICAnXFx1MDIwNSc6ICdlJyxcbiAgICAnXFx1MDIwNyc6ICdlJyxcbiAgICAnXFx1MUVCOSc6ICdlJyxcbiAgICAnXFx1MUVDNyc6ICdlJyxcbiAgICAnXFx1MDIyOSc6ICdlJyxcbiAgICAnXFx1MUUxRCc6ICdlJyxcbiAgICAnXFx1MDExOSc6ICdlJyxcbiAgICAnXFx1MUUxOSc6ICdlJyxcbiAgICAnXFx1MUUxQic6ICdlJyxcbiAgICAnXFx1MDI0Nyc6ICdlJyxcbiAgICAnXFx1MDI1Qic6ICdlJyxcbiAgICAnXFx1MDFERCc6ICdlJyxcbiAgICAnXFx1MjRENSc6ICdmJyxcbiAgICAnXFx1RkY0Nic6ICdmJyxcbiAgICAnXFx1MUUxRic6ICdmJyxcbiAgICAnXFx1MDE5Mic6ICdmJyxcbiAgICAnXFx1QTc3Qyc6ICdmJyxcbiAgICAnXFx1MjRENic6ICdnJyxcbiAgICAnXFx1RkY0Nyc6ICdnJyxcbiAgICAnXFx1MDFGNSc6ICdnJyxcbiAgICAnXFx1MDExRCc6ICdnJyxcbiAgICAnXFx1MUUyMSc6ICdnJyxcbiAgICAnXFx1MDExRic6ICdnJyxcbiAgICAnXFx1MDEyMSc6ICdnJyxcbiAgICAnXFx1MDFFNyc6ICdnJyxcbiAgICAnXFx1MDEyMyc6ICdnJyxcbiAgICAnXFx1MDFFNSc6ICdnJyxcbiAgICAnXFx1MDI2MCc6ICdnJyxcbiAgICAnXFx1QTdBMSc6ICdnJyxcbiAgICAnXFx1MUQ3OSc6ICdnJyxcbiAgICAnXFx1QTc3Ric6ICdnJyxcbiAgICAnXFx1MjRENyc6ICdoJyxcbiAgICAnXFx1RkY0OCc6ICdoJyxcbiAgICAnXFx1MDEyNSc6ICdoJyxcbiAgICAnXFx1MUUyMyc6ICdoJyxcbiAgICAnXFx1MUUyNyc6ICdoJyxcbiAgICAnXFx1MDIxRic6ICdoJyxcbiAgICAnXFx1MUUyNSc6ICdoJyxcbiAgICAnXFx1MUUyOSc6ICdoJyxcbiAgICAnXFx1MUUyQic6ICdoJyxcbiAgICAnXFx1MUU5Nic6ICdoJyxcbiAgICAnXFx1MDEyNyc6ICdoJyxcbiAgICAnXFx1MkM2OCc6ICdoJyxcbiAgICAnXFx1MkM3Nic6ICdoJyxcbiAgICAnXFx1MDI2NSc6ICdoJyxcbiAgICAnXFx1MDE5NSc6ICdodicsXG4gICAgJ1xcdTI0RDgnOiAnaScsXG4gICAgJ1xcdUZGNDknOiAnaScsXG4gICAgJ1xcdTAwRUMnOiAnaScsXG4gICAgJ1xcdTAwRUQnOiAnaScsXG4gICAgJ1xcdTAwRUUnOiAnaScsXG4gICAgJ1xcdTAxMjknOiAnaScsXG4gICAgJ1xcdTAxMkInOiAnaScsXG4gICAgJ1xcdTAxMkQnOiAnaScsXG4gICAgJ1xcdTAwRUYnOiAnaScsXG4gICAgJ1xcdTFFMkYnOiAnaScsXG4gICAgJ1xcdTFFQzknOiAnaScsXG4gICAgJ1xcdTAxRDAnOiAnaScsXG4gICAgJ1xcdTAyMDknOiAnaScsXG4gICAgJ1xcdTAyMEInOiAnaScsXG4gICAgJ1xcdTFFQ0InOiAnaScsXG4gICAgJ1xcdTAxMkYnOiAnaScsXG4gICAgJ1xcdTFFMkQnOiAnaScsXG4gICAgJ1xcdTAyNjgnOiAnaScsXG4gICAgJ1xcdTAxMzEnOiAnaScsXG4gICAgJ1xcdTI0RDknOiAnaicsXG4gICAgJ1xcdUZGNEEnOiAnaicsXG4gICAgJ1xcdTAxMzUnOiAnaicsXG4gICAgJ1xcdTAxRjAnOiAnaicsXG4gICAgJ1xcdTAyNDknOiAnaicsXG4gICAgJ1xcdTI0REEnOiAnaycsXG4gICAgJ1xcdUZGNEInOiAnaycsXG4gICAgJ1xcdTFFMzEnOiAnaycsXG4gICAgJ1xcdTAxRTknOiAnaycsXG4gICAgJ1xcdTFFMzMnOiAnaycsXG4gICAgJ1xcdTAxMzcnOiAnaycsXG4gICAgJ1xcdTFFMzUnOiAnaycsXG4gICAgJ1xcdTAxOTknOiAnaycsXG4gICAgJ1xcdTJDNkEnOiAnaycsXG4gICAgJ1xcdUE3NDEnOiAnaycsXG4gICAgJ1xcdUE3NDMnOiAnaycsXG4gICAgJ1xcdUE3NDUnOiAnaycsXG4gICAgJ1xcdUE3QTMnOiAnaycsXG4gICAgJ1xcdTI0REInOiAnbCcsXG4gICAgJ1xcdUZGNEMnOiAnbCcsXG4gICAgJ1xcdTAxNDAnOiAnbCcsXG4gICAgJ1xcdTAxM0EnOiAnbCcsXG4gICAgJ1xcdTAxM0UnOiAnbCcsXG4gICAgJ1xcdTFFMzcnOiAnbCcsXG4gICAgJ1xcdTFFMzknOiAnbCcsXG4gICAgJ1xcdTAxM0MnOiAnbCcsXG4gICAgJ1xcdTFFM0QnOiAnbCcsXG4gICAgJ1xcdTFFM0InOiAnbCcsXG4gICAgJ1xcdTAxN0YnOiAnbCcsXG4gICAgJ1xcdTAxNDInOiAnbCcsXG4gICAgJ1xcdTAxOUEnOiAnbCcsXG4gICAgJ1xcdTAyNkInOiAnbCcsXG4gICAgJ1xcdTJDNjEnOiAnbCcsXG4gICAgJ1xcdUE3NDknOiAnbCcsXG4gICAgJ1xcdUE3ODEnOiAnbCcsXG4gICAgJ1xcdUE3NDcnOiAnbCcsXG4gICAgJ1xcdTAxQzknOiAnbGonLFxuICAgICdcXHUyNERDJzogJ20nLFxuICAgICdcXHVGRjREJzogJ20nLFxuICAgICdcXHUxRTNGJzogJ20nLFxuICAgICdcXHUxRTQxJzogJ20nLFxuICAgICdcXHUxRTQzJzogJ20nLFxuICAgICdcXHUwMjcxJzogJ20nLFxuICAgICdcXHUwMjZGJzogJ20nLFxuICAgICdcXHUyNEREJzogJ24nLFxuICAgICdcXHVGRjRFJzogJ24nLFxuICAgICdcXHUwMUY5JzogJ24nLFxuICAgICdcXHUwMTQ0JzogJ24nLFxuICAgICdcXHUwMEYxJzogJ24nLFxuICAgICdcXHUxRTQ1JzogJ24nLFxuICAgICdcXHUwMTQ4JzogJ24nLFxuICAgICdcXHUxRTQ3JzogJ24nLFxuICAgICdcXHUwMTQ2JzogJ24nLFxuICAgICdcXHUxRTRCJzogJ24nLFxuICAgICdcXHUxRTQ5JzogJ24nLFxuICAgICdcXHUwMTlFJzogJ24nLFxuICAgICdcXHUwMjcyJzogJ24nLFxuICAgICdcXHUwMTQ5JzogJ24nLFxuICAgICdcXHVBNzkxJzogJ24nLFxuICAgICdcXHVBN0E1JzogJ24nLFxuICAgICdcXHUwMUNDJzogJ25qJyxcbiAgICAnXFx1MjRERSc6ICdvJyxcbiAgICAnXFx1RkY0Ric6ICdvJyxcbiAgICAnXFx1MDBGMic6ICdvJyxcbiAgICAnXFx1MDBGMyc6ICdvJyxcbiAgICAnXFx1MDBGNCc6ICdvJyxcbiAgICAnXFx1MUVEMyc6ICdvJyxcbiAgICAnXFx1MUVEMSc6ICdvJyxcbiAgICAnXFx1MUVENyc6ICdvJyxcbiAgICAnXFx1MUVENSc6ICdvJyxcbiAgICAnXFx1MDBGNSc6ICdvJyxcbiAgICAnXFx1MUU0RCc6ICdvJyxcbiAgICAnXFx1MDIyRCc6ICdvJyxcbiAgICAnXFx1MUU0Ric6ICdvJyxcbiAgICAnXFx1MDE0RCc6ICdvJyxcbiAgICAnXFx1MUU1MSc6ICdvJyxcbiAgICAnXFx1MUU1Myc6ICdvJyxcbiAgICAnXFx1MDE0Ric6ICdvJyxcbiAgICAnXFx1MDIyRic6ICdvJyxcbiAgICAnXFx1MDIzMSc6ICdvJyxcbiAgICAnXFx1MDBGNic6ICdvJyxcbiAgICAnXFx1MDIyQic6ICdvJyxcbiAgICAnXFx1MUVDRic6ICdvJyxcbiAgICAnXFx1MDE1MSc6ICdvJyxcbiAgICAnXFx1MDFEMic6ICdvJyxcbiAgICAnXFx1MDIwRCc6ICdvJyxcbiAgICAnXFx1MDIwRic6ICdvJyxcbiAgICAnXFx1MDFBMSc6ICdvJyxcbiAgICAnXFx1MUVERCc6ICdvJyxcbiAgICAnXFx1MUVEQic6ICdvJyxcbiAgICAnXFx1MUVFMSc6ICdvJyxcbiAgICAnXFx1MUVERic6ICdvJyxcbiAgICAnXFx1MUVFMyc6ICdvJyxcbiAgICAnXFx1MUVDRCc6ICdvJyxcbiAgICAnXFx1MUVEOSc6ICdvJyxcbiAgICAnXFx1MDFFQic6ICdvJyxcbiAgICAnXFx1MDFFRCc6ICdvJyxcbiAgICAnXFx1MDBGOCc6ICdvJyxcbiAgICAnXFx1MDFGRic6ICdvJyxcbiAgICAnXFx1MDI1NCc6ICdvJyxcbiAgICAnXFx1QTc0Qic6ICdvJyxcbiAgICAnXFx1QTc0RCc6ICdvJyxcbiAgICAnXFx1MDI3NSc6ICdvJyxcbiAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxuICAgICdcXHVBNzRGJzogJ29vJyxcbiAgICAnXFx1MjRERic6ICdwJyxcbiAgICAnXFx1RkY1MCc6ICdwJyxcbiAgICAnXFx1MUU1NSc6ICdwJyxcbiAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAnXFx1MDFBNSc6ICdwJyxcbiAgICAnXFx1MUQ3RCc6ICdwJyxcbiAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAnXFx1QTc1Myc6ICdwJyxcbiAgICAnXFx1QTc1NSc6ICdwJyxcbiAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAnXFx1RkY1MSc6ICdxJyxcbiAgICAnXFx1MDI0Qic6ICdxJyxcbiAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAnXFx1QTc1OSc6ICdxJyxcbiAgICAnXFx1MjRFMSc6ICdyJyxcbiAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAnXFx1MDE1NSc6ICdyJyxcbiAgICAnXFx1MUU1OSc6ICdyJyxcbiAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAnXFx1MDIxMSc6ICdyJyxcbiAgICAnXFx1MDIxMyc6ICdyJyxcbiAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAnXFx1MUU1RCc6ICdyJyxcbiAgICAnXFx1MDE1Nyc6ICdyJyxcbiAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAnXFx1MDI0RCc6ICdyJyxcbiAgICAnXFx1MDI3RCc6ICdyJyxcbiAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAnXFx1QTdBNyc6ICdyJyxcbiAgICAnXFx1QTc4Myc6ICdyJyxcbiAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAnXFx1RkY1Myc6ICdzJyxcbiAgICAnXFx1MDBERic6ICdzJyxcbiAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAnXFx1MUU2NSc6ICdzJyxcbiAgICAnXFx1MDE1RCc6ICdzJyxcbiAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAnXFx1MDE2MSc6ICdzJyxcbiAgICAnXFx1MUU2Nyc6ICdzJyxcbiAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAnXFx1MUU2OSc6ICdzJyxcbiAgICAnXFx1MDIxOSc6ICdzJyxcbiAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAnXFx1MDIzRic6ICdzJyxcbiAgICAnXFx1QTdBOSc6ICdzJyxcbiAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAnXFx1MUU5Qic6ICdzJyxcbiAgICAnXFx1MjRFMyc6ICd0JyxcbiAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAnXFx1MUU2Qic6ICd0JyxcbiAgICAnXFx1MUU5Nyc6ICd0JyxcbiAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAnXFx1MUU2RCc6ICd0JyxcbiAgICAnXFx1MDIxQic6ICd0JyxcbiAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAnXFx1MUU3MSc6ICd0JyxcbiAgICAnXFx1MUU2Ric6ICd0JyxcbiAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAnXFx1MDFBRCc6ICd0JyxcbiAgICAnXFx1MDI4OCc6ICd0JyxcbiAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAnXFx1QTc4Nyc6ICd0JyxcbiAgICAnXFx1QTcyOSc6ICd0eicsXG4gICAgJ1xcdTI0RTQnOiAndScsXG4gICAgJ1xcdUZGNTUnOiAndScsXG4gICAgJ1xcdTAwRjknOiAndScsXG4gICAgJ1xcdTAwRkEnOiAndScsXG4gICAgJ1xcdTAwRkInOiAndScsXG4gICAgJ1xcdTAxNjknOiAndScsXG4gICAgJ1xcdTFFNzknOiAndScsXG4gICAgJ1xcdTAxNkInOiAndScsXG4gICAgJ1xcdTFFN0InOiAndScsXG4gICAgJ1xcdTAxNkQnOiAndScsXG4gICAgJ1xcdTAwRkMnOiAndScsXG4gICAgJ1xcdTAxREMnOiAndScsXG4gICAgJ1xcdTAxRDgnOiAndScsXG4gICAgJ1xcdTAxRDYnOiAndScsXG4gICAgJ1xcdTAxREEnOiAndScsXG4gICAgJ1xcdTFFRTcnOiAndScsXG4gICAgJ1xcdTAxNkYnOiAndScsXG4gICAgJ1xcdTAxNzEnOiAndScsXG4gICAgJ1xcdTAxRDQnOiAndScsXG4gICAgJ1xcdTAyMTUnOiAndScsXG4gICAgJ1xcdTAyMTcnOiAndScsXG4gICAgJ1xcdTAxQjAnOiAndScsXG4gICAgJ1xcdTFFRUInOiAndScsXG4gICAgJ1xcdTFFRTknOiAndScsXG4gICAgJ1xcdTFFRUYnOiAndScsXG4gICAgJ1xcdTFFRUQnOiAndScsXG4gICAgJ1xcdTFFRjEnOiAndScsXG4gICAgJ1xcdTFFRTUnOiAndScsXG4gICAgJ1xcdTFFNzMnOiAndScsXG4gICAgJ1xcdTAxNzMnOiAndScsXG4gICAgJ1xcdTFFNzcnOiAndScsXG4gICAgJ1xcdTFFNzUnOiAndScsXG4gICAgJ1xcdTAyODknOiAndScsXG4gICAgJ1xcdTI0RTUnOiAndicsXG4gICAgJ1xcdUZGNTYnOiAndicsXG4gICAgJ1xcdTFFN0QnOiAndicsXG4gICAgJ1xcdTFFN0YnOiAndicsXG4gICAgJ1xcdTAyOEInOiAndicsXG4gICAgJ1xcdUE3NUYnOiAndicsXG4gICAgJ1xcdTAyOEMnOiAndicsXG4gICAgJ1xcdUE3NjEnOiAndnknLFxuICAgICdcXHUyNEU2JzogJ3cnLFxuICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICdcXHUxRTgxJzogJ3cnLFxuICAgICdcXHUxRTgzJzogJ3cnLFxuICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICdcXHUxRTg3JzogJ3cnLFxuICAgICdcXHUxRTg1JzogJ3cnLFxuICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICdcXHUxRTg5JzogJ3cnLFxuICAgICdcXHUyQzczJzogJ3cnLFxuICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICdcXHVGRjU4JzogJ3gnLFxuICAgICdcXHUxRThCJzogJ3gnLFxuICAgICdcXHUxRThEJzogJ3gnLFxuICAgICdcXHUyNEU4JzogJ3knLFxuICAgICdcXHVGRjU5JzogJ3knLFxuICAgICdcXHUxRUYzJzogJ3knLFxuICAgICdcXHUwMEZEJzogJ3knLFxuICAgICdcXHUwMTc3JzogJ3knLFxuICAgICdcXHUxRUY5JzogJ3knLFxuICAgICdcXHUwMjMzJzogJ3knLFxuICAgICdcXHUxRThGJzogJ3knLFxuICAgICdcXHUwMEZGJzogJ3knLFxuICAgICdcXHUxRUY3JzogJ3knLFxuICAgICdcXHUxRTk5JzogJ3knLFxuICAgICdcXHUxRUY1JzogJ3knLFxuICAgICdcXHUwMUI0JzogJ3knLFxuICAgICdcXHUwMjRGJzogJ3knLFxuICAgICdcXHUxRUZGJzogJ3knLFxuICAgICdcXHUyNEU5JzogJ3onLFxuICAgICdcXHVGRjVBJzogJ3onLFxuICAgICdcXHUwMTdBJzogJ3onLFxuICAgICdcXHUxRTkxJzogJ3onLFxuICAgICdcXHUwMTdDJzogJ3onLFxuICAgICdcXHUwMTdFJzogJ3onLFxuICAgICdcXHUxRTkzJzogJ3onLFxuICAgICdcXHUxRTk1JzogJ3onLFxuICAgICdcXHUwMUI2JzogJ3onLFxuICAgICdcXHUwMjI1JzogJ3onLFxuICAgICdcXHUwMjQwJzogJ3onLFxuICAgICdcXHUyQzZDJzogJ3onLFxuICAgICdcXHVBNzYzJzogJ3onLFxuICAgICdcXHUwMzg2JzogJ1xcdTAzOTEnLFxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxuICAgICdcXHUwMzhBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxuICAgICdcXHUwMzhFJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxuICAgICdcXHUwM0FDJzogJ1xcdTAzQjEnLFxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxuICAgICdcXHUwM0FGJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NDJzogJ1xcdTAzQkYnLFxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0IwJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0M5JzogJ1xcdTAzQzknLFxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBTcGVjaWFsQ2hhcnModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IChhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gZGlhY3JpdGljc1thXSB8fCBhO1xuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgICAvLyBGaXJzdCBjaGFyYWN0ZXIgaXMgYW4gJ2EnLCBpdCdzIGdvb2QgcHJhY3RpY2UgdG8gdGFnIGlkIHRvIGJlZ2luIHdpdGggYSBsZXR0ZXJcbiAgICByZXR1cm4gJ2F4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3hdL2csIGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGNvbnN0IHZhbCA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgKiBhcyBzZWFyY2hIZWxwZXIgZnJvbSAnLi9zZWFyY2gtaGVscGVyJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNGdW5jdGlvbiwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7IG5ld0lkIH0gZnJvbSAnLi9pZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcblxudHlwZSBPcHRpb25Hcm91cHMgPSBNYXA8c3RyaW5nIHwgTmdPcHRpb24sIE5nT3B0aW9uW10+O1xuXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcbiAgICBwcml2YXRlIF9ncm91cHM6IE9wdGlvbkdyb3VwcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9uZ1NlbGVjdDogTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIHByaXZhdGUgX3NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgX2l0ZW1zOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgaXRlbXMoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maWx0ZXJlZEl0ZW1zOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgZmlsdGVyZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWFya2VkSW5kZXggPSAtMTtcblxuICAgIGdldCBtYXJrZWRJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VkSW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbWFya2VkSXRlbSgpOiBOZ09wdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zW3RoaXMuX21hcmtlZEluZGV4XTtcbiAgICB9XG5cbiAgICBnZXQgbm9JdGVtc1RvU2VsZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgbWF4SXRlbXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuX25nU2VsZWN0Lm1heFNlbGVjdGVkSXRlbXMgPD0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgbGFzdFNlbGVjdGVkSXRlbSgpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1tpXTtcbiAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMubWFwSXRlbShpdGVtLCBpbmRleCkpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSkge1xuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzID0gdGhpcy5fZ3JvdXBCeSh0aGlzLl9pdGVtcywgdGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2ZsYXR0ZW4odGhpcy5fZ3JvdXBzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyb3Vwcy5zZXQodW5kZWZpbmVkLCB0aGlzLl9pdGVtcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2l0ZW1zXTtcbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgfHwgdGhpcy5tYXhJdGVtc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlU2VsZWN0ZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSk7XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgaXNEZWZpbmVkKGl0ZW0uaW5kZXgpICYmIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93U2VsZWN0ZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSXRlbSh2YWx1ZTogYW55KTogTmdPcHRpb24ge1xuICAgICAgICBsZXQgZmluZEJ5OiAoaXRlbTogTmdPcHRpb24pID0+IGJvb2xlYW47XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aCkge1xuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiB0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gIWl0ZW0uY2hpbGRyZW4gJiYgdGhpcy5yZXNvbHZlTmVzdGVkKGl0ZW0udmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSkgPT09IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlIHx8XG4gICAgICAgICAgICAgICAgIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5sYWJlbCAmJiBpdGVtLmxhYmVsID09PSB0aGlzLnJlc29sdmVOZXN0ZWQodmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuZmluZChpdGVtID0+IGZpbmRCeShpdGVtKSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5tYXBJdGVtKGl0ZW0sIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RlZChrZWVwRGlzYWJsZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcihrZWVwRGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGtlZXBEaXNhYmxlZCAmJiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGlzYWJsZWQ7XG4gICAgICAgICAgICBpdGVtLm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRCeUxhYmVsKHRlcm06IHN0cmluZykge1xuICAgICAgICB0ZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRlcm0pLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGl0ZW0ubGFiZWwpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWwuc3Vic3RyKDAsIHRlcm0ubGVuZ3RoKSA9PT0gdGVybTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgICAgIHRlcm0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IHRlcm0gOiBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGVybSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiB8fCB0aGlzLl9kZWZhdWx0U2VhcmNoRm47XG4gICAgICAgIGNvbnN0IGhpZGVTZWxlY3RlZCA9IHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZDtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuX2dyb3Vwcy5rZXlzKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9ncm91cHMuZ2V0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVNlbGVjdGVkICYmIChpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5zZWxlY3RlZCB8fCBpdGVtLnNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuID8gaXRlbS52YWx1ZSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKHRlcm0sIHNlYXJjaEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsYXN0XSA9IG1hdGNoZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLl9pdGVtcy5maW5kKHggPT4geCA9PT0gbGFzdC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaCguLi5tYXRjaGVkSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRGaWx0ZXJlZEl0ZW1zKCkge1xuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcih4ID0+ICF4LnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFya0l0ZW0oKSB7XG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgbWFya05leHRJdGVtKCkge1xuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKCsxKTtcbiAgICB9XG5cbiAgICBtYXJrUHJldmlvdXNJdGVtKCkge1xuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKC0xKTtcbiAgICB9XG5cbiAgICBtYXJrSXRlbShpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB9XG5cbiAgICBtYXJrU2VsZWN0ZWRPckRlZmF1bHQobWFya0RlZmF1bHQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0U2VsZWN0ZWQgPSB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgPyAtMSA6IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRJdGVtICYmIGluZGV4T2ZMYXN0U2VsZWN0ZWQgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSBpbmRleE9mTGFzdFNlbGVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmV4Y2x1ZGVHcm91cHNGcm9tRGVmYXVsdFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQgJiYgIXguY2hpbGRyZW4pIDogLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQpIDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlTmVzdGVkKG9wdGlvbjogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcEl0ZW0oaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogTmdPcHRpb24ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGlzRGVmaW5lZChpdGVtLiRuZ09wdGlvbkxhYmVsKSA/IGl0ZW0uJG5nT3B0aW9uTGFiZWwgOiB0aGlzLnJlc29sdmVOZXN0ZWQoaXRlbSwgdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc0RlZmluZWQoaXRlbS4kbmdPcHRpb25WYWx1ZSkgPyBpdGVtLiRuZ09wdGlvblZhbHVlIDogaXRlbTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGxhYmVsOiBpc0RlZmluZWQobGFiZWwpID8gbGFiZWwudG9TdHJpbmcoKSA6ICcnLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICBodG1sSWQ6IG5ld0lkKCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbWFwU2VsZWN0ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlID8gdGhpcy5yZXNvbHZlTmVzdGVkKHNlbGVjdGVkLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIDogc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXNEZWZpbmVkKHZhbHVlKSA/IHRoaXMuZmluZEl0ZW0odmFsdWUpIDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnVuc2VsZWN0KHNlbGVjdGVkLCBtdWx0aXBsZSk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSB8fCBzZWxlY3RlZCwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZih4KSA9PT0gLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2hvd1NlbGVjdGVkKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEV4aXN0cyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmluZCh4ID0+IHggPT09IHBhcmVudCk7XG4gICAgICAgICAgICBpZiAoIXBhcmVudEV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2ZpbHRlcmVkSXRlbXMuc29ydCgoYSwgYikgPT4gKGEuaW5kZXggLSBiLmluZGV4KSldO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGVTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmV2ZXJ5KHggPT4geC5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtLnBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0U2VhcmNoRm4oc2VhcmNoOiBzdHJpbmcsIG9wdDogTmdPcHRpb24pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMob3B0LmxhYmVsKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbGFiZWwuaW5kZXhPZihzZWFyY2gpID4gLTFcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXROZXh0SXRlbUluZGV4KHN0ZXBzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHN0ZXBzID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9tYXJrZWRJbmRleCA9PT0gdGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSA/IDAgOiAodGhpcy5fbWFya2VkSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX21hcmtlZEluZGV4IDw9IDApID8gKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgOiAodGhpcy5fbWFya2VkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGVwVG9JdGVtKHN0ZXBzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZXZlcnkoeCA9PiB4LmRpc2FibGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9nZXROZXh0SXRlbUluZGV4KHN0ZXBzKTtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkSXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RlcFRvSXRlbShzdGVwcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9ncm91cEJ5KGl0ZW1zOiBOZ09wdGlvbltdLCBwcm9wOiBzdHJpbmcgfCBGdW5jdGlvbik6IE9wdGlvbkdyb3VwcyB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nIHwgTmdPcHRpb24sIE5nT3B0aW9uW10+KCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBpdGVtcyBhcmUgYWxyZWFkeSBncm91cGVkIGJ5IGdpdmVuIGtleS5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXNbMF0udmFsdWVbPHN0cmluZz5wcm9wXSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gKGl0ZW0udmFsdWVbPHN0cmluZz5wcm9wXSB8fCBbXSkubWFwKCh4LCBpbmRleCkgPT4gdGhpcy5tYXBJdGVtKHgsIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChpdGVtLCBjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNGbktleSA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgIGNvbnN0IGtleUZuID0gKGl0ZW06IE5nT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQga2V5ID0gaXNGbktleSA/ICg8RnVuY3Rpb24+cHJvcCkoaXRlbS52YWx1ZSkgOiBpdGVtLnZhbHVlWzxzdHJpbmc+cHJvcF07XG4gICAgICAgICAgICByZXR1cm4gaXNEZWZpbmVkKGtleSkgPyBrZXkgOiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR3JvdXAgaXRlbXMgYnkga2V5LlxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlGbihpdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChrZXksIFtpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mbGF0dGVuKGdyb3VwczogT3B0aW9uR3JvdXBzKSB7XG4gICAgICAgIGNvbnN0IGlzR3JvdXBCeUZuID0gaXNGdW5jdGlvbih0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3Qgd2l0aG91dEdyb3VwID0gZ3JvdXBzLmdldCh1bmRlZmluZWQpIHx8IFtdO1xuICAgICAgICBpdGVtcy5wdXNoKC4uLndpdGhvdXRHcm91cCk7XG4gICAgICAgIGxldCBpID0gd2l0aG91dEdyb3VwLmxlbmd0aDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbShncm91cHMua2V5cygpKSkge1xuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNPYmplY3RLZXkgPSBpc09iamVjdChrZXkpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBOZ09wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXNPYmplY3RLZXkgPyAnJyA6IDxzdHJpbmc+a2V5LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpKyssXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXAsXG4gICAgICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gaXNHcm91cEJ5Rm4gPyB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwgOiA8c3RyaW5nPnRoaXMuX25nU2VsZWN0Lmdyb3VwQnk7XG4gICAgICAgICAgICBjb25zdCBncm91cFZhbHVlID0gdGhpcy5fbmdTZWxlY3QuZ3JvdXBWYWx1ZSB8fCAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdEtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxOZ09wdGlvbj5rZXkpLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBbZ3JvdXBLZXldOiBrZXkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncm91cHMuZ2V0KGtleSkubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIHgucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHguY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgeC5pbmRleCA9IGkrKztcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICBwYXJlbnQudmFsdWUgPSBncm91cFZhbHVlKGtleSwgY2hpbGRyZW4ubWFwKHggPT4geC52YWx1ZSkpO1xuICAgICAgICAgICAgaXRlbXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgaXRlbXMucHVzaCguLi5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgTmdPcHRpb24ge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XG4gICAgaW5kZXg/OiBudW1iZXI7XG4gICAgaHRtbElkPzogc3RyaW5nO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgbWFya2VkPzogYm9vbGVhbjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB2YWx1ZT86IHN0cmluZyB8IE9iamVjdDtcbiAgICBwYXJlbnQ/OiBOZ09wdGlvbjtcbiAgICBjaGlsZHJlbj86IE5nT3B0aW9uW107XG59XG5cbmV4cG9ydCBlbnVtIEtleUNvZGUge1xuICAgIFRhYiA9IDksXG4gICAgRW50ZXIgPSAxMyxcbiAgICBFc2MgPSAyNyxcbiAgICBTcGFjZSA9IDMyLFxuICAgIEFycm93VXAgPSAzOCxcbiAgICBBcnJvd0Rvd24gPSA0MCxcbiAgICBCYWNrc3BhY2UgPSA4XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGhhbmRsZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgdGltZW91dDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtc0RpbWVuc2lvbnMge1xuICAgIGl0ZW1zTGVuZ3RoOiBudW1iZXI7XG4gICAgdmlld1dpZHRoOiBudW1iZXI7XG4gICAgdmlld0hlaWdodDogbnVtYmVyO1xuICAgIGNoaWxkV2lkdGg6IG51bWJlcjtcbiAgICBjaGlsZEhlaWdodDogbnVtYmVyO1xuICAgIGl0ZW1zUGVyQ29sOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbFNlcnZpY2Uge1xuXG4gICAgY2FsY3VsYXRlSXRlbXMoZDogSXRlbXNEaW1lbnNpb25zLCBkcm9wZG93bkVsOiBIVE1MRWxlbWVudCwgYnVmZmVyQW1vdW50OiBudW1iZXIpOiBJdGVtc1JhbmdlUmVzdWx0IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5jaGlsZEhlaWdodCAqIGQuaXRlbXNMZW5ndGg7XG4gICAgICAgIGlmIChkcm9wZG93bkVsLnNjcm9sbFRvcCA+IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBkcm9wZG93bkVsLnNjcm9sbFRvcCk7XG4gICAgICAgIGNvbnN0IGluZGV4QnlTY3JvbGxUb3AgPSBzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgTWF0aC5jZWlsKGluZGV4QnlTY3JvbGxUb3ApICsgKGQuaXRlbXNQZXJDb2wgKyAxKSk7XG5cbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyQ29sIC0gMSk7XG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWluKG1heFN0YXJ0LCBNYXRoLmZsb29yKGluZGV4QnlTY3JvbGxUb3ApKTtcblxuICAgICAgICBsZXQgdG9wUGFkZGluZyA9IGQuY2hpbGRIZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihzdGFydCwgYnVmZmVyQW1vdW50KSk7XG4gICAgICAgIHRvcFBhZGRpbmcgPSAhaXNOYU4odG9wUGFkZGluZykgPyB0b3BQYWRkaW5nIDogMDtcbiAgICAgICAgc3RhcnQgPSAhaXNOYU4oc3RhcnQpID8gc3RhcnQgOiAtMTtcbiAgICAgICAgZW5kID0gIWlzTmFOKGVuZCkgPyBlbmQgOiAtMTtcbiAgICAgICAgc3RhcnQgLT0gYnVmZmVyQW1vdW50O1xuICAgICAgICBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0KTtcbiAgICAgICAgZW5kICs9IGJ1ZmZlckFtb3VudDtcbiAgICAgICAgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgZW5kKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wUGFkZGluZzogdG9wUGFkZGluZyxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbXNMZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlciwgcGFuZWxFbDogSFRNTEVsZW1lbnQsIGNvbnRlbnRFbDogSFRNTEVsZW1lbnQpOiBJdGVtc0RpbWVuc2lvbnMge1xuICAgICAgICBjb25zdCBwYW5lbFJlY3QgPSBwYW5lbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBpdGVtUmVjdCA9IGNvbnRlbnRFbC5jaGlsZHJlbltpbmRleF0gPyBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDoge1xuICAgICAgICAgICAgd2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaXRlbXNQZXJDb2wgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBhbmVsUmVjdC5oZWlnaHQgLyBpdGVtUmVjdC5oZWlnaHQpKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXNMZW5ndGg6IGl0ZW1zTGVuZ3RoLFxuICAgICAgICAgICAgdmlld1dpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgY2hpbGRXaWR0aDogaXRlbVJlY3Qud2lkdGgsXG4gICAgICAgICAgICBjaGlsZEhlaWdodDogaXRlbVJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgaXRlbXNQZXJDb2w6IGl0ZW1zUGVyQ29sLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIE5nWm9uZSxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uSW5pdCxcbiAgICBPbkNoYW5nZXMsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBEcm9wZG93blBvc2l0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuY29uc3QgVE9QX0NTU19DTEFTUyA9ICduZy1zZWxlY3QtdG9wJztcbmNvbnN0IEJPVFRPTV9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LWJvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc2VsZWN0b3I6ICduZy1kcm9wZG93bi1wYW5lbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImhlYWRlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNzY3JvbGwgY2xhc3M9XCJuZy1kcm9wZG93bi1wYW5lbC1pdGVtcyBzY3JvbGwtaG9zdFwiPlxuICAgICAgICAgICAgPGRpdiAjcGFkZGluZyBbY2xhc3MudG90YWwtcGFkZGluZ109XCJ2aXJ0dWFsU2Nyb2xsXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IFtjbGFzcy5zY3JvbGxhYmxlLWNvbnRlbnRdPVwidmlydHVhbFNjcm9sbCAmJiBpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZm9vdGVyVGVtcGxhdGVcIiBjbGFzcz1cIm5nLWRyb3Bkb3duLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHNlYXJjaFRlcm06IGZpbHRlclZhbHVlIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIEBJbnB1dCgpIGl0ZW1zOiBOZ09wdGlvbltdID0gW107XG4gICAgQElucHV0KCkgbWFya2VkSXRlbTogTmdPcHRpb247XG4gICAgQElucHV0KCkgcG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcbiAgICBASW5wdXQoKSBidWZmZXJBbW91bnQgPSA0O1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBASW5wdXQoKSBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICAgIEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcbiAgICBAT3V0cHV0KCkgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIG91dHNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29udGVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNjcm9sbEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncGFkZGluZycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwYWRkaW5nRWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kcm9wZG93bjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2VsZWN0OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1N0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJldmlvdXNFbmQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zdGFydHVwTG9vcCA9IHRydWU7XG4gICAgcHJpdmF0ZSBfaXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbjtcbiAgICBwcml2YXRlIF9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7IH07XG4gICAgcHJpdmF0ZSBfZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7IH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIF92aXJ0dWFsU2Nyb2xsU2VydmljZTogVmlydHVhbFNjcm9sbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3dpbmRvdzogV2luZG93U2VydmljZSxcbiAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24gPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSB0aGlzLl9kcm9wZG93bi5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLl9oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgeyBjYXB0dXJlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNlZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoJGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soJGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUl0ZW1zQ2hhbmdlKGNoYW5nZXMuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9kcm9wZG93bi5wYXJlbnROb2RlLCB0aGlzLl9kcm9wZG93bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuX3doZW5Db250ZW50UmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZXN0cm95JC5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRG9jdW1lbnRSZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKS50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2Nyb2xsSW50byhpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnModGhpcy52aXJ0dWFsU2Nyb2xsID8gMCA6IGluZGV4KTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gTWF0aC5mbG9vcihkLnZpZXdIZWlnaHQgLyBkLmNoaWxkSGVpZ2h0KSAtIDE7XG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IChpbmRleCAqIGQuY2hpbGRIZWlnaHQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWw6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBBcnJheS5mcm9tKGNvbnRlbnRFbC5jaGlsZHJlbikuc2xpY2UoMCwgaW5kZXgpLnJlZHVjZSgoYywgbikgPT4gYyArIG4uY2xpZW50SGVpZ2h0LCAwKTtcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IGNoaWxkcmVuSGVpZ2h0IC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxJbnRvVGFnKCkge1xuICAgICAgICBjb25zdCBlbDogRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBkID0gdGhpcy5fY2FsY3VsYXRlRGltZW5zaW9ucygpO1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBkLmNoaWxkSGVpZ2h0ICogKGQuaXRlbXNMZW5ndGggKyAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl93aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24gPSB0aGlzLl9jYWxjdWxhdGVDdXJyZW50UG9zaXRpb24odGhpcy5fZHJvcGRvd24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBCT1RUT01fQ1NTX0NMQVNTKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9kcm9wZG93bi5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9ICRldmVudC5wYXRoIHx8ICgkZXZlbnQuY29tcG9zZWRQYXRoICYmICRldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICYmICRldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiBwYXRoICYmIHBhdGhbMF0gJiYgdGhpcy5fc2VsZWN0LmNvbnRhaW5zKHBhdGhbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm91dHNpZGVDbGljay5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVTY3JvbGxUb0VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVJdGVtc0NoYW5nZShpdGVtczogeyBwcmV2aW91c1ZhbHVlOiBOZ09wdGlvbltdLCBjdXJyZW50VmFsdWU6IE5nT3B0aW9uW10gfSkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzRW5kID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaXRlbXMgIT09IHVuZGVmaW5lZCAmJiBpdGVtcy5wcmV2aW91c1ZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIChpdGVtcy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUl0ZW1zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBOZ1pvbmUuYXNzZXJ0Tm90SW5Bbmd1bGFyWm9uZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZUl0ZW1zKGQsIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1ZmZlckFtb3VudCB8fCAwKTtcblxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLmhlaWdodCA9IGAke3Jlcy5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyByZXMudG9wUGFkZGluZyArICdweCknO1xuXG4gICAgICAgICAgICBpZiAocmVzLnN0YXJ0ICE9PSB0aGlzLl9wcmV2aW91c1N0YXJ0IHx8IHJlcy5lbmQgIT09IHRoaXMuX3ByZXZpb3VzRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuaXRlbXMuc2xpY2UocmVzLnN0YXJ0LCByZXMuZW5kKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoeyBzdGFydDogcmVzLnN0YXJ0LCBlbmQ6IHJlcy5lbmQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdGFydCA9IHJlcy5zdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHJlcy5lbmQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9vcChyZXNvbHZlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydHVwTG9vcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0dXBMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbG9vcChyZXNvbHZlKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maXJlU2Nyb2xsVG9FbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0VuZEZpcmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Nyb2xsOiBIVE1MRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nOiBIVE1MRWxlbWVudCA9IHRoaXMudmlydHVhbFNjcm9sbCA/XG4gICAgICAgICAgICB0aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOlxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmIChzY3JvbGwuc2Nyb2xsVG9wICsgdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0ID49IHBhZGRpbmcuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvRW5kLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRGltZW5zaW9ucyhpbmRleCA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZURpbWVuc2lvbnMoXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZURvY3VtZW50UmVzaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCB8fCAhdGhpcy5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvKHRoaXMubWFya2VkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKGRyb3Bkb3duRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHNlbGVjdFJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPSBkcm9wZG93bkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGhlaWdodCArIGRyb3Bkb3duSGVpZ2h0ID4gc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuICd0b3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbyk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFwcGVuZFRvIHNlbGVjdG9yICR7dGhpcy5hcHBlbmRUb30gZGlkIG5vdCBmb3VuZCBhbnkgcGFyZW50IGVsZW1lbnRgKVxuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9kcm9wZG93bik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCAtIGJvdW5kaW5nUmVjdC50b3A7XG4gICAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBzZWxlY3RSZWN0LmxlZnQgLSBib3VuZGluZ1JlY3QubGVmdDtcbiAgICAgICAgY29uc3QgdG9wRGVsdGEgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICdib3R0b20nID8gc2VsZWN0UmVjdC5oZWlnaHQgOiAtdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS50b3AgPSBvZmZzZXRUb3AgKyB0b3BEZWx0YSArICdweCc7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUubGVmdCA9IG9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS53aWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5taW5XaWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3doZW5Db250ZW50UmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWR5ID0gKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5nT3B0aW9uID0gdGhpcy5fZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLm5nLW9wdGlvbicpO1xuICAgICAgICAgICAgaWYgKG5nT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVhZHkocmVzb2x2ZSksIDUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVhZHkocmVzb2x2ZSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1vcHRpb24nLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSB0aGlzLl9pc0Rpc2FibGVkKHZhbHVlKSB9XG5cbiAgICByZWFkb25seSBzdGF0ZUNoYW5nZSQgPSBuZXcgU3ViamVjdDx7IHZhbHVlOiBhbnksIGRpc2FibGVkOiBib29sZWFuIH0+KCk7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UkLm5leHQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLl9kaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0Q29uZmlnIHtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIG5vdEZvdW5kVGV4dCA9ICdObyBpdGVtcyBmb3VuZCc7XG4gICAgdHlwZVRvU2VhcmNoVGV4dCA9ICdUeXBlIHRvIHNlYXJjaCc7XG4gICAgYWRkVGFnVGV4dCA9ICdBZGQgaXRlbSc7XG4gICAgbG9hZGluZ1RleHQgPSAnTG9hZGluZy4uLic7XG4gICAgY2xlYXJBbGxUZXh0ID0gJ0NsZWFyIGFsbCc7XG4gICAgZGlzYWJsZVZpcnR1YWxTY3JvbGwgPSB0cnVlO1xuICAgIG9wZW5PbkVudGVyID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkNoYW5nZXMsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBmb3J3YXJkUmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBJbmplY3QsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIEluamVjdGlvblRva2VuLFxuICAgIEF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRha2VVbnRpbCwgc3RhcnRXaXRoLCB0YXAsIGRlYm91bmNlVGltZSwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNEZWZpbmVkLCBpc0Z1bmN0aW9uLCBpc1Byb21pc2UsIGlzT2JqZWN0IH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XG5pbXBvcnQgeyBJdGVtc0xpc3QgfSBmcm9tICcuL2l0ZW1zLWxpc3QnO1xuaW1wb3J0IHsgTmdPcHRpb24sIEtleUNvZGUgfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBuZXdJZCB9IGZyb20gJy4vaWQnO1xuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHsgTmdTZWxlY3RDb25maWcgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZID0gbmV3IEluamVjdGlvblRva2VuPFNlbGVjdGlvbk1vZGVsRmFjdG9yeT4oJ25nLXNlbGVjdC1zZWxlY3Rpb24tbW9kZWwnKTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duUG9zaXRpb24gPSAnYm90dG9tJyB8ICd0b3AnIHwgJ2F1dG8nO1xuZXhwb3J0IHR5cGUgQXV0b0NvcnJlY3QgPSAnb2ZmJyB8ICdvbic7XG5leHBvcnQgdHlwZSBBdXRvQ2FwaXRhbGl6ZSA9ICdvZmYnIHwgJ29uJztcbmV4cG9ydCB0eXBlIEFkZFRhZ0ZuID0gKCh0ZXJtOiBzdHJpbmcpID0+IGFueSB8IFByb21pc2U8YW55Pik7XG5leHBvcnQgdHlwZSBDb21wYXJlV2l0aEZuID0gKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgR3JvdXBWYWx1ZUZuID0gKGtleTogc3RyaW5nIHwgb2JqZWN0LCBjaGlsZHJlbjogYW55W10pID0+IHN0cmluZyB8IG9iamVjdDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9XSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ3JvbGUnOiAnbGlzdGJveCcsXG4gICAgICAgICdjbGFzcyc6ICduZy1zZWxlY3QnLFxuICAgICAgICAnW2NsYXNzLm5nLXNlbGVjdC1zaW5nbGVdJzogJyFtdWx0aXBsZScsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBiaW5kTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbGVhcmFibGUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1hcmtGaXJzdCA9IHRydWU7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBub3RGb3VuZFRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB0eXBlVG9TZWFyY2hUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgYWRkVGFnVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xlYXJBbGxUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZHJvcGRvd25Qb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbiA9ICdhdXRvJztcbiAgICBASW5wdXQoKSBhcHBlbmRUbzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBoaWRlU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZWxlY3RPblRhYiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG9wZW5PbkVudGVyOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIG1heFNlbGVjdGVkSXRlbXM6IG51bWJlcjtcbiAgICBASW5wdXQoKSBncm91cEJ5OiBzdHJpbmcgfCBGdW5jdGlvbjtcbiAgICBASW5wdXQoKSBncm91cFZhbHVlOiBHcm91cFZhbHVlRm47XG4gICAgQElucHV0KCkgYnVmZmVyQW1vdW50ID0gNDtcbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNlbGVjdGFibGVHcm91cCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNlbGVjdGFibGVHcm91cEFzTW9kZWwgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNlYXJjaEZuID0gbnVsbDtcbiAgICBASW5wdXQoKSBleGNsdWRlR3JvdXBzRnJvbURlZmF1bHRTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjbGVhck9uQmFja3NwYWNlID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGxhYmVsRm9ySWQgPSBudWxsO1xuICAgIEBJbnB1dCgpIGF1dG9Db3JyZWN0OiBBdXRvQ29ycmVjdCA9ICdvZmYnO1xuICAgIEBJbnB1dCgpIGF1dG9DYXBpdGFsaXplOiBBdXRvQ2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXR5cGVhaGVhZCcpIHR5cGVhaGVhZDogU3ViamVjdDxzdHJpbmc+O1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW11bHRpcGxlJykgbXVsdGlwbGUgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC10YWdnYWJsZScpIGFkZFRhZzogYm9vbGVhbiB8IEFkZFRhZ0ZuID0gZmFsc2U7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtc2VhcmNoYWJsZScpIHNlYXJjaGFibGUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW9wZW5lZCcpIGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgaXRlbXMoKSB7IHJldHVybiB0aGlzLl9pdGVtcyB9O1xuICAgIHNldCBpdGVtcyh2YWx1ZTogYW55W10pIHtcbiAgICAgICAgdGhpcy5faXRlbXNBcmVVc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgY29tcGFyZVdpdGgoKSB7IHJldHVybiB0aGlzLl9jb21wYXJlV2l0aDsgfVxuICAgIHNldCBjb21wYXJlV2l0aChmbjogQ29tcGFyZVdpdGhGbikge1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignYGNvbXBhcmVXaXRoYCBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBjbGVhclNlYXJjaE9uQWRkKCkgeyByZXR1cm4gaXNEZWZpbmVkKHRoaXMuX2NsZWFyU2VhcmNoT25BZGQpID8gdGhpcy5fY2xlYXJTZWFyY2hPbkFkZCA6IHRoaXMuY2xvc2VPblNlbGVjdDsgfTtcbiAgICBzZXQgY2xlYXJTZWFyY2hPbkFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaE9uQWRkID0gdmFsdWU7XG4gICAgfTtcblxuICAgIC8vIG91dHB1dCBldmVudHNcbiAgICBAT3V0cHV0KCdibHVyJykgYmx1ckV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2ZvY3VzJykgZm9jdXNFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvcGVuJykgb3BlbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2Nsb3NlJykgY2xvc2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8e3Rlcm06IHN0cmluZywgaXRlbXM6IGFueVtdfT4oKTtcbiAgICBAT3V0cHV0KCdjbGVhcicpIGNsZWFyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnYWRkJykgYWRkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgncmVtb3ZlJykgcmVtb3ZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnc2Nyb2xsJykgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XG4gICAgQE91dHB1dCgnc2Nyb2xsVG9FbmQnKSBzY3JvbGxUb0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vIGN1c3RvbSB0ZW1wbGF0ZXNcbiAgICBAQ29udGVudENoaWxkKE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0Z3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbXVsdGlMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbm90Rm91bmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdHlwZVRvU2VhcmNoVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbG9hZGluZ1RleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGFnVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQpKSBkcm9wZG93blBhbmVsOiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ09wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBuZ09wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD47XG4gICAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWRpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1maWx0ZXJlZCcpIGdldCBmaWx0ZXJlZCgpIHsgcmV0dXJuICEhdGhpcy5maWx0ZXJWYWx1ZSAmJiB0aGlzLnNlYXJjaGFibGUgfTtcblxuICAgIGl0ZW1zTGlzdDogSXRlbXNMaXN0O1xuICAgIHZpZXdQb3J0SXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcbiAgICBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBkcm9wZG93bklkID0gbmV3SWQoKTtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBmb2N1c2VkOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBbXTtcbiAgICBwcml2YXRlIF9pdGVtc0FyZVVzZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfZGVmYXVsdExhYmVsID0gJ2xhYmVsJztcbiAgICBwcml2YXRlIF9wcmltaXRpdmUgPSB0cnVlO1xuICAgIHByaXZhdGUgX21hbnVhbE9wZW46IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcHJlc3NlZEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfY29tcGFyZVdpdGg6IENvbXBhcmVXaXRoRm47XG4gICAgcHJpdmF0ZSBfY2xlYXJTZWFyY2hPbkFkZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlQcmVzcyQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gICAgY2xlYXJJdGVtID0gKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZCh4ID0+IHgudmFsdWUgPT09IGl0ZW0pO1xuICAgICAgICB0aGlzLnVuc2VsZWN0KG9wdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAQXR0cmlidXRlKCdjbGFzcycpIHB1YmxpYyBjbGFzc2VzOiBzdHJpbmcsXG4gICAgICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgcHVibGljIHRhYkluZGV4OiBzdHJpbmcsXG4gICAgICAgIEBBdHRyaWJ1dGUoJ2F1dG9mb2N1cycpIHByaXZhdGUgYXV0b0ZvY3VzOiBhbnksXG4gICAgICAgIGNvbmZpZzogTmdTZWxlY3RDb25maWcsXG4gICAgICAgIEBJbmplY3QoU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkpIG5ld1NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbEZhY3RvcnksXG4gICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX2NvbnNvbGU6IENvbnNvbGVTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX21lcmdlR2xvYmFsQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdCh0aGlzLCBuZXdTZWxlY3Rpb25Nb2RlbCgpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNMaXN0LnNlbGVjdGVkSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkVmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVLZXlQcmVzc2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtcyhjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW51YWxPcGVuID0gaXNEZWZpbmVkKGNoYW5nZXMuaXNPcGVuLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXRlbXNBcmVVc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZmluZWQodGhpcy5hdXRvRm9jdXMpKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIGhhbmRsZUtleURvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChLZXlDb2RlWyRldmVudC53aGljaF0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkFycm93RG93bjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5BcnJvd1VwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd1VwKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TcGFjZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3BhY2UoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuVGFiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUYWIoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVzYzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQmFja3NwYWNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoJGV2ZW50LmtleSAmJiAkZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWNsZWFyLXdyYXBwZXInKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGVhckNsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmctYXJyb3ctd3JhcHBlcicpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWx1ZS1pY29uJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcnJvd0NsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xlYXJDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkLm5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckV2ZW50LmVtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhck1vZGVsKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVXcml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzT3BlbiB8fCB0aGlzLml0ZW1zTGlzdC5tYXhJdGVtc1NlbGVjdGVkIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMuYWRkVGFnICYmIHRoaXMuaXRlbXNMaXN0Lm5vSXRlbXNUb1NlbGVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgdGhpcy5vcGVuRXZlbnQuZW1pdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRvZ2dsZUl0ZW0oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPbkFkZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudC5lbWl0KGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCB8fCB0aGlzLml0ZW1zTGlzdC5ub0l0ZW1zVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnVuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudC5lbWl0KGl0ZW0pO1xuICAgIH1cblxuICAgIHNlbGVjdFRhZygpIHtcbiAgICAgICAgbGV0IHRhZztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5hZGRUYWcpKSB7XG4gICAgICAgICAgICB0YWcgPSAoPEFkZFRhZ0ZuPnRoaXMuYWRkVGFnKSh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhZyA9IHRoaXMuX3ByaW1pdGl2ZSA/IHRoaXMuZmlsdGVyVmFsdWUgOiB7IFt0aGlzLmJpbmRMYWJlbF06IHRoaXMuZmlsdGVyVmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRhZyA9IChpdGVtKSA9PiB0aGlzLl9pc1R5cGVhaGVhZCB8fCAhdGhpcy5pc09wZW4gPyB0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpIDogdGhpcy5pdGVtc0xpc3QuYWRkSXRlbShpdGVtKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZSh0YWcpKSB7XG4gICAgICAgICAgICB0YWcudGhlbihpdGVtID0+IHRoaXMuc2VsZWN0KGhhbmRsZVRhZyhpdGVtKSkpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChoYW5kbGVUYWcodGFnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q2xlYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyYWJsZSAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgc2hvd0FkZFRhZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy5maWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRUYWcgJiZcbiAgICAgICAgICAgICghdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5zb21lKHggPT4geC5sYWJlbC50b0xvd2VyQ2FzZSgpID09PSB0ZXJtKSAmJlxuICAgICAgICAgICAgICAgICghdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pc09wZW4gfHwgIXRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKHggPT4geC5sYWJlbC50b0xvd2VyQ2FzZSgpID09PSB0ZXJtKSkpICYmXG4gICAgICAgICAgICAhdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIHNob3dOb0l0ZW1zRm91bmQoKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDA7XG4gICAgICAgIHJldHVybiAoKGVtcHR5ICYmICF0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5sb2FkaW5nKSB8fFxuICAgICAgICAgICAgKGVtcHR5ICYmIHRoaXMuX2lzVHlwZWFoZWFkICYmIHRoaXMuZmlsdGVyVmFsdWUgJiYgIXRoaXMubG9hZGluZykpICYmXG4gICAgICAgICAgICAhdGhpcy5zaG93QWRkVGFnO1xuICAgIH1cblxuICAgIHNob3dUeXBlVG9TZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDA7XG4gICAgICAgIHJldHVybiBlbXB0eSAmJiB0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5maWx0ZXJWYWx1ZSAmJiAhdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRlcm07XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5uZXh0KHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdCh7IHRlcm0sIGl0ZW1zOiB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpIH0pO1xuXG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cygkZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XG4gICAgICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduZy1zZWxlY3QtZm9jdXNlZCcpO1xuICAgICAgICB0aGlzLmJsdXJFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSXRlbUhvdmVyKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya0l0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgaWYgKCEoPGFueT50aGlzLl9jZCkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuYmluZExhYmVsIHx8IHRoaXMuX2RlZmF1bHRMYWJlbDtcbiAgICAgICAgdGhpcy5fcHJpbWl0aXZlID0gaXNEZWZpbmVkKGZpcnN0SXRlbSkgPyAhaXNPYmplY3QoZmlyc3RJdGVtKSA6IHRoaXMuX3ByaW1pdGl2ZTtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2V0SXRlbXMoaXRlbXMpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXBTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGlzRGVmaW5lZCh0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQgfHwgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU5nT3B0aW9ucyA9IChvcHRpb25zOiBRdWVyeUxpc3Q8TmdPcHRpb25Db21wb25lbnQ+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gb3B0aW9ucy5tYXAob3B0aW9uID0+ICh7XG4gICAgICAgICAgICAgICAgJG5nT3B0aW9uVmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAkbmdPcHRpb25MYWJlbDogb3B0aW9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRPckRlc3Ryb3llZCA9IG1lcmdlKHRoaXMubmdPcHRpb25zLmNoYW5nZXMsIHRoaXMuX2Rlc3Ryb3kkKTtcbiAgICAgICAgICAgIG1lcmdlKC4uLnRoaXMubmdPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnN0YXRlQ2hhbmdlJCkpXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKGNoYW5nZWRPckRlc3Ryb3llZCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEl0ZW0ob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5uZ09wdGlvbnMuY2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMubmdPcHRpb25zKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUob3B0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kTGFiZWwgPSB0aGlzLl9kZWZhdWx0TGFiZWw7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmdPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGhhbmRsZU9wdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNWYWxpZFdyaXRlVmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkgfHwgKHRoaXMubXVsdGlwbGUgJiYgdmFsdWUgPT09ICcnKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlQmluZGluZyA9IChpdGVtOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHRoaXMuY29tcGFyZVdpdGgpICYmIGlzT2JqZWN0KGl0ZW0pICYmIHRoaXMuYmluZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBCaW5kaW5nIG9iamVjdCgke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSkgd2l0aCBiaW5kVmFsdWUgaXMgbm90IGFsbG93ZWQuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oJ011bHRpcGxlIHNlbGVjdCBuZ01vZGVsIHNob3VsZCBiZSBhcnJheS4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiB2YWxpZGF0ZUJpbmRpbmcoaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQmluZGluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVXcml0ZVZhbHVlKG5nTW9kZWw6IGFueSB8IGFueVtdKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNWYWxpZFdyaXRlVmFsdWUobmdNb2RlbCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNMaXN0LmZpbmRJdGVtKHZhbCk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxPYmplY3QgPSBpc09iamVjdCh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJpbWl0aXZlID0gIWlzVmFsT2JqZWN0ICYmICF0aGlzLmJpbmRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoKGlzVmFsT2JqZWN0IHx8IGlzUHJpbWl0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QodGhpcy5pdGVtc0xpc3QubWFwSXRlbSh2YWwsIG51bGwpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmluZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kTGFiZWxdOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYmluZFZhbHVlXTogdmFsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICg8YW55W10+bmdNb2RlbCkuZm9yRWFjaChpdGVtID0+IHNlbGVjdChpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QobmdNb2RlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVLZXlQcmVzc2VzKCkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9rZXlQcmVzcyRcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksXG4gICAgICAgICAgICAgICAgdGFwKGxldHRlciA9PiB0aGlzLl9wcmVzc2VkS2V5cy5wdXNoKGxldHRlcikpLFxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5fcHJlc3NlZEtleXMuam9pbignJykpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEJ5TGFiZWwodGVybSk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZEtleXMgPSBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZU5nTW9kZWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJpbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlWzxzdHJpbmc+dGhpcy5ncm91cEJ5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaXRlbXNMaXN0LnJlc29sdmVOZXN0ZWQoaXRlbS52YWx1ZSwgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2RlbC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKGlzRGVmaW5lZChtb2RlbFswXSkgPyBtb2RlbFswXSA6IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdC5yZXNldEZpbHRlcmVkSXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnNjcm9sbEludG8odGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9UYWcoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgIXRoaXMuZHJvcGRvd25QYW5lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC5zY3JvbGxJbnRvVGFnKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlVGFiKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25UYWIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVFbnRlcigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Blbk9uRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVTcGFjZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlQXJyb3dEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fbmV4dEl0ZW1Jc1RhZygrMSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnVubWFya0l0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvVGFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrTmV4dEl0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUFycm93VXAoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9uZXh0SXRlbUlzVGFnKC0xKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5tYXJrSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9UYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtQcmV2aW91c0l0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmV4dEl0ZW1Jc1RhZyhuZXh0U3RlcDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEluZGV4ICsgbmV4dFN0ZXA7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhZyAmJiB0aGlzLmZpbHRlclZhbHVlXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtXG4gICAgICAgICAgICAmJiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPT09IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUJhY2tzcGFjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgfHwgIXRoaXMuY2xlYXJhYmxlIHx8ICF0aGlzLmNsZWFyT25CYWNrc3BhY2UgfHwgIXRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXNUeXBlYWhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVhaGVhZCAmJiB0aGlzLnR5cGVhaGVhZC5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tZXJnZUdsb2JhbENvbmZpZyhjb25maWc6IE5nU2VsZWN0Q29uZmlnKSB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IGNvbmZpZy5wbGFjZWhvbGRlcjtcbiAgICAgICAgdGhpcy5ub3RGb3VuZFRleHQgPSB0aGlzLm5vdEZvdW5kVGV4dCB8fCBjb25maWcubm90Rm91bmRUZXh0O1xuICAgICAgICB0aGlzLnR5cGVUb1NlYXJjaFRleHQgPSB0aGlzLnR5cGVUb1NlYXJjaFRleHQgfHwgY29uZmlnLnR5cGVUb1NlYXJjaFRleHQ7XG4gICAgICAgIHRoaXMuYWRkVGFnVGV4dCA9IHRoaXMuYWRkVGFnVGV4dCB8fCBjb25maWcuYWRkVGFnVGV4dDtcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dCA9IHRoaXMubG9hZGluZ1RleHQgfHwgY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgICAgICB0aGlzLmNsZWFyQWxsVGV4dCA9IHRoaXMuY2xlYXJBbGxUZXh0IHx8IGNvbmZpZy5jbGVhckFsbFRleHQ7XG4gICAgICAgIHRoaXMudmlydHVhbFNjcm9sbCA9IGlzRGVmaW5lZCh0aGlzLnZpcnR1YWxTY3JvbGwpXG4gICAgICAgICAgICA/IHRoaXMudmlydHVhbFNjcm9sbFxuICAgICAgICAgICAgOiBpc0RlZmluZWQoY29uZmlnLmRpc2FibGVWaXJ0dWFsU2Nyb2xsKSA/ICFjb25maWcuZGlzYWJsZVZpcnR1YWxTY3JvbGwgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5vcGVuT25FbnRlciA9IGlzRGVmaW5lZCh0aGlzLm9wZW5PbkVudGVyKSA/IHRoaXMub3Blbk9uRW50ZXIgOiBjb25maWcub3Blbk9uRW50ZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ09wdGlvbkhpZ2hsaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgnbmdPcHRpb25IaWdobGlnaHQnKSB0ZXJtOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbkhpZ2hsaWdodCkge1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGFiZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgIGlmICh0aGlzLl9jYW5IaWdobGlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oaWdobGlnaHRMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgICBpZiAoIXRoaXMudGVybSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKGxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4T2ZUZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGxhYmVsKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmRleE9mKHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0aGlzLnRlcm0pLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoaW5kZXhPZlRlcm0gPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKFxuICAgICAgICAgICAgICAgIGxhYmVsLnN1YnN0cmluZygwLCBpbmRleE9mVGVybSlcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodGVkXCI+JHtsYWJlbC5zdWJzdHIoaW5kZXhPZlRlcm0sIHRoaXMudGVybS5sZW5ndGgpfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBsYWJlbC5zdWJzdHJpbmcoaW5kZXhPZlRlcm0gKyB0aGlzLnRlcm0ubGVuZ3RoLCBsYWJlbC5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfY2FuSGlnaGxpZ2h0KCkge1xuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKHRoaXMudGVybSkgJiYgaXNEZWZpbmVkKHRoaXMubGFiZWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldElubmVySHRtbChodG1sKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpbm5lckhUTUwnLCBodG1sKTtcbiAgICB9XG59ICAgXG4iLCJpbXBvcnQgeyBOZ09wdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0aW9uTW9kZWxGYWN0b3J5ID0gKCkgPT4gU2VsZWN0aW9uTW9kZWw7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5KCkge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdFNlbGVjdGlvbk1vZGVsKCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uTW9kZWwge1xuICAgIHZhbHVlOiBOZ09wdGlvbltdO1xuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4sIHNlbGVjdGFibGVHcm91cEFzTW9kZWw6IGJvb2xlYW4pO1xuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbik7XG4gICAgY2xlYXIoa2VlcERpc2FibGVkOiBib29sZWFuKTtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRTZWxlY3Rpb25Nb2RlbCBpbXBsZW1lbnRzIFNlbGVjdGlvbk1vZGVsIHtcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogTmdPcHRpb25bXSA9IFtdO1xuXG4gICAgZ2V0IHZhbHVlKCk6IE5nT3B0aW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbiwgZ3JvdXBBc01vZGVsOiBib29sZWFuKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoZ3JvdXBBc01vZGVsIHx8ICFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5Db3VudCA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gaXRlbS5wYXJlbnQuY2hpbGRyZW4uZmlsdGVyKHggPT4geC5zZWxlY3RlZCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gY2hpbGRyZW5Db3VudCA9PT0gc2VsZWN0ZWRDb3VudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShpdGVtLmNoaWxkcmVuLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwQXNNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IFsuLi50aGlzLl9zZWxlY3RlZCwgLi4uaXRlbS5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVBhcmVudChpdGVtLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oaXRlbS5wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnB1c2goLi4uY2hpbGRyZW4uZmlsdGVyKHggPT4geCAhPT0gaXRlbSkpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoaXRlbS5jaGlsZHJlbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoa2VlcERpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0ga2VlcERpc2FibGVkID8gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geC5kaXNhYmxlZCkgOiBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoY2hpbGRyZW46IE5nT3B0aW9uW10sIHNlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goeCA9PiB4LnNlbGVjdGVkID0gc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZUNoaWxkcmVuKHBhcmVudDogTmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gcGFyZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW1vdmVQYXJlbnQocGFyZW50OiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHggIT09IHBhcmVudClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50LCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmctb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vbmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5nU2VsZWN0Q29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlksIHVzZVZhbHVlOiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBSUksWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7OztZQUZ0QixXQUFXOzs7Ozs7SUFTM0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7OztZQVB4QixXQUFXOzs7Ozs7SUFjM0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztZQVpyQixXQUFXOzs7Ozs7SUFtQjNCLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7OztZQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7WUFqQjNCLFdBQVc7Ozs7OztJQXdCM0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7OztZQXRCdEIsV0FBVzs7Ozs7O0lBNkIzQixZQUFtQixRQUEwQjtR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RUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEs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