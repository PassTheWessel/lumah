declare namespace lumah {
    export function register(name: string, method: any): number;
    export function run(): void;
}

declare module 'lumah' {
    export = lumah;
}
