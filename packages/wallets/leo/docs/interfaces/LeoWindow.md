[**@demox-labs/aleo-wallet-adapter-leo**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-leo](../README.md) / LeoWindow

# Interface: LeoWindow

Defined in: [adapter.ts:47](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L47)

## Extends

- `Window`

## Indexable

\[`index`: `number`\]: `Window`

## Properties

### caches

> `readonly` **caches**: `CacheStorage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16958

Available only in secure contexts.

#### Inherited from

`Window.caches`

***

### ~~clientInformation~~

> `readonly` **clientInformation**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16782

#### Deprecated

This is a legacy alias of `navigator`.

#### Inherited from

`Window.clientInformation`

***

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16784

Returns true if the window has been closed, false otherwise.

#### Inherited from

`Window.closed`

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16959

#### Inherited from

`Window.crossOriginIsolated`

***

### crypto

> `readonly` **crypto**: `Crypto`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16960

#### Inherited from

`Window.crypto`

***

### customElements

> `readonly` **customElements**: `CustomElementRegistry`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16786

Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.

#### Inherited from

`Window.customElements`

***

### devicePixelRatio

> `readonly` **devicePixelRatio**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16787

#### Inherited from

`Window.devicePixelRatio`

***

### document

> `readonly` **document**: `Document`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16788

#### Inherited from

`Window.document`

***

### ~~event~~

> `readonly` **event**: `Event`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16790

#### Deprecated

#### Inherited from

`Window.event`

***

### ~~external~~

> `readonly` **external**: `External`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16792

#### Deprecated

#### Inherited from

`Window.external`

***

### frameElement

> `readonly` **frameElement**: `Element`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16793

#### Inherited from

`Window.frameElement`

***

### frames

> `readonly` **frames**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16794

#### Inherited from

`Window.frames`

***

### history

> `readonly` **history**: `History`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16795

#### Inherited from

`Window.history`

***

### indexedDB

> `readonly` **indexedDB**: `IDBFactory`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16961

#### Inherited from

`Window.indexedDB`

***

### innerHeight

> `readonly` **innerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16796

#### Inherited from

`Window.innerHeight`

***

### innerWidth

> `readonly` **innerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16797

#### Inherited from

`Window.innerWidth`

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16962

#### Inherited from

`Window.isSecureContext`

***

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16798

#### Inherited from

`Window.length`

***

### leo?

> `optional` **leo**: [`LeoWallet`](LeoWallet.md)

Defined in: [adapter.ts:49](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L49)

***

### leoWallet?

> `optional` **leoWallet**: [`LeoWallet`](LeoWallet.md)

Defined in: [adapter.ts:48](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L48)

***

### localStorage

> `readonly` **localStorage**: `Storage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16953

#### Inherited from

`Window.localStorage`

***

### locationbar

> `readonly` **locationbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16802

Returns true if the location bar is visible; otherwise, returns false.

#### Inherited from

`Window.locationbar`

***

### menubar

> `readonly` **menubar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16804

Returns true if the menu bar is visible; otherwise, returns false.

#### Inherited from

`Window.menubar`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16805

#### Inherited from

`Window.name`

***

### navigator

> `readonly` **navigator**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16806

#### Inherited from

`Window.navigator`

***

### onabort()

> **onabort**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5819

Fires when the user aborts the download.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`UIEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.onabort`

***

### onafterprint()

> **onafterprint**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16928

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onafterprint`

***

### onanimationcancel()

> **onanimationcancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5820

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationcancel`

***

### onanimationend()

> **onanimationend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5821

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationend`

***

### onanimationiteration()

> **onanimationiteration**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5822

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationiteration`

***

### onanimationstart()

> **onanimationstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5823

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationstart`

***

### onauxclick()

> **onauxclick**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5824

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onauxclick`

***

### onbeforeinput()

> **onbeforeinput**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5825

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`InputEvent`

#### Returns

`any`

#### Inherited from

`Window.onbeforeinput`

***

### onbeforeprint()

> **onbeforeprint**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16929

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onbeforeprint`

***

### onbeforeunload()

> **onbeforeunload**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16930

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`BeforeUnloadEvent`

#### Returns

`any`

#### Inherited from

`Window.onbeforeunload`

***

### onblur()

> **onblur**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5830

Fires when the object loses the input focus.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FocusEvent`

The focus event.

#### Returns

