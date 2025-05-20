[**@demox-labs/aleo-wallet-adapter-base**](../../../../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../../../../README.md) / [EventEmitter](../README.md) / ArgumentMap

# Type Alias: ArgumentMap\<T\>

> **ArgumentMap**\<`T`\> = `{ [K in keyof T]: T[K] extends (args: any[]) => void ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[] }`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:109

## Type Parameters

### T

`T` *extends* `object`
