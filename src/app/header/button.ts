import { constructDependencies } from "@angular/core/src/di/reflective_provider";

export class Button {
    name: string;
    ref: string;
    right: boolean

    constructor(name: string, ref: string, right?: boolean) {
        this.name = name;
        this.ref = ref;
        this.right = right;
    }
};