`any`

#### Inherited from

`Window.onblur`

***

### oncancel()

> **oncancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5831

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncancel`

***

### oncanplay()

> **oncanplay**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5836

Occurs when playback is possible, but would require further buffering.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.oncanplay`

***

### oncanplaythrough()

> **oncanplaythrough**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5837

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncanplaythrough`

***

### onchange()

> **onchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5842

Fires when the contents of the object or selection have changed.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onchange`

***

### onclick()

> **onclick**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5847

Fires when the user clicks the left mouse button on the object

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onclick`

***

### onclose()

> **onclose**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5848

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onclose`

***

### oncontextmenu()

> **oncontextmenu**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5853

Fires when the user clicks the right mouse button in the client area, opening the context menu.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.oncontextmenu`

***

### oncuechange()

> **oncuechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5854

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncuechange`

***

### ondblclick()

> **ondblclick**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5859

Fires when the user double-clicks the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.ondblclick`

***

### ondevicemotion()

> **ondevicemotion**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16808

Available only in secure contexts.

#### Parameters

##### this

`Window`

##### ev

`DeviceMotionEvent`

#### Returns

`any`

#### Inherited from

`Window.ondevicemotion`

***

### ondeviceorientation()

> **ondeviceorientation**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16810

Available only in secure contexts.

#### Parameters

##### this

`Window`

##### ev

`DeviceOrientationEvent`

#### Returns

`any`

#### Inherited from

`Window.ondeviceorientation`

***

### ondrag()

> **ondrag**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5864

Fires on the source object continuously during a drag operation.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondrag`

***

### ondragend()

> **ondragend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5869

Fires on the source object when the user releases the mouse at the close of a drag operation.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondragend`

***

### ondragenter()

> **ondragenter**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5874

Fires on the target element when the user drags the object to a valid drop target.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The drag event.

#### Returns

`any`

#### Inherited from

`Window.ondragenter`

***

### ondragleave()

> **ondragleave**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5879

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The drag event.

#### Returns

`any`

#### Inherited from

`Window.ondragleave`

***

### ondragover()

> **ondragover**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5884

Fires on the target element continuously while the user drags the object over a valid drop target.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondragover`

***

### ondragstart()

> **ondragstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5889

Fires on the source object when the user starts to drag a text selection or selected object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondragstart`

***

### ondrop()

> **ondrop**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5890

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`Window.ondrop`

***

### ondurationchange()

> **ondurationchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5895

Occurs when the duration attribute is updated.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondurationchange`

***

### onemptied()

> **onemptied**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5900

Occurs when the media element is reset to its initial state.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onemptied`

***

### onended()

> **onended**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5905

Occurs when the end of playback is reached.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event

#### Returns

`any`

#### Inherited from

`Window.onended`

***

### onerror

> **onerror**: `OnErrorEventHandlerNonNull`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5910

Fires when an error occurs during object loading.

#### Param

The event.

#### Inherited from

`Window.onerror`

***

### onfocus()

> **onfocus**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5915

Fires when the object receives focus.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FocusEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.onfocus`

***

### onformdata()

> **onformdata**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5916

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FormDataEvent`

#### Returns

`any`

#### Inherited from

`Window.onformdata`

***

### ongamepadconnected()

> **ongamepadconnected**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16931

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`GamepadEvent`

#### Returns

`any`

#### Inherited from

`Window.ongamepadconnected`

***

### ongamepaddisconnected()

> **ongamepaddisconnected**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16932

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`GamepadEvent`

#### Returns

`any`

#### Inherited from

`Window.ongamepaddisconnected`

***

### ongotpointercapture()

> **ongotpointercapture**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5917

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.ongotpointercapture`

***

### onhashchange()

> **onhashchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16933

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`HashChangeEvent`

#### Returns

`any`

#### Inherited from

`Window.onhashchange`

***

### oninput()

> **oninput**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5918

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oninput`

***

### oninvalid()

> **oninvalid**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5919

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oninvalid`

***

### onkeydown()

> **onkeydown**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5924

Fires when the user presses a key.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

The keyboard event

#### Returns

`any`

#### Inherited from

`Window.onkeydown`

***

### ~~onkeypress()~~

> **onkeypress**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5930

Fires when the user presses an alphanumeric key.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

The event.

#### Returns

`any`

#### Deprecated

#### Inherited from

