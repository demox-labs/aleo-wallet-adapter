[@demox-labs/aleo-wallet-adapter-leo](../README.md) / [Exports](../modules.md) / LeoWindow

# Interface: LeoWindow

## Hierarchy

- `Window`

  ↳ **`LeoWindow`**

## Table of contents

### Properties

- [caches](LeoWindow.md#caches)
- [clientInformation](LeoWindow.md#clientinformation)
- [closed](LeoWindow.md#closed)
- [crossOriginIsolated](LeoWindow.md#crossoriginisolated)
- [crypto](LeoWindow.md#crypto)
- [customElements](LeoWindow.md#customelements)
- [devicePixelRatio](LeoWindow.md#devicepixelratio)
- [document](LeoWindow.md#document)
- [event](LeoWindow.md#event)
- [external](LeoWindow.md#external)
- [frameElement](LeoWindow.md#frameelement)
- [frames](LeoWindow.md#frames)
- [history](LeoWindow.md#history)
- [indexedDB](LeoWindow.md#indexeddb)
- [innerHeight](LeoWindow.md#innerheight)
- [innerWidth](LeoWindow.md#innerwidth)
- [isSecureContext](LeoWindow.md#issecurecontext)
- [length](LeoWindow.md#length)
- [leo](LeoWindow.md#leo)
- [leoWallet](LeoWindow.md#leowallet)
- [localStorage](LeoWindow.md#localstorage)
- [locationbar](LeoWindow.md#locationbar)
- [menubar](LeoWindow.md#menubar)
- [name](LeoWindow.md#name)
- [navigator](LeoWindow.md#navigator)
- [onabort](LeoWindow.md#onabort)
- [onafterprint](LeoWindow.md#onafterprint)
- [onanimationcancel](LeoWindow.md#onanimationcancel)
- [onanimationend](LeoWindow.md#onanimationend)
- [onanimationiteration](LeoWindow.md#onanimationiteration)
- [onanimationstart](LeoWindow.md#onanimationstart)
- [onauxclick](LeoWindow.md#onauxclick)
- [onbeforeinput](LeoWindow.md#onbeforeinput)
- [onbeforeprint](LeoWindow.md#onbeforeprint)
- [onbeforeunload](LeoWindow.md#onbeforeunload)
- [onblur](LeoWindow.md#onblur)
- [oncancel](LeoWindow.md#oncancel)
- [oncanplay](LeoWindow.md#oncanplay)
- [oncanplaythrough](LeoWindow.md#oncanplaythrough)
- [onchange](LeoWindow.md#onchange)
- [onclick](LeoWindow.md#onclick)
- [onclose](LeoWindow.md#onclose)
- [oncontextmenu](LeoWindow.md#oncontextmenu)
- [oncuechange](LeoWindow.md#oncuechange)
- [ondblclick](LeoWindow.md#ondblclick)
- [ondevicemotion](LeoWindow.md#ondevicemotion)
- [ondeviceorientation](LeoWindow.md#ondeviceorientation)
- [ondrag](LeoWindow.md#ondrag)
- [ondragend](LeoWindow.md#ondragend)
- [ondragenter](LeoWindow.md#ondragenter)
- [ondragleave](LeoWindow.md#ondragleave)
- [ondragover](LeoWindow.md#ondragover)
- [ondragstart](LeoWindow.md#ondragstart)
- [ondrop](LeoWindow.md#ondrop)
- [ondurationchange](LeoWindow.md#ondurationchange)
- [onemptied](LeoWindow.md#onemptied)
- [onended](LeoWindow.md#onended)
- [onerror](LeoWindow.md#onerror)
- [onfocus](LeoWindow.md#onfocus)
- [onformdata](LeoWindow.md#onformdata)
- [ongamepadconnected](LeoWindow.md#ongamepadconnected)
- [ongamepaddisconnected](LeoWindow.md#ongamepaddisconnected)
- [ongotpointercapture](LeoWindow.md#ongotpointercapture)
- [onhashchange](LeoWindow.md#onhashchange)
- [oninput](LeoWindow.md#oninput)
- [oninvalid](LeoWindow.md#oninvalid)
- [onkeydown](LeoWindow.md#onkeydown)
- [onkeypress](LeoWindow.md#onkeypress)
- [onkeyup](LeoWindow.md#onkeyup)
- [onlanguagechange](LeoWindow.md#onlanguagechange)
- [onload](LeoWindow.md#onload)
- [onloadeddata](LeoWindow.md#onloadeddata)
- [onloadedmetadata](LeoWindow.md#onloadedmetadata)
- [onloadstart](LeoWindow.md#onloadstart)
- [onlostpointercapture](LeoWindow.md#onlostpointercapture)
- [onmessage](LeoWindow.md#onmessage)
- [onmessageerror](LeoWindow.md#onmessageerror)
- [onmousedown](LeoWindow.md#onmousedown)
- [onmouseenter](LeoWindow.md#onmouseenter)
- [onmouseleave](LeoWindow.md#onmouseleave)
- [onmousemove](LeoWindow.md#onmousemove)
- [onmouseout](LeoWindow.md#onmouseout)
- [onmouseover](LeoWindow.md#onmouseover)
- [onmouseup](LeoWindow.md#onmouseup)
- [onoffline](LeoWindow.md#onoffline)
- [ononline](LeoWindow.md#ononline)
- [onorientationchange](LeoWindow.md#onorientationchange)
- [onpagehide](LeoWindow.md#onpagehide)
- [onpageshow](LeoWindow.md#onpageshow)
- [onpause](LeoWindow.md#onpause)
- [onplay](LeoWindow.md#onplay)
- [onplaying](LeoWindow.md#onplaying)
- [onpointercancel](LeoWindow.md#onpointercancel)
- [onpointerdown](LeoWindow.md#onpointerdown)
- [onpointerenter](LeoWindow.md#onpointerenter)
- [onpointerleave](LeoWindow.md#onpointerleave)
- [onpointermove](LeoWindow.md#onpointermove)
- [onpointerout](LeoWindow.md#onpointerout)
- [onpointerover](LeoWindow.md#onpointerover)
- [onpointerup](LeoWindow.md#onpointerup)
- [onpopstate](LeoWindow.md#onpopstate)
- [onprogress](LeoWindow.md#onprogress)
- [onratechange](LeoWindow.md#onratechange)
- [onrejectionhandled](LeoWindow.md#onrejectionhandled)
- [onreset](LeoWindow.md#onreset)
- [onresize](LeoWindow.md#onresize)
- [onscroll](LeoWindow.md#onscroll)
- [onsecuritypolicyviolation](LeoWindow.md#onsecuritypolicyviolation)
- [onseeked](LeoWindow.md#onseeked)
- [onseeking](LeoWindow.md#onseeking)
- [onselect](LeoWindow.md#onselect)
- [onselectionchange](LeoWindow.md#onselectionchange)
- [onselectstart](LeoWindow.md#onselectstart)
- [onslotchange](LeoWindow.md#onslotchange)
- [onstalled](LeoWindow.md#onstalled)
- [onstorage](LeoWindow.md#onstorage)
- [onsubmit](LeoWindow.md#onsubmit)
- [onsuspend](LeoWindow.md#onsuspend)
- [ontimeupdate](LeoWindow.md#ontimeupdate)
- [ontoggle](LeoWindow.md#ontoggle)
- [ontouchcancel](LeoWindow.md#ontouchcancel)
- [ontouchend](LeoWindow.md#ontouchend)
- [ontouchmove](LeoWindow.md#ontouchmove)
- [ontouchstart](LeoWindow.md#ontouchstart)
- [ontransitioncancel](LeoWindow.md#ontransitioncancel)
- [ontransitionend](LeoWindow.md#ontransitionend)
- [ontransitionrun](LeoWindow.md#ontransitionrun)
- [ontransitionstart](LeoWindow.md#ontransitionstart)
- [onunhandledrejection](LeoWindow.md#onunhandledrejection)
- [onunload](LeoWindow.md#onunload)
- [onvolumechange](LeoWindow.md#onvolumechange)
- [onwaiting](LeoWindow.md#onwaiting)
- [onwebkitanimationend](LeoWindow.md#onwebkitanimationend)
- [onwebkitanimationiteration](LeoWindow.md#onwebkitanimationiteration)
- [onwebkitanimationstart](LeoWindow.md#onwebkitanimationstart)
- [onwebkittransitionend](LeoWindow.md#onwebkittransitionend)
- [onwheel](LeoWindow.md#onwheel)
- [opener](LeoWindow.md#opener)
- [orientation](LeoWindow.md#orientation)
- [origin](LeoWindow.md#origin)
- [outerHeight](LeoWindow.md#outerheight)
- [outerWidth](LeoWindow.md#outerwidth)
- [pageXOffset](LeoWindow.md#pagexoffset)
- [pageYOffset](LeoWindow.md#pageyoffset)
- [parent](LeoWindow.md#parent)
- [performance](LeoWindow.md#performance)
- [personalbar](LeoWindow.md#personalbar)
- [screen](LeoWindow.md#screen)
- [screenLeft](LeoWindow.md#screenleft)
- [screenTop](LeoWindow.md#screentop)
- [screenX](LeoWindow.md#screenx)
- [screenY](LeoWindow.md#screeny)
- [scrollX](LeoWindow.md#scrollx)
- [scrollY](LeoWindow.md#scrolly)
- [scrollbars](LeoWindow.md#scrollbars)
- [self](LeoWindow.md#self)
- [sessionStorage](LeoWindow.md#sessionstorage)
- [speechSynthesis](LeoWindow.md#speechsynthesis)
- [status](LeoWindow.md#status)
- [statusbar](LeoWindow.md#statusbar)
- [toolbar](LeoWindow.md#toolbar)
- [top](LeoWindow.md#top)
- [visualViewport](LeoWindow.md#visualviewport)
- [window](LeoWindow.md#window)

### Accessors

- [location](LeoWindow.md#location)

### Methods

- [addEventListener](LeoWindow.md#addeventlistener)
- [alert](LeoWindow.md#alert)
- [atob](LeoWindow.md#atob)
- [blur](LeoWindow.md#blur)
- [btoa](LeoWindow.md#btoa)
- [cancelAnimationFrame](LeoWindow.md#cancelanimationframe)
- [cancelIdleCallback](LeoWindow.md#cancelidlecallback)
- [captureEvents](LeoWindow.md#captureevents)
- [clearInterval](LeoWindow.md#clearinterval)
- [clearTimeout](LeoWindow.md#cleartimeout)
- [close](LeoWindow.md#close)
- [confirm](LeoWindow.md#confirm)
- [createImageBitmap](LeoWindow.md#createimagebitmap)
- [dispatchEvent](LeoWindow.md#dispatchevent)
- [fetch](LeoWindow.md#fetch)
- [focus](LeoWindow.md#focus)
- [getComputedStyle](LeoWindow.md#getcomputedstyle)
- [getSelection](LeoWindow.md#getselection)
- [matchMedia](LeoWindow.md#matchmedia)
- [moveBy](LeoWindow.md#moveby)
- [moveTo](LeoWindow.md#moveto)
- [open](LeoWindow.md#open)
- [postMessage](LeoWindow.md#postmessage)
- [print](LeoWindow.md#print)
- [prompt](LeoWindow.md#prompt)
- [queueMicrotask](LeoWindow.md#queuemicrotask)
- [releaseEvents](LeoWindow.md#releaseevents)
- [removeEventListener](LeoWindow.md#removeeventlistener)
- [reportError](LeoWindow.md#reporterror)
- [requestAnimationFrame](LeoWindow.md#requestanimationframe)
- [requestIdleCallback](LeoWindow.md#requestidlecallback)
- [resizeBy](LeoWindow.md#resizeby)
- [resizeTo](LeoWindow.md#resizeto)
- [scroll](LeoWindow.md#scroll)
- [scrollBy](LeoWindow.md#scrollby)
- [scrollTo](LeoWindow.md#scrollto)
- [setInterval](LeoWindow.md#setinterval)
- [setTimeout](LeoWindow.md#settimeout)
- [stop](LeoWindow.md#stop)
- [structuredClone](LeoWindow.md#structuredclone)

## Properties

### caches

• `Readonly` **caches**: `CacheStorage`

Available only in secure contexts.

#### Inherited from

Window.caches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16958

___

### clientInformation

• `Readonly` **clientInformation**: `Navigator`

**`Deprecated`**

This is a legacy alias of `navigator`.

#### Inherited from

Window.clientInformation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16782

___

### closed

• `Readonly` **closed**: `boolean`

Returns true if the window has been closed, false otherwise.

#### Inherited from

Window.closed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16784

___

### crossOriginIsolated

• `Readonly` **crossOriginIsolated**: `boolean`

#### Inherited from

Window.crossOriginIsolated

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16959

___

### crypto

• `Readonly` **crypto**: `Crypto`

#### Inherited from

Window.crypto

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16960

___

### customElements

• `Readonly` **customElements**: `CustomElementRegistry`

Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.

#### Inherited from

Window.customElements

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16786

___

### devicePixelRatio

• `Readonly` **devicePixelRatio**: `number`

#### Inherited from

Window.devicePixelRatio

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16787

___

### document

• `Readonly` **document**: `Document`

#### Inherited from

Window.document

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16788

___

### event

• `Readonly` **event**: `Event`

**`Deprecated`**

#### Inherited from

Window.event

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16790

___

### external

• `Readonly` **external**: `External`

**`Deprecated`**

#### Inherited from

Window.external

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16792

___

### frameElement

• `Readonly` **frameElement**: `Element`

#### Inherited from

Window.frameElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16793

___

### frames

• `Readonly` **frames**: `Window`

#### Inherited from

Window.frames

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16794

___

### history

• `Readonly` **history**: `History`

#### Inherited from

Window.history

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16795

___

### indexedDB

• `Readonly` **indexedDB**: `IDBFactory`

#### Inherited from

Window.indexedDB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16961

___

### innerHeight

• `Readonly` **innerHeight**: `number`

#### Inherited from

Window.innerHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16796

___

### innerWidth

• `Readonly` **innerWidth**: `number`

#### Inherited from

Window.innerWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16797

___

### isSecureContext

• `Readonly` **isSecureContext**: `boolean`

#### Inherited from

Window.isSecureContext

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16962

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Window.length

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16798

___

### leo

• `Optional` **leo**: [`LeoWallet`](LeoWallet.md)

#### Defined in

[adapter.ts:46](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L46)

___

### leoWallet

• `Optional` **leoWallet**: [`LeoWallet`](LeoWallet.md)

#### Defined in

[adapter.ts:45](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L45)

___

### localStorage

• `Readonly` **localStorage**: `Storage`

#### Inherited from

Window.localStorage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16953

___

### locationbar

• `Readonly` **locationbar**: `BarProp`

Returns true if the location bar is visible; otherwise, returns false.

#### Inherited from

Window.locationbar

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16802

___

### menubar

• `Readonly` **menubar**: `BarProp`

Returns true if the menu bar is visible; otherwise, returns false.

#### Inherited from

Window.menubar

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16804

___

### name

• **name**: `string`

#### Inherited from

Window.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16805

___

### navigator

• `Readonly` **navigator**: `Navigator`

#### Inherited from

Window.navigator

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16806

___

### onabort

• **onabort**: (`this`: `GlobalEventHandlers`, `ev`: `UIEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user aborts the download.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `UIEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onafterprint

• **onafterprint**: (`this`: `WindowEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onafterprint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16928

___

### onanimationcancel

• **onanimationcancel**: (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

Window.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5820

___

### onanimationend

• **onanimationend**: (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

Window.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5821

___

### onanimationiteration

• **onanimationiteration**: (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

Window.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5822

___

### onanimationstart

• **onanimationstart**: (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

Window.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5823

___

### onauxclick

• **onauxclick**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

Window.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onbeforeinput

• **onbeforeinput**: (`this`: `GlobalEventHandlers`, `ev`: `InputEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `InputEvent` |

##### Returns

`any`

#### Inherited from

Window.onbeforeinput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onbeforeprint

• **onbeforeprint**: (`this`: `WindowEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onbeforeprint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16929

___

### onbeforeunload

• **onbeforeunload**: (`this`: `WindowEventHandlers`, `ev`: `BeforeUnloadEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `BeforeUnloadEvent` |

##### Returns

`any`

#### Inherited from

Window.onbeforeunload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16930

___

### onblur

• **onblur**: (`this`: `GlobalEventHandlers`, `ev`: `FocusEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the object loses the input focus.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `FocusEvent` | The focus event. |

##### Returns

`any`

#### Inherited from

Window.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### oncancel

• **oncancel**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.oncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### oncanplay

• **oncanplay**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when playback is possible, but would require further buffering.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5836

___

### oncanplaythrough

• **oncanplaythrough**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onchange

• **onchange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the contents of the object or selection have changed.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onclick

• **onclick**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user clicks the left mouse button on the object

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onclose

• **onclose**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### oncontextmenu

• **oncontextmenu**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### oncuechange

• **oncuechange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### ondblclick

• **ondblclick**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user double-clicks the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### ondevicemotion

• **ondevicemotion**: (`this`: `Window`, `ev`: `DeviceMotionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Available only in secure contexts.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Window` |
| `ev` | `DeviceMotionEvent` |

##### Returns

`any`

#### Inherited from

Window.ondevicemotion

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16808

___

### ondeviceorientation

• **ondeviceorientation**: (`this`: `Window`, `ev`: `DeviceOrientationEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Available only in secure contexts.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Window` |
| `ev` | `DeviceOrientationEvent` |

##### Returns

`any`

#### Inherited from

Window.ondeviceorientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16810

___

### ondrag

• **ondrag**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires on the source object continuously during a drag operation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `DragEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### ondragend

• **ondragend**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `DragEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### ondragenter

• **ondragenter**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires on the target element when the user drags the object to a valid drop target.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `DragEvent` | The drag event. |

##### Returns

`any`

#### Inherited from

Window.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5874

___

### ondragleave

• **ondragleave**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `DragEvent` | The drag event. |

##### Returns

`any`

#### Inherited from

Window.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5879

___

### ondragover

• **ondragover**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `DragEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5884

___

### ondragstart

• **ondragstart**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires on the source object when the user starts to drag a text selection or selected object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `DragEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ondrop

• **ondrop**: (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

Window.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ondurationchange

• **ondurationchange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the duration attribute is updated.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### onemptied

• **onemptied**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the media element is reset to its initial state.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5900

___

### onended

• **onended**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the end of playback is reached.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event |

##### Returns

`any`

#### Inherited from

Window.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5905

___

### onerror

• **onerror**: `OnErrorEventHandlerNonNull`

Fires when an error occurs during object loading.

**`Param`**

The event.

#### Inherited from

Window.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5910

___

### onfocus

• **onfocus**: (`this`: `GlobalEventHandlers`, `ev`: `FocusEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the object receives focus.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `FocusEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onformdata

• **onformdata**: (`this`: `GlobalEventHandlers`, `ev`: `FormDataEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `FormDataEvent` |

##### Returns

`any`

#### Inherited from

Window.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5916

___

### ongamepadconnected

• **ongamepadconnected**: (`this`: `WindowEventHandlers`, `ev`: `GamepadEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `GamepadEvent` |

##### Returns

`any`

#### Inherited from

Window.ongamepadconnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16931

___

### ongamepaddisconnected

• **ongamepaddisconnected**: (`this`: `WindowEventHandlers`, `ev`: `GamepadEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `GamepadEvent` |

##### Returns

`any`

#### Inherited from

Window.ongamepaddisconnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16932

___

### ongotpointercapture

• **ongotpointercapture**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5917

___

### onhashchange

• **onhashchange**: (`this`: `WindowEventHandlers`, `ev`: `HashChangeEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `HashChangeEvent` |

##### Returns

`any`

#### Inherited from

Window.onhashchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16933

___

### oninput

• **oninput**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5918

___

### oninvalid

• **oninvalid**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5919

___

### onkeydown

• **onkeydown**: (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user presses a key.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `KeyboardEvent` | The keyboard event |

##### Returns

`any`

#### Inherited from

Window.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5924

___

### onkeypress

• **onkeypress**: (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user presses an alphanumeric key.

**`Deprecated`**

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `KeyboardEvent` | The event. |

##### Returns

`any`

#### Inherited from

Window.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5930

___

### onkeyup

• **onkeyup**: (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user releases a key.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `KeyboardEvent` | The keyboard event |

##### Returns

`any`

#### Inherited from

Window.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5935

___

### onlanguagechange

• **onlanguagechange**: (`this`: `WindowEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onlanguagechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16934

___

### onload

• **onload**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires immediately after the browser loads the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5940

___

### onloadeddata

• **onloadeddata**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when media data is loaded at the current playback position.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5945

___

### onloadedmetadata

• **onloadedmetadata**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the duration and dimensions of the media have been determined.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5950

___

### onloadstart

• **onloadstart**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when Internet Explorer begins looking for media data.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5955

___

### onlostpointercapture

• **onlostpointercapture**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5956

___

### onmessage

• **onmessage**: (`this`: `WindowEventHandlers`, `ev`: `MessageEvent`<`any`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `MessageEvent`<`any`\> |

##### Returns

`any`

#### Inherited from

Window.onmessage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16935

___

### onmessageerror

• **onmessageerror**: (`this`: `WindowEventHandlers`, `ev`: `MessageEvent`<`any`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `MessageEvent`<`any`\> |

##### Returns

`any`

#### Inherited from

Window.onmessageerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16936

___

### onmousedown

• **onmousedown**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user clicks the object with either mouse button.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5961

___

### onmouseenter

• **onmouseenter**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

Window.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5962

___

### onmouseleave

• **onmouseleave**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

Window.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5963

___

### onmousemove

• **onmousemove**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user moves the mouse over the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5968

___

### onmouseout

• **onmouseout**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5973

___

### onmouseover

• **onmouseover**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user moves the mouse pointer into the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5978

___

### onmouseup

• **onmouseup**: (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user releases a mouse button while the mouse is over the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `MouseEvent` | The mouse event. |

##### Returns

`any`

#### Inherited from

Window.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5983

___

### onoffline

• **onoffline**: (`this`: `WindowEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onoffline

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16937

___

### ononline

• **ononline**: (`this`: `WindowEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.ononline

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16938

___

### onorientationchange

• **onorientationchange**: (`this`: `Window`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

**`Deprecated`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Window` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onorientationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16812

___

### onpagehide

• **onpagehide**: (`this`: `WindowEventHandlers`, `ev`: `PageTransitionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `PageTransitionEvent` |

##### Returns

`any`

#### Inherited from

Window.onpagehide

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16939

___

### onpageshow

• **onpageshow**: (`this`: `WindowEventHandlers`, `ev`: `PageTransitionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `PageTransitionEvent` |

##### Returns

`any`

#### Inherited from

Window.onpageshow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16940

___

### onpause

• **onpause**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when playback is paused.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5988

___

### onplay

• **onplay**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the play method is requested.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5993

___

### onplaying

• **onplaying**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the audio or video has started playing.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5998

___

### onpointercancel

• **onpointercancel**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5999

___

### onpointerdown

• **onpointerdown**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6000

___

### onpointerenter

• **onpointerenter**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6001

___

### onpointerleave

• **onpointerleave**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6002

___

### onpointermove

• **onpointermove**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6003

___

### onpointerout

• **onpointerout**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6004

___

### onpointerover

• **onpointerover**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6005

___

### onpointerup

• **onpointerup**: (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

Window.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6006

___

### onpopstate

• **onpopstate**: (`this`: `WindowEventHandlers`, `ev`: `PopStateEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `PopStateEvent` |

##### Returns

`any`

#### Inherited from

Window.onpopstate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16941

___

### onprogress

• **onprogress**: (`this`: `GlobalEventHandlers`, `ev`: `ProgressEvent`<`EventTarget`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs to indicate progress while downloading media data.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `ProgressEvent`<`EventTarget`\> | The event. |

##### Returns

`any`

#### Inherited from

Window.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6011

___

### onratechange

• **onratechange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the playback rate is increased or decreased.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6016

___

### onrejectionhandled

• **onrejectionhandled**: (`this`: `WindowEventHandlers`, `ev`: `PromiseRejectionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `PromiseRejectionEvent` |

##### Returns

`any`

#### Inherited from

Window.onrejectionhandled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16942

___

### onreset

• **onreset**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user resets a form.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6021

___

### onresize

• **onresize**: (`this`: `GlobalEventHandlers`, `ev`: `UIEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `UIEvent` |

##### Returns

`any`

#### Inherited from

Window.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6022

___

### onscroll

• **onscroll**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6027

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: (`this`: `GlobalEventHandlers`, `ev`: `SecurityPolicyViolationEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `SecurityPolicyViolationEvent` |

##### Returns

`any`

#### Inherited from

Window.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6028

___

### onseeked

• **onseeked**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the seek operation ends.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6033

___

### onseeking

• **onseeking**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the current playback position is moved.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6038

___

### onselect

• **onselect**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Fires when the current selection changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6043

___

### onselectionchange

• **onselectionchange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6044

___

### onselectstart

• **onselectstart**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6045

___

### onslotchange

• **onslotchange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onslotchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6046

___

### onstalled

• **onstalled**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the download has stopped.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6051

___

### onstorage

• **onstorage**: (`this`: `WindowEventHandlers`, `ev`: `StorageEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `StorageEvent` |

##### Returns

`any`

#### Inherited from

Window.onstorage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16943

___

### onsubmit

• **onsubmit**: (`this`: `GlobalEventHandlers`, `ev`: `SubmitEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `SubmitEvent` |

##### Returns

`any`

#### Inherited from

Window.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6052

___

### onsuspend

• **onsuspend**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs if the load operation has been intentionally halted.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6057

___

### ontimeupdate

• **ontimeupdate**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs to indicate the current playback position.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6062

___

### ontoggle

• **ontoggle**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6063

___

### ontouchcancel

• `Optional` **ontouchcancel**: (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

Window.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6064

___

### ontouchend

• `Optional` **ontouchend**: (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

Window.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6065

___

### ontouchmove

• `Optional` **ontouchmove**: (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

Window.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6066

___

### ontouchstart

• `Optional` **ontouchstart**: (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

Window.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6067

___

### ontransitioncancel

• **ontransitioncancel**: (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

Window.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6068

___

### ontransitionend

• **ontransitionend**: (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

Window.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6069

___

### ontransitionrun

• **ontransitionrun**: (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

Window.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6070

___

### ontransitionstart

• **ontransitionstart**: (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

Window.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6071

___

### onunhandledrejection

• **onunhandledrejection**: (`this`: `WindowEventHandlers`, `ev`: `PromiseRejectionEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `PromiseRejectionEvent` |

##### Returns

`any`

#### Inherited from

Window.onunhandledrejection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16944

___

### onunload

• **onunload**: (`this`: `WindowEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `WindowEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onunload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16945

___

### onvolumechange

• **onvolumechange**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when the volume is changed, or playback is muted or unmuted.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6076

___

### onwaiting

• **onwaiting**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

Occurs when playback stops because the next frame of a video resource is not available.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `GlobalEventHandlers` | - |
| `ev` | `Event` | The event. |

##### Returns

`any`

#### Inherited from

Window.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6081

___

### onwebkitanimationend

• **onwebkitanimationend**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

**`Deprecated`**

This is a legacy alias of `onanimationend`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6083

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

**`Deprecated`**

This is a legacy alias of `onanimationiteration`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6085

___

### onwebkitanimationstart

• **onwebkitanimationstart**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

**`Deprecated`**

This is a legacy alias of `onanimationstart`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6087

___

### onwebkittransitionend

• **onwebkittransitionend**: (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

**`Deprecated`**

This is a legacy alias of `ontransitionend`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

Window.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6089

___

### onwheel

• **onwheel**: (`this`: `GlobalEventHandlers`, `ev`: `WheelEvent`) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `GlobalEventHandlers` |
| `ev` | `WheelEvent` |

##### Returns

`any`

#### Inherited from

Window.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6090

___

### opener

• **opener**: `any`

#### Inherited from

Window.opener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16813

___

### orientation

• `Readonly` **orientation**: `number`

**`Deprecated`**

#### Inherited from

Window.orientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16815

___

### origin

• `Readonly` **origin**: `string`

#### Inherited from

Window.origin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16963

___

### outerHeight

• `Readonly` **outerHeight**: `number`

#### Inherited from

Window.outerHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16816

___

### outerWidth

• `Readonly` **outerWidth**: `number`

#### Inherited from

Window.outerWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16817

___

### pageXOffset

• `Readonly` **pageXOffset**: `number`

**`Deprecated`**

This is a legacy alias of `scrollX`.

#### Inherited from

Window.pageXOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16819

___

### pageYOffset

• `Readonly` **pageYOffset**: `number`

**`Deprecated`**

This is a legacy alias of `scrollY`.

#### Inherited from

Window.pageYOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16821

___

### parent

• `Readonly` **parent**: `Window`

Refers to either the parent WindowProxy, or itself.

It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent.

#### Inherited from

Window.parent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16827

___

### performance

• `Readonly` **performance**: `Performance`

#### Inherited from

Window.performance

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16964

___

### personalbar

• `Readonly` **personalbar**: `BarProp`

Returns true if the personal bar is visible; otherwise, returns false.

#### Inherited from

Window.personalbar

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16829

___

### screen

• `Readonly` **screen**: `Screen`

#### Inherited from

Window.screen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16830

___

### screenLeft

• `Readonly` **screenLeft**: `number`

#### Inherited from

Window.screenLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16831

___

### screenTop

• `Readonly` **screenTop**: `number`

#### Inherited from

Window.screenTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16832

___

### screenX

• `Readonly` **screenX**: `number`

#### Inherited from

Window.screenX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16833

___

### screenY

• `Readonly` **screenY**: `number`

#### Inherited from

Window.screenY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16834

___

### scrollX

• `Readonly` **scrollX**: `number`

#### Inherited from

Window.scrollX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16835

___

### scrollY

• `Readonly` **scrollY**: `number`

#### Inherited from

Window.scrollY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16836

___

### scrollbars

• `Readonly` **scrollbars**: `BarProp`

Returns true if the scrollbars are visible; otherwise, returns false.

#### Inherited from

Window.scrollbars

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16838

___

### self

• `Readonly` **self**: `Window` & typeof `globalThis`

#### Inherited from

Window.self

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16839

___

### sessionStorage

• `Readonly` **sessionStorage**: `Storage`

#### Inherited from

Window.sessionStorage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16980

___

### speechSynthesis

• `Readonly` **speechSynthesis**: `SpeechSynthesis`

#### Inherited from

Window.speechSynthesis

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16840

___

### status

• **status**: `string`

**`Deprecated`**

#### Inherited from

Window.status

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16842

___

### statusbar

• `Readonly` **statusbar**: `BarProp`

Returns true if the status bar is visible; otherwise, returns false.

#### Inherited from

Window.statusbar

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16844

___

### toolbar

• `Readonly` **toolbar**: `BarProp`

Returns true if the toolbar is visible; otherwise, returns false.

#### Inherited from

Window.toolbar

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16846

___

### top

• `Readonly` **top**: `Window`

#### Inherited from

Window.top

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16847

___

### visualViewport

• `Readonly` **visualViewport**: `VisualViewport`

#### Inherited from

Window.visualViewport

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16848

___

### window

• `Readonly` **window**: `Window` & typeof `globalThis`

#### Inherited from

Window.window

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16849

## Accessors

### location

• `get` **location**(): `Location`

#### Returns

`Location`

#### Inherited from

Window.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16799

• `set` **location**(`href`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` \| `Location` |

#### Returns

`void`

#### Inherited from

Window.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16800

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `Window`, `ev`: `WindowEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Window.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16894

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Window.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16895

___

### alert

▸ **alert**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |

#### Returns

`void`

#### Inherited from

Window.alert

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16850

___

### atob

▸ **atob**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Inherited from

Window.atob

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16965

___

### blur

▸ **blur**(): `void`

#### Returns

`void`

#### Inherited from

Window.blur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16851

___

### btoa

▸ **btoa**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Inherited from

Window.btoa

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16966

___

### cancelAnimationFrame

▸ **cancelAnimationFrame**(`handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

`void`

#### Inherited from

Window.cancelAnimationFrame

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2195

___

### cancelIdleCallback

▸ **cancelIdleCallback**(`handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

`void`

#### Inherited from

Window.cancelIdleCallback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16852

___

### captureEvents

▸ **captureEvents**(): `void`

**`Deprecated`**

#### Returns

`void`

#### Inherited from

Window.captureEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16854

___

### clearInterval

▸ **clearInterval**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

Window.clearInterval

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16967

___

### clearTimeout

▸ **clearTimeout**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

Window.clearTimeout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16968

___

### close

▸ **close**(): `void`

Closes the window.

#### Returns

`void`

#### Inherited from

Window.close

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16856

___

### confirm

▸ **confirm**(`message?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`boolean`

#### Inherited from

Window.confirm

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16857

___

### createImageBitmap

▸ **createImageBitmap**(`image`, `options?`): `Promise`<`ImageBitmap`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `ImageBitmapSource` |
| `options?` | `ImageBitmapOptions` |

#### Returns

`Promise`<`ImageBitmap`\>

#### Inherited from

Window.createImageBitmap

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16969

▸ **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`<`ImageBitmap`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `ImageBitmapSource` |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `options?` | `ImageBitmapOptions` |

#### Returns

`Promise`<`ImageBitmap`\>

#### Inherited from

Window.createImageBitmap

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16970

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

Window.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5309

___

### fetch

▸ **fetch**(`input`, `init?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

Window.fetch

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16971

___

### focus

▸ **focus**(): `void`

Moves the focus to the window's browsing context, if any.

#### Returns

`void`

#### Inherited from

Window.focus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16859

___

### getComputedStyle

▸ **getComputedStyle**(`elt`, `pseudoElt?`): `CSSStyleDeclaration`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elt` | `Element` |
| `pseudoElt?` | `string` |

#### Returns

`CSSStyleDeclaration`

#### Inherited from

Window.getComputedStyle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16860

___

### getSelection

▸ **getSelection**(): `Selection`

#### Returns

`Selection`

#### Inherited from

Window.getSelection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16861

___

### matchMedia

▸ **matchMedia**(`query`): `MediaQueryList`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`MediaQueryList`

#### Inherited from

Window.matchMedia

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16862

___

### moveBy

▸ **moveBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Window.moveBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16863

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Window.moveTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16864

___

### open

▸ **open**(`url?`, `target?`, `features?`): `Window`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` \| `URL` |
| `target?` | `string` |
| `features?` | `string` |

#### Returns

`Window`

#### Inherited from

Window.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16865

___

### postMessage

▸ **postMessage**(`message`, `targetOrigin`, `transfer?`): `void`

Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.

Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.

A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.

If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".

Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `targetOrigin` | `string` |
| `transfer?` | `Transferable`[] |

#### Returns

`void`

#### Inherited from

Window.postMessage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16877

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | `WindowPostMessageOptions` |

#### Returns

`void`

#### Inherited from

Window.postMessage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16878

___

### print

▸ **print**(): `void`

#### Returns

`void`

#### Inherited from

Window.print

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16879

___

### prompt

▸ **prompt**(`message?`, `_default?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `_default?` | `string` |

#### Returns

`string`

#### Inherited from

Window.prompt

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16880

___

### queueMicrotask

▸ **queueMicrotask**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `VoidFunction` |

#### Returns

`void`

#### Inherited from

Window.queueMicrotask

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16972

___

### releaseEvents

▸ **releaseEvents**(): `void`

**`Deprecated`**

#### Returns

`void`

#### Inherited from

Window.releaseEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16882

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `Window`, `ev`: `WindowEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

Window.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16896

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

Window.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16897

___

### reportError

▸ **reportError**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Inherited from

Window.reportError

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16973

___

### requestAnimationFrame

▸ **requestAnimationFrame**(`callback`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `FrameRequestCallback` |

#### Returns

`number`

#### Inherited from

Window.requestAnimationFrame

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2196

___

### requestIdleCallback

▸ **requestIdleCallback**(`callback`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `IdleRequestCallback` |
| `options?` | `IdleRequestOptions` |

#### Returns

`number`

#### Inherited from

Window.requestIdleCallback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16883

___

### resizeBy

▸ **resizeBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Window.resizeBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16884

___

### resizeTo

▸ **resizeTo**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

Window.resizeTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16885

___

### scroll

▸ **scroll**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

Window.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16886

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Window.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16887

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

Window.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16888

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Window.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16889

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

Window.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16890

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

Window.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16891

___

### setInterval

▸ **setInterval**(`handler`, `timeout?`, ...`arguments`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `TimerHandler` |
| `timeout?` | `number` |
| `...arguments` | `any`[] |

#### Returns

`number`

#### Inherited from

Window.setInterval

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16974

___

### setTimeout

▸ **setTimeout**(`handler`, `timeout?`, ...`arguments`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `TimerHandler` |
| `timeout?` | `number` |
| `...arguments` | `any`[] |

#### Returns

`number`

#### Inherited from

Window.setTimeout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16975

___

### stop

▸ **stop**(): `void`

Cancels the document load.

#### Returns

`void`

#### Inherited from

Window.stop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16893

___

### structuredClone

▸ **structuredClone**(`value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `StructuredSerializeOptions` |

#### Returns

`any`

#### Inherited from

Window.structuredClone

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16976
