import prompt from '@jace1995/prompt';
import { Alco } from './Alco';

(async function () {
    while (true) {
        const expression = new Alco;
        const userAnswer = await prompt(`Реши пример или умри: ${expression.createExpretion()}`);
        if (userAnswer == null || +userAnswer != expression.result) {
            console.log('Топай отсюда, алкаш!');
            break;
        } else {
            console.log('Продолаем, но тебе просто повезло!');
        }
    }
})();
