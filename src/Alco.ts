import { random } from 'lodash';

export enum Sign { '+', '-', '/', '*' };

export class Alco {
    num1: number;
    num2: number;
    sign: Sign;
    result: number;

    constructor() {
        this.num1 = this.generator();
        this.num2 = this.generator();
        this.sign = this.randSign();
        this.result = this.calculator();
    }

    generator(): number {
        const num: number = random(-10, 9);
        return num == 0 ? 10 : num;
    }

    randSign(): Sign {
        // const sign: number = random(0, 3);
        // return Sign[sign]; 
        return <Sign>random(0, 3);
    }

    createExpretion(): string {
        return `${this.num1} ${this.getSign()} ${this.num2} = `;
    }

    getSign(): string {
        switch (this.sign) {
            case 0: {
                return Sign[this.sign];
            }
            case 1: {
                return Sign[this.sign];
            }
            case 2: {
                return Sign[this.sign];
            }
            case 3: {
                return Sign[this.sign];
            }
            default: return '0';
        }
    }

    calculator(): number {
        switch (this.sign) {
            case 0: {
                return this.num1 + this.num2;
            }
            case 1: {
                return this.num1 - this.num2;
            }
            case 2: {
                return Math.round(this.num1 / this.num2 * 10) / 10;
            }
            case 3: {
                return this.num1 * this.num2;
            }
            default: return 0;
        }
    }

}