`Window.onkeypress`

***

### onkeyup()

> **onkeyup**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5935

Fires when the user releases a key.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

The keyboard event

#### Returns

`any`

#### Inherited from

`Window.onkeyup`

***

### onlanguagechange()

> **onlanguagechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16934

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onlanguagechange`

***

### onload()

> **onload**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5940

Fires immediately after the browser loads the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onload`

***

### onloadeddata()

> **onloadeddata**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5945

Occurs when media data is loaded at the current playback position.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onloadeddata`

***

### onloadedmetadata()

> **onloadedmetadata**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5950

Occurs when the duration and dimensions of the media have been determined.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onloadedmetadata`

***

### onloadstart()

> **onloadstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5955

Occurs when Internet Explorer begins looking for media data.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onloadstart`

***

### onlostpointercapture()

> **onlostpointercapture**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5956

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onlostpointercapture`

***

### onmessage()

> **onmessage**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16935

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`MessageEvent`

#### Returns

`any`

#### Inherited from

`Window.onmessage`

***

### onmessageerror()

> **onmessageerror**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16936

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`MessageEvent`

#### Returns

`any`

#### Inherited from

`Window.onmessageerror`

***

### onmousedown()

> **onmousedown**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5961

Fires when the user clicks the object with either mouse button.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmousedown`

***

### onmouseenter()

> **onmouseenter**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5962

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onmouseenter`

***

### onmouseleave()

> **onmouseleave**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5963

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onmouseleave`

***

### onmousemove()

> **onmousemove**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5968

Fires when the user moves the mouse over the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmousemove`

***

### onmouseout()

> **onmouseout**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5973

Fires when the user moves the mouse pointer outside the boundaries of the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmouseout`

***

### onmouseover()

> **onmouseover**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5978

Fires when the user moves the mouse pointer into the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmouseover`

***

### onmouseup()

> **onmouseup**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5983

Fires when the user releases a mouse button while the mouse is over the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmouseup`

***

### onoffline()

> **onoffline**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16937

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onoffline`

***

### ononline()

> **ononline**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16938

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.ononline`

***

### ~~onorientationchange()~~

> **onorientationchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16812

#### Parameters

##### this

`Window`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

#### Inherited from

`Window.onorientationchange`

***

### onpagehide()

> **onpagehide**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16939

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.onpagehide`

***

### onpageshow()

> **onpageshow**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16940

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.onpageshow`

***

### onpause()

> **onpause**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5988

Occurs when playback is paused.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onpause`

***

### onplay()

> **onplay**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5993

Occurs when the play method is requested.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onplay`

***

### onplaying()

> **onplaying**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5998

Occurs when the audio or video has started playing.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onplaying`

***

### onpointercancel()

> **onpointercancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5999

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointercancel`

***

### onpointerdown()

> **onpointerdown**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6000

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerdown`

***

### onpointerenter()

> **onpointerenter**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6001

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerenter`

***

### onpointerleave()

> **onpointerleave**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6002

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerleave`

***

### onpointermove()

> **onpointermove**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6003

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointermove`

***

### onpointerout()

> **onpointerout**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6004

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerout`

***

### onpointerover()

> **onpointerover**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6005

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerover`

***

### onpointerup()

> **onpointerup**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6006

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerup`

***

### onpopstate()

> **onpopstate**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16941

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PopStateEvent`

#### Returns

`any`

#### Inherited from

`Window.onpopstate`

***

### onprogress()

> **onprogress**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6011

Occurs to indicate progress while downloading media data.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ProgressEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.onprogress`

***

### onratechange()

> **onratechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6016

Occurs when the playback rate is increased or decreased.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onratechange`

***

### onrejectionhandled()

> **onrejectionhandled**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16942

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`Window.onrejectionhandled`

***

### onreset()

> **onreset**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6021

Fires when the user resets a form.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onreset`

***

### onresize()

> **onresize**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6022

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`UIEvent`

#### Returns

`any`

#### Inherited from

`Window.onresize`

***

### onscroll()

> **onscroll**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6027

Fires when the user repositions the scroll box in the scroll bar on the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onscroll`

***

### onsecuritypolicyviolation()

> **onsecuritypolicyviolation**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6028

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`SecurityPolicyViolationEvent`

#### Returns

`any`

#### Inherited from

`Window.onsecuritypolicyviolation`

***

### onseeked()

> **onseeked**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6033

Occurs when the seek operation ends.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onseeked`

