"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Utils
const Context = require("../utils/context");
const Queue = require("../utils/test");
function only(title, callback) {
    const context = Context.get();
    Queue.add(Object.assign(Object.assign({}, context), { id: `${context.group.join("/")}/${title}`, title, only: true, callback }));
    const extra = {
        tag: (tag) => {
            Queue.append({
                tags: Array.isArray(tag) ? tag : [tag],
            });
            return extra;
        },
        timeout: (time) => {
            Queue.append({
                timeout: time,
            });
            return extra;
        }
    };
    return extra;
}
exports.default = only;
//# sourceMappingURL=only.js.map