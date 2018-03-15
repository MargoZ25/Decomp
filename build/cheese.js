"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("@jace1995/prompt");
const Alco_1 = require("./Alco");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const expression = new Alco_1.Alco;
            const userAnswer = yield prompt_1.default(`Реши пример или умри: ${expression.createExpretion()}`);
            if (userAnswer == null || +userAnswer != expression.result) {
                console.log('Топай отсюда, алкаш!');
                break;
            }
            else {
                console.log('Продолаем, но тебе просто повезло!');
            }
        }
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlZXNlLmpzIiwic291cmNlUm9vdCI6IkU6L0pTcHJvamVjdHMvZGVjb21wb3ppdGlvbi9zcmMvIiwic291cmNlcyI6WyJjaGVlc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFzQztBQUN0QyxpQ0FBOEI7QUFFOUIsQ0FBQzs7UUFDRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxVQUFVLEdBQUcsSUFBSSxXQUFJLENBQUM7WUFDNUIsTUFBTSxVQUFVLEdBQUcsTUFBTSxnQkFBTSxDQUFDLHlCQUF5QixVQUFVLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7Q0FBQSxDQUFDLEVBQUUsQ0FBQyJ9