***

### onseeking()

> **onseeking**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6038

Occurs when the current playback position is moved.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onseeking`

***

### onselect()

> **onselect**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6043

Fires when the current selection changes.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onselect`

***

### onselectionchange()

> **onselectionchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6044

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onselectionchange`

***

### onselectstart()

> **onselectstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6045

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onselectstart`

***

### onslotchange()

> **onslotchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6046

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onslotchange`

***

### onstalled()

> **onstalled**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6051

Occurs when the download has stopped.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onstalled`

***

### onstorage()

> **onstorage**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16943

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`StorageEvent`

#### Returns

`any`

#### Inherited from

`Window.onstorage`

***

### onsubmit()

> **onsubmit**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6052

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`SubmitEvent`

#### Returns

`any`

#### Inherited from

`Window.onsubmit`

***

### onsuspend()

> **onsuspend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6057

Occurs if the load operation has been intentionally halted.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onsuspend`

***

### ontimeupdate()

> **ontimeupdate**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6062

Occurs to indicate the current playback position.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.ontimeupdate`

***

### ontoggle()

> **ontoggle**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6063

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.ontoggle`

***

### ontouchcancel()?

> `optional` **ontouchcancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6064

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchcancel`

***

### ontouchend()?

> `optional` **ontouchend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6065

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchend`

***

### ontouchmove()?

> `optional` **ontouchmove**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6066

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchmove`

***

### ontouchstart()?

> `optional` **ontouchstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6067

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchstart`

***

### ontransitioncancel()

> **ontransitioncancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6068

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitioncancel`

***

### ontransitionend()

> **ontransitionend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6069

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionend`

***

### ontransitionrun()

> **ontransitionrun**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6070

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionrun`

***

### ontransitionstart()

> **ontransitionstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6071

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionstart`

***

### onunhandledrejection()

> **onunhandledrejection**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16944

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`Window.onunhandledrejection`

***

### onunload()

> **onunload**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16945

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onunload`

***

### onvolumechange()

> **onvolumechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6076

Occurs when the volume is changed, or playback is muted or unmuted.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onvolumechange`

***

### onwaiting()

> **onwaiting**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6081

Occurs when playback stops because the next frame of a video resource is not available.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onwaiting`

***

### ~~onwebkitanimationend()~~

> **onwebkitanimationend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6083

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationend`.

#### Inherited from

`Window.onwebkitanimationend`

***

### ~~onwebkitanimationiteration()~~

> **onwebkitanimationiteration**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6085

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationiteration`.

#### Inherited from

`Window.onwebkitanimationiteration`

***

### ~~onwebkitanimationstart()~~

> **onwebkitanimationstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6087

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationstart`.

#### Inherited from

`Window.onwebkitanimationstart`

***

### ~~onwebkittransitionend()~~

> **onwebkittransitionend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6089

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `ontransitionend`.

#### Inherited from

`Window.onwebkittransitionend`

***

### onwheel()

> **onwheel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:6090

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`WheelEvent`

#### Returns

`any`

#### Inherited from

`Window.onwheel`

***

### opener

> **opener**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16813

#### Inherited from

`Window.opener`

***

### ~~orientation~~

> `readonly` **orientation**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16815

#### Deprecated

#### Inherited from

`Window.orientation`

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16963

#### Inherited from

`Window.origin`

***

### outerHeight

> `readonly` **outerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16816

#### Inherited from

`Window.outerHeight`

***

### outerWidth

> `readonly` **outerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16817

#### Inherited from

`Window.outerWidth`

***

### ~~pageXOffset~~

> `readonly` **pageXOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16819

#### Deprecated

This is a legacy alias of `scrollX`.

#### Inherited from

`Window.pageXOffset`

***

### ~~pageYOffset~~

> `readonly` **pageYOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16821

#### Deprecated

This is a legacy alias of `scrollY`.

#### Inherited from

`Window.pageYOffset`

***

### parent

> `readonly` **parent**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16827

Refers to either the parent WindowProxy, or itself.

It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent.

#### Inherited from

`Window.parent`

***

### performance

> `readonly` **performance**: `Performance`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16964

#### Inherited from

`Window.performance`

***

### personalbar

> `readonly` **personalbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16829

Returns true if the personal bar is visible; otherwise, returns false.

#### Inherited from

`Window.personalbar`

***

### screen

> `readonly` **screen**: `Screen`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16830

#### Inherited from

`Window.screen`

***

### screenLeft

> `readonly` **screenLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16831

#### Inherited from

`Window.screenLeft`

***

### screenTop

> `readonly` **screenTop**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16832

#### Inherited from

`Window.screenTop`

***

### screenX

> `readonly` **screenX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16833

#### Inherited from

`Window.screenX`

***

### screenY

> `readonly` **screenY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16834

#### Inherited from

`Window.screenY`

***

### scrollbars

> `readonly` **scrollbars**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16838

Returns true if the scrollbars are visible; otherwise, returns false.

#### Inherited from

`Window.scrollbars`

***

### scrollX

> `readonly` **scrollX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16835

#### Inherited from

`Window.scrollX`

***

### scrollY

> `readonly` **scrollY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16836

#### Inherited from

`Window.scrollY`

***

### self

> `readonly` **self**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16839

#### Inherited from

`Window.self`

***

### sessionStorage

> `readonly` **sessionStorage**: `Storage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16980

#### Inherited from

`Window.sessionStorage`

***

### speechSynthesis

> `readonly` **speechSynthesis**: `SpeechSynthesis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16840

#### Inherited from

`Window.speechSynthesis`

***

### ~~status~~

> **status**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16842

#### Deprecated

#### Inherited from

`Window.status`

***

### statusbar

> `readonly` **statusbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16844

Returns true if the status bar is visible; otherwise, returns false.

#### Inherited from

`Window.statusbar`

***

### toolbar

> `readonly` **toolbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16846

Returns true if the toolbar is visible; otherwise, returns false.

#### Inherited from

`Window.toolbar`

***

### top

> `readonly` **top**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16847

#### Inherited from

`Window.top`

***

### visualViewport

> `readonly` **visualViewport**: `VisualViewport`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16848

#### Inherited from

`Window.visualViewport`

***

### window

> `readonly` **window**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16849

#### Inherited from

`Window.window`

## Accessors

### location

#### Get Signature

> **get** **location**(): `Location`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16799

##### Returns

`Location`

#### Set Signature

> **set** **location**(`href`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16800

##### Parameters

###### href

`string` | `Location`

##### Returns

`void`

#### Inherited from

`Window.location`

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16894

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16895

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.addEventListener`

***

### alert()

> **alert**(`message?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16850

#### Parameters

##### message?

`any`

#### Returns

`void`

#### Inherited from

`Window.alert`

***

### atob()

> **atob**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16965

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`Window.atob`

***

### blur()

> **blur**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16851

#### Returns

`void`

#### Inherited from

`Window.blur`

***

### btoa()

> **btoa**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16966

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`Window.btoa`

***

### cancelAnimationFrame()

> **cancelAnimationFrame**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2195

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

`Window.cancelAnimationFrame`

***

### cancelIdleCallback()

> **cancelIdleCallback**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16852

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

`Window.cancelIdleCallback`

***

### ~~captureEvents()~~

> **captureEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16854

#### Returns

`void`

#### Deprecated

#### Inherited from

`Window.captureEvents`

***

### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16967

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

`Window.clearInterval`

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16968

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

`Window.clearTimeout`

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16856

Closes the window.

#### Returns

`void`

#### Inherited from

`Window.close`

***

### confirm()

> **confirm**(`message?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16857

#### Parameters

##### message?

`string`

#### Returns

`boolean`

#### Inherited from

`Window.confirm`

***

### createImageBitmap()

#### Call Signature

> **createImageBitmap**(`image`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16969

##### Parameters

###### image

`ImageBitmapSource`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`Window.createImageBitmap`

#### Call Signature

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16970

##### Parameters

###### image

`ImageBitmapSource`

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`Window.createImageBitmap`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5309

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`Window.dispatchEvent`

***

### fetch()

> **fetch**(`input`, `init?`): `Promise`\<`Response`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16971

#### Parameters

##### input

`RequestInfo` | `URL`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

`Window.fetch`

***

### focus()

> **focus**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16859

Moves the focus to the window's browsing context, if any.

#### Returns

`void`

#### Inherited from

`Window.focus`

***

### getComputedStyle()

> **getComputedStyle**(`elt`, `pseudoElt?`): `CSSStyleDeclaration`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16860

#### Parameters

##### elt

`Element`

##### pseudoElt?

`string`

#### Returns

`CSSStyleDeclaration`

#### Inherited from

`Window.getComputedStyle`

***

### getSelection()

> **getSelection**(): `Selection`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16861

#### Returns

`Selection`

#### Inherited from

`Window.getSelection`

***

### matchMedia()

> **matchMedia**(`query`): `MediaQueryList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16862

#### Parameters

##### query

`string`

#### Returns

`MediaQueryList`

#### Inherited from

`Window.matchMedia`

***

### moveBy()

> **moveBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16863

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`Window.moveBy`

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16864

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`Window.moveTo`

***

### open()

> **open**(`url?`, `target?`, `features?`): `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16865

#### Parameters

##### url?

`string` | `URL`

##### target?

`string`

##### features?

`string`

#### Returns

`Window`

#### Inherited from

`Window.open`

***

### postMessage()

#### Call Signature

> **postMessage**(`message`, `targetOrigin`, `transfer?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16877

Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.

Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.

A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.

If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".

Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.

##### Parameters

###### message

`any`

###### targetOrigin

`string`

###### transfer?

`Transferable`[]

##### Returns

`void`

##### Inherited from

`Window.postMessage`

#### Call Signature

> **postMessage**(`message`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16878

##### Parameters

###### message

`any`

###### options?

`WindowPostMessageOptions`

##### Returns

`void`

##### Inherited from

`Window.postMessage`

***

### print()

> **print**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16879

#### Returns

`void`

#### Inherited from

`Window.print`

***

### prompt()

> **prompt**(`message?`, `_default?`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16880

#### Parameters

##### message?

`string`

##### \_default?

`string`

#### Returns

`string`

#### Inherited from

`Window.prompt`

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16972

#### Parameters

##### callback

`VoidFunction`

#### Returns

`void`

#### Inherited from

`Window.queueMicrotask`

***

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16882

#### Returns

`void`

#### Deprecated

#### Inherited from

`Window.releaseEvents`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16896

Removes the event listener in target's event listener list with the same type, callback, and options.

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16897

Removes the event listener in target's event listener list with the same type, callback, and options.

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.removeEventListener`

***

### reportError()

> **reportError**(`e`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16973

#### Parameters

##### e

`any`

#### Returns

`void`

#### Inherited from

`Window.reportError`

***

### requestAnimationFrame()

> **requestAnimationFrame**(`callback`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2196

#### Parameters

##### callback

`FrameRequestCallback`

#### Returns

`number`

#### Inherited from

`Window.requestAnimationFrame`

***

### requestIdleCallback()

> **requestIdleCallback**(`callback`, `options?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16883

#### Parameters

##### callback

`IdleRequestCallback`

##### options?

`IdleRequestOptions`

#### Returns

`number`

#### Inherited from

`Window.requestIdleCallback`

***

### resizeBy()

> **resizeBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16884

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`Window.resizeBy`

***

### resizeTo()

> **resizeTo**(`width`, `height`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16885

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

#### Inherited from

`Window.resizeTo`

***

### scroll()

#### Call Signature

> **scroll**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16886

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scroll`

#### Call Signature

> **scroll**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16887

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

##### Inherited from

`Window.scroll`

***

### scrollBy()

#### Call Signature

> **scrollBy**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16888

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scrollBy`

#### Call Signature

> **scrollBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16889

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

##### Inherited from

`Window.scrollBy`

***

### scrollTo()

#### Call Signature

> **scrollTo**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16890

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scrollTo`

#### Call Signature

> **scrollTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16891

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

##### Inherited from

`Window.scrollTo`

***

### setInterval()

> **setInterval**(`handler`, `timeout?`, ...`arguments?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16974

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments?

...`any`[]

#### Returns

`number`

#### Inherited from

`Window.setInterval`

***

### setTimeout()

> **setTimeout**(`handler`, `timeout?`, ...`arguments?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16975

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments?

...`any`[]

#### Returns

`number`

#### Inherited from

`Window.setTimeout`

***

### stop()

> **stop**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16893

Cancels the document load.

#### Returns

`void`

#### Inherited from

`Window.stop`

***

### structuredClone()

> **structuredClone**(`value`, `options?`): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16976

#### Parameters

##### value

`any`

##### options?

`StructuredSerializeOptions`

#### Returns

`any`

#### Inherited from

`Window.structuredClone`
