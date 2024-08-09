[**@foxwallet/aleo-wallet-adapter-fox**](../README.md) • **Docs**

***

[@foxwallet/aleo-wallet-adapter-fox](../globals.md) / FoxWindow

# Interface: FoxWindow

## Extends

- `Window`

## Properties

### aleo?

> `optional` **aleo**: [`FoxWallet`](FoxWallet.md)

#### Defined in

[adapter.ts:50](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L50)

***

### caches

> `readonly` **caches**: `CacheStorage`

Available only in secure contexts.

#### Inherited from

`Window.caches`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16958

***

### ~~clientInformation~~

> `readonly` **clientInformation**: `Navigator`

#### Deprecated

This is a legacy alias of `navigator`.

#### Inherited from

`Window.clientInformation`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16782

***

### closed

> `readonly` **closed**: `boolean`

Returns true if the window has been closed, false otherwise.

#### Inherited from

`Window.closed`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16784

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

#### Inherited from

`Window.crossOriginIsolated`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16959

***

### crypto

> `readonly` **crypto**: `Crypto`

#### Inherited from

`Window.crypto`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16960

***

### customElements

> `readonly` **customElements**: `CustomElementRegistry`

Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.

#### Inherited from

`Window.customElements`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16786

***

### devicePixelRatio

> `readonly` **devicePixelRatio**: `number`

#### Inherited from

`Window.devicePixelRatio`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16787

***

### document

> `readonly` **document**: `Document`

#### Inherited from

`Window.document`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16788

***

### ~~event~~

> `readonly` **event**: `Event`

#### Deprecated

#### Inherited from

`Window.event`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16790

***

### ~~external~~

> `readonly` **external**: `External`

#### Deprecated

#### Inherited from

`Window.external`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16792

***

### foxwallet?

> `optional` **foxwallet**: `object`

#### aleo

> **aleo**: [`FoxWallet`](FoxWallet.md)

#### Defined in

[adapter.ts:47](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L47)

***

### frameElement

> `readonly` **frameElement**: `Element`

#### Inherited from

`Window.frameElement`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16793

***

### frames

> `readonly` **frames**: `Window`

#### Inherited from

`Window.frames`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16794

***

### history

> `readonly` **history**: `History`

#### Inherited from

`Window.history`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16795

***

### indexedDB

> `readonly` **indexedDB**: `IDBFactory`

#### Inherited from

`Window.indexedDB`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16961

***

### innerHeight

> `readonly` **innerHeight**: `number`

#### Inherited from

`Window.innerHeight`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16796

***

### innerWidth

> `readonly` **innerWidth**: `number`

#### Inherited from

`Window.innerWidth`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16797

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

#### Inherited from

`Window.isSecureContext`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16962

***

### length

> `readonly` **length**: `number`

#### Inherited from

`Window.length`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16798

***

### localStorage

> `readonly` **localStorage**: `Storage`

#### Inherited from

`Window.localStorage`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16953

***

### locationbar

> `readonly` **locationbar**: `BarProp`

Returns true if the location bar is visible; otherwise, returns false.

#### Inherited from

`Window.locationbar`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16802

***

### menubar

> `readonly` **menubar**: `BarProp`

Returns true if the menu bar is visible; otherwise, returns false.

#### Inherited from

`Window.menubar`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16804

***

### name

> **name**: `string`

#### Inherited from

`Window.name`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16805

***

### navigator

> `readonly` **navigator**: `Navigator`

#### Inherited from

`Window.navigator`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16806

***

### onabort()

> **onabort**: (`this`, `ev`) => `any`

Fires when the user aborts the download.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `UIEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.onabort`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5819

***

### onafterprint()

> **onafterprint**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onafterprint`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16928

***

### onanimationcancel()

> **onanimationcancel**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationcancel`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5820

***

### onanimationend()

> **onanimationend**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5821

***

### onanimationiteration()

> **onanimationiteration**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationiteration`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5822

***

### onanimationstart()

> **onanimationstart**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5823

***

### onauxclick()

> **onauxclick**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onauxclick`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5824

***

### onbeforeinput()

> **onbeforeinput**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `InputEvent`

#### Returns

`any`

#### Inherited from

`Window.onbeforeinput`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5825

***

### onbeforeprint()

> **onbeforeprint**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onbeforeprint`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16929

***

### onbeforeunload()

> **onbeforeunload**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `BeforeUnloadEvent`

#### Returns

`any`

#### Inherited from

`Window.onbeforeunload`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16930

***

### onblur()

> **onblur**: (`this`, `ev`) => `any`

Fires when the object loses the input focus.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `FocusEvent`

The focus event.

#### Returns

`any`

#### Inherited from

`Window.onblur`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5830

***

### oncancel()

> **oncancel**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.oncancel`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5831

***

### oncanplay()

> **oncanplay**: (`this`, `ev`) => `any`

Occurs when playback is possible, but would require further buffering.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.oncanplay`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5836

***

### oncanplaythrough()

> **oncanplaythrough**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.oncanplaythrough`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5837

***

### onchange()

> **onchange**: (`this`, `ev`) => `any`

Fires when the contents of the object or selection have changed.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onchange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5842

***

### onclick()

> **onclick**: (`this`, `ev`) => `any`

Fires when the user clicks the left mouse button on the object

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onclick`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5847

***

### onclose()

> **onclose**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onclose`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5848

***

### oncontextmenu()

> **oncontextmenu**: (`this`, `ev`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.oncontextmenu`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5853

***

### oncuechange()

> **oncuechange**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.oncuechange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5854

***

### ondblclick()

> **ondblclick**: (`this`, `ev`) => `any`

Fires when the user double-clicks the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.ondblclick`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5859

***

### ondevicemotion()

> **ondevicemotion**: (`this`, `ev`) => `any`

Available only in secure contexts.

#### Parameters

• **this**: `Window`

• **ev**: `DeviceMotionEvent`

#### Returns

`any`

#### Inherited from

`Window.ondevicemotion`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16808

***

### ondeviceorientation()

> **ondeviceorientation**: (`this`, `ev`) => `any`

Available only in secure contexts.

#### Parameters

• **this**: `Window`

• **ev**: `DeviceOrientationEvent`

#### Returns

`any`

#### Inherited from

`Window.ondeviceorientation`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16810

***

### ondrag()

> **ondrag**: (`this`, `ev`) => `any`

Fires on the source object continuously during a drag operation.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondrag`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5864

***

### ondragend()

> **ondragend**: (`this`, `ev`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondragend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5869

***

### ondragenter()

> **ondragenter**: (`this`, `ev`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

The drag event.

#### Returns

`any`

#### Inherited from

`Window.ondragenter`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5874

***

### ondragleave()

> **ondragleave**: (`this`, `ev`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

The drag event.

#### Returns

`any`

#### Inherited from

`Window.ondragleave`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5879

***

### ondragover()

> **ondragover**: (`this`, `ev`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondragover`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5884

***

### ondragstart()

> **ondragstart**: (`this`, `ev`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondragstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5889

***

### ondrop()

> **ondrop**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `DragEvent`

#### Returns

`any`

#### Inherited from

`Window.ondrop`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5890

***

### ondurationchange()

> **ondurationchange**: (`this`, `ev`) => `any`

Occurs when the duration attribute is updated.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.ondurationchange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5895

***

### onemptied()

> **onemptied**: (`this`, `ev`) => `any`

Occurs when the media element is reset to its initial state.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onemptied`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5900

***

### onended()

> **onended**: (`this`, `ev`) => `any`

Occurs when the end of playback is reached.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event

#### Returns

`any`

#### Inherited from

`Window.onended`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5905

***

### onerror

> **onerror**: `OnErrorEventHandlerNonNull`

Fires when an error occurs during object loading.

#### Param

The event.

#### Inherited from

`Window.onerror`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5910

***

### onfocus()

> **onfocus**: (`this`, `ev`) => `any`

Fires when the object receives focus.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `FocusEvent`

The event.

#### Returns

`any`

#### Inherited from

`Window.onfocus`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5915

***

### onformdata()

> **onformdata**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `FormDataEvent`

#### Returns

`any`

#### Inherited from

`Window.onformdata`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5916

***

### ongamepadconnected()

> **ongamepadconnected**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `GamepadEvent`

#### Returns

`any`

#### Inherited from

`Window.ongamepadconnected`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16931

***

### ongamepaddisconnected()

> **ongamepaddisconnected**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `GamepadEvent`

#### Returns

`any`

#### Inherited from

`Window.ongamepaddisconnected`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16932

***

### ongotpointercapture()

> **ongotpointercapture**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.ongotpointercapture`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5917

***

### onhashchange()

> **onhashchange**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `HashChangeEvent`

#### Returns

`any`

#### Inherited from

`Window.onhashchange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16933

***

### oninput()

> **oninput**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.oninput`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5918

***

### oninvalid()

> **oninvalid**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.oninvalid`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5919

***

### onkeydown()

> **onkeydown**: (`this`, `ev`) => `any`

Fires when the user presses a key.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `KeyboardEvent`

The keyboard event

#### Returns

`any`

#### Inherited from

`Window.onkeydown`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5924

***

### ~~onkeypress()~~

> **onkeypress**: (`this`, `ev`) => `any`

Fires when the user presses an alphanumeric key.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `KeyboardEvent`

The event.

#### Returns

`any`

#### Deprecated

#### Inherited from

`Window.onkeypress`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5930

***

### onkeyup()

> **onkeyup**: (`this`, `ev`) => `any`

Fires when the user releases a key.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `KeyboardEvent`

The keyboard event

#### Returns

`any`

#### Inherited from

`Window.onkeyup`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5935

***

### onlanguagechange()

> **onlanguagechange**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onlanguagechange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16934

***

### onload()

> **onload**: (`this`, `ev`) => `any`

Fires immediately after the browser loads the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onload`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5940

***

### onloadeddata()

> **onloadeddata**: (`this`, `ev`) => `any`

Occurs when media data is loaded at the current playback position.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onloadeddata`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5945

***

### onloadedmetadata()

> **onloadedmetadata**: (`this`, `ev`) => `any`

Occurs when the duration and dimensions of the media have been determined.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onloadedmetadata`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5950

***

### onloadstart()

> **onloadstart**: (`this`, `ev`) => `any`

Occurs when Internet Explorer begins looking for media data.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onloadstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5955

***

### onlostpointercapture()

> **onlostpointercapture**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onlostpointercapture`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5956

***

### onmessage()

> **onmessage**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `MessageEvent`\<`any`\>

#### Returns

`any`

#### Inherited from

`Window.onmessage`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16935

***

### onmessageerror()

> **onmessageerror**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `MessageEvent`\<`any`\>

#### Returns

`any`

#### Inherited from

`Window.onmessageerror`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16936

***

### onmousedown()

> **onmousedown**: (`this`, `ev`) => `any`

Fires when the user clicks the object with either mouse button.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmousedown`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5961

***

### onmouseenter()

> **onmouseenter**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onmouseenter`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5962

***

### onmouseleave()

> **onmouseleave**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onmouseleave`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5963

***

### onmousemove()

> **onmousemove**: (`this`, `ev`) => `any`

Fires when the user moves the mouse over the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmousemove`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5968

***

### onmouseout()

> **onmouseout**: (`this`, `ev`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmouseout`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5973

***

### onmouseover()

> **onmouseover**: (`this`, `ev`) => `any`

Fires when the user moves the mouse pointer into the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmouseover`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5978

***

### onmouseup()

> **onmouseup**: (`this`, `ev`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `MouseEvent`

The mouse event.

#### Returns

`any`

#### Inherited from

`Window.onmouseup`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5983

***

### onoffline()

> **onoffline**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onoffline`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16937

***

### ononline()

> **ononline**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.ononline`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16938

***

### ~~onorientationchange()~~

> **onorientationchange**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `Window`

• **ev**: `Event`

#### Returns

`any`

#### Deprecated

#### Inherited from

`Window.onorientationchange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16812

***

### onpagehide()

> **onpagehide**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.onpagehide`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16939

***

### onpageshow()

> **onpageshow**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.onpageshow`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16940

***

### onpause()

> **onpause**: (`this`, `ev`) => `any`

Occurs when playback is paused.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onpause`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5988

***

### onplay()

> **onplay**: (`this`, `ev`) => `any`

Occurs when the play method is requested.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onplay`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5993

***

### onplaying()

> **onplaying**: (`this`, `ev`) => `any`

Occurs when the audio or video has started playing.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onplaying`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5998

***

### onpointercancel()

> **onpointercancel**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointercancel`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5999

***

### onpointerdown()

> **onpointerdown**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerdown`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6000

***

### onpointerenter()

> **onpointerenter**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerenter`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6001

***

### onpointerleave()

> **onpointerleave**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerleave`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6002

***

### onpointermove()

> **onpointermove**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointermove`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6003

***

### onpointerout()

> **onpointerout**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerout`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6004

***

### onpointerover()

> **onpointerover**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerover`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6005

***

### onpointerup()

> **onpointerup**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerup`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6006

***

### onpopstate()

> **onpopstate**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `PopStateEvent`

#### Returns

`any`

#### Inherited from

`Window.onpopstate`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16941

***

### onprogress()

> **onprogress**: (`this`, `ev`) => `any`

Occurs to indicate progress while downloading media data.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `ProgressEvent`\<`EventTarget`\>

The event.

#### Returns

`any`

#### Inherited from

`Window.onprogress`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6011

***

### onratechange()

> **onratechange**: (`this`, `ev`) => `any`

Occurs when the playback rate is increased or decreased.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onratechange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6016

***

### onrejectionhandled()

> **onrejectionhandled**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`Window.onrejectionhandled`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16942

***

### onreset()

> **onreset**: (`this`, `ev`) => `any`

Fires when the user resets a form.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onreset`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6021

***

### onresize()

> **onresize**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `UIEvent`

#### Returns

`any`

#### Inherited from

`Window.onresize`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6022

***

### onscroll()

> **onscroll**: (`this`, `ev`) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onscroll`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6027

***

### onsecuritypolicyviolation()

> **onsecuritypolicyviolation**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `SecurityPolicyViolationEvent`

#### Returns

`any`

#### Inherited from

`Window.onsecuritypolicyviolation`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6028

***

### onseeked()

> **onseeked**: (`this`, `ev`) => `any`

Occurs when the seek operation ends.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onseeked`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6033

***

### onseeking()

> **onseeking**: (`this`, `ev`) => `any`

Occurs when the current playback position is moved.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onseeking`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6038

***

### onselect()

> **onselect**: (`this`, `ev`) => `any`

Fires when the current selection changes.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onselect`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6043

***

### onselectionchange()

> **onselectionchange**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onselectionchange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6044

***

### onselectstart()

> **onselectstart**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onselectstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6045

***

### onslotchange()

> **onslotchange**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onslotchange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6046

***

### onstalled()

> **onstalled**: (`this`, `ev`) => `any`

Occurs when the download has stopped.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onstalled`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6051

***

### onstorage()

> **onstorage**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `StorageEvent`

#### Returns

`any`

#### Inherited from

`Window.onstorage`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16943

***

### onsubmit()

> **onsubmit**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `SubmitEvent`

#### Returns

`any`

#### Inherited from

`Window.onsubmit`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6052

***

### onsuspend()

> **onsuspend**: (`this`, `ev`) => `any`

Occurs if the load operation has been intentionally halted.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onsuspend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6057

***

### ontimeupdate()

> **ontimeupdate**: (`this`, `ev`) => `any`

Occurs to indicate the current playback position.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.ontimeupdate`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6062

***

### ontoggle()

> **ontoggle**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.ontoggle`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6063

***

### ontouchcancel()?

> `optional` **ontouchcancel**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchcancel`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6064

***

### ontouchend()?

> `optional` **ontouchend**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6065

***

### ontouchmove()?

> `optional` **ontouchmove**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchmove`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6066

***

### ontouchstart()?

> `optional` **ontouchstart**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6067

***

### ontransitioncancel()

> **ontransitioncancel**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitioncancel`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6068

***

### ontransitionend()

> **ontransitionend**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6069

***

### ontransitionrun()

> **ontransitionrun**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionrun`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6070

***

### ontransitionstart()

> **ontransitionstart**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6071

***

### onunhandledrejection()

> **onunhandledrejection**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`Window.onunhandledrejection`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16944

***

### onunload()

> **onunload**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `WindowEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Inherited from

`Window.onunload`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16945

***

### onvolumechange()

> **onvolumechange**: (`this`, `ev`) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onvolumechange`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6076

***

### onwaiting()

> **onwaiting**: (`this`, `ev`) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

The event.

#### Returns

`any`

#### Inherited from

`Window.onwaiting`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6081

***

### ~~onwebkitanimationend()~~

> **onwebkitanimationend**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationend`.

#### Inherited from

`Window.onwebkitanimationend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6083

***

### ~~onwebkitanimationiteration()~~

> **onwebkitanimationiteration**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationiteration`.

#### Inherited from

`Window.onwebkitanimationiteration`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6085

***

### ~~onwebkitanimationstart()~~

> **onwebkitanimationstart**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationstart`.

#### Inherited from

`Window.onwebkitanimationstart`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6087

***

### ~~onwebkittransitionend()~~

> **onwebkittransitionend**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `ontransitionend`.

#### Inherited from

`Window.onwebkittransitionend`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6089

***

### onwheel()

> **onwheel**: (`this`, `ev`) => `any`

#### Parameters

• **this**: `GlobalEventHandlers`

• **ev**: `WheelEvent`

#### Returns

`any`

#### Inherited from

`Window.onwheel`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6090

***

### opener

> **opener**: `any`

#### Inherited from

`Window.opener`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16813

***

### ~~orientation~~

> `readonly` **orientation**: `number`

#### Deprecated

#### Inherited from

`Window.orientation`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16815

***

### origin

> `readonly` **origin**: `string`

#### Inherited from

`Window.origin`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16963

***

### outerHeight

> `readonly` **outerHeight**: `number`

#### Inherited from

`Window.outerHeight`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16816

***

### outerWidth

> `readonly` **outerWidth**: `number`

#### Inherited from

`Window.outerWidth`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16817

***

### ~~pageXOffset~~

> `readonly` **pageXOffset**: `number`

#### Deprecated

This is a legacy alias of `scrollX`.

#### Inherited from

`Window.pageXOffset`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16819

***

### ~~pageYOffset~~

> `readonly` **pageYOffset**: `number`

#### Deprecated

This is a legacy alias of `scrollY`.

#### Inherited from

`Window.pageYOffset`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16821

***

### parent

> `readonly` **parent**: `Window`

Refers to either the parent WindowProxy, or itself.

It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent.

#### Inherited from

`Window.parent`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16827

***

### performance

> `readonly` **performance**: `Performance`

#### Inherited from

`Window.performance`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16964

***

### personalbar

> `readonly` **personalbar**: `BarProp`

Returns true if the personal bar is visible; otherwise, returns false.

#### Inherited from

`Window.personalbar`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16829

***

### screen

> `readonly` **screen**: `Screen`

#### Inherited from

`Window.screen`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16830

***

### screenLeft

> `readonly` **screenLeft**: `number`

#### Inherited from

`Window.screenLeft`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16831

***

### screenTop

> `readonly` **screenTop**: `number`

#### Inherited from

`Window.screenTop`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16832

***

### screenX

> `readonly` **screenX**: `number`

#### Inherited from

`Window.screenX`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16833

***

### screenY

> `readonly` **screenY**: `number`

#### Inherited from

`Window.screenY`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16834

***

### scrollX

> `readonly` **scrollX**: `number`

#### Inherited from

`Window.scrollX`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16835

***

### scrollY

> `readonly` **scrollY**: `number`

#### Inherited from

`Window.scrollY`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16836

***

### scrollbars

> `readonly` **scrollbars**: `BarProp`

Returns true if the scrollbars are visible; otherwise, returns false.

#### Inherited from

`Window.scrollbars`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16838

***

### self

> `readonly` **self**: `Window` & *typeof* `globalThis`

#### Inherited from

`Window.self`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16839

***

### sessionStorage

> `readonly` **sessionStorage**: `Storage`

#### Inherited from

`Window.sessionStorage`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16980

***

### speechSynthesis

> `readonly` **speechSynthesis**: `SpeechSynthesis`

#### Inherited from

`Window.speechSynthesis`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16840

***

### ~~status~~

> **status**: `string`

#### Deprecated

#### Inherited from

`Window.status`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16842

***

### statusbar

> `readonly` **statusbar**: `BarProp`

Returns true if the status bar is visible; otherwise, returns false.

#### Inherited from

`Window.statusbar`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16844

***

### toolbar

> `readonly` **toolbar**: `BarProp`

Returns true if the toolbar is visible; otherwise, returns false.

#### Inherited from

`Window.toolbar`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16846

***

### top

> `readonly` **top**: `Window`

#### Inherited from

`Window.top`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16847

***

### visualViewport

> `readonly` **visualViewport**: `VisualViewport`

#### Inherited from

`Window.visualViewport`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16848

***

### window

> `readonly` **window**: `Window` & *typeof* `globalThis`

#### Inherited from

`Window.window`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16849

## Accessors

### location

> `get` **location**(): `Location`

> `set` **location**(`href`): `void`

#### Parameters

• **href**: `string` \| `Location`

#### Returns

`Location`

#### Inherited from

`Window.location`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16799

## Methods

### addEventListener()

#### addEventListener(type, listener, options)

> **addEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

##### Type Parameters

• **K** *extends* keyof `WindowEventMap`

##### Parameters

• **type**: `K`

• **listener**

• **options?**: `boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.addEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16894

#### addEventListener(type, listener, options)

> **addEventListener**(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

##### Parameters

• **type**: `string`

• **listener**: `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.addEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16895

***

### alert()

> **alert**(`message`?): `void`

#### Parameters

• **message?**: `any`

#### Returns

`void`

#### Inherited from

`Window.alert`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16850

***

### atob()

> **atob**(`data`): `string`

#### Parameters

• **data**: `string`

#### Returns

`string`

#### Inherited from

`Window.atob`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16965

***

### blur()

> **blur**(): `void`

#### Returns

`void`

#### Inherited from

`Window.blur`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16851

***

### btoa()

> **btoa**(`data`): `string`

#### Parameters

• **data**: `string`

#### Returns

`string`

#### Inherited from

`Window.btoa`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16966

***

### cancelAnimationFrame()

> **cancelAnimationFrame**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Inherited from

`Window.cancelAnimationFrame`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:2195

***

### cancelIdleCallback()

> **cancelIdleCallback**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Inherited from

`Window.cancelIdleCallback`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16852

***

### ~~captureEvents()~~

> **captureEvents**(): `void`

#### Returns

`void`

#### Deprecated

#### Inherited from

`Window.captureEvents`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16854

***

### clearInterval()

> **clearInterval**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Inherited from

`Window.clearInterval`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16967

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Inherited from

`Window.clearTimeout`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16968

***

### close()

> **close**(): `void`

Closes the window.

#### Returns

`void`

#### Inherited from

`Window.close`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16856

***

### confirm()

> **confirm**(`message`?): `boolean`

#### Parameters

• **message?**: `string`

#### Returns

`boolean`

#### Inherited from

`Window.confirm`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16857

***

### createImageBitmap()

#### createImageBitmap(image, options)

> **createImageBitmap**(`image`, `options`?): `Promise`\<`ImageBitmap`\>

##### Parameters

• **image**: `ImageBitmapSource`

• **options?**: `ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`Window.createImageBitmap`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16969

#### createImageBitmap(image, sx, sy, sw, sh, options)

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options`?): `Promise`\<`ImageBitmap`\>

##### Parameters

• **image**: `ImageBitmapSource`

• **sx**: `number`

• **sy**: `number`

• **sw**: `number`

• **sh**: `number`

• **options?**: `ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`Window.createImageBitmap`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16970

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

• **event**: `Event`

#### Returns

`boolean`

#### Inherited from

`Window.dispatchEvent`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5309

***

### fetch()

> **fetch**(`input`, `init`?): `Promise`\<`Response`\>

#### Parameters

• **input**: `RequestInfo` \| `URL`

• **init?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

`Window.fetch`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16971

***

### focus()

> **focus**(): `void`

Moves the focus to the window's browsing context, if any.

#### Returns

`void`

#### Inherited from

`Window.focus`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16859

***

### getComputedStyle()

> **getComputedStyle**(`elt`, `pseudoElt`?): `CSSStyleDeclaration`

#### Parameters

• **elt**: `Element`

• **pseudoElt?**: `string`

#### Returns

`CSSStyleDeclaration`

#### Inherited from

`Window.getComputedStyle`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16860

***

### getSelection()

> **getSelection**(): `Selection`

#### Returns

`Selection`

#### Inherited from

`Window.getSelection`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16861

***

### matchMedia()

> **matchMedia**(`query`): `MediaQueryList`

#### Parameters

• **query**: `string`

#### Returns

`MediaQueryList`

#### Inherited from

`Window.matchMedia`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16862

***

### moveBy()

> **moveBy**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Inherited from

`Window.moveBy`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16863

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Inherited from

`Window.moveTo`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16864

***

### open()

> **open**(`url`?, `target`?, `features`?): `Window`

#### Parameters

• **url?**: `string` \| `URL`

• **target?**: `string`

• **features?**: `string`

#### Returns

`Window`

#### Inherited from

`Window.open`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16865

***

### postMessage()

#### postMessage(message, targetOrigin, transfer)

> **postMessage**(`message`, `targetOrigin`, `transfer`?): `void`

Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.

Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.

A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.

If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".

Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.

##### Parameters

• **message**: `any`

• **targetOrigin**: `string`

• **transfer?**: `Transferable`[]

##### Returns

`void`

##### Inherited from

`Window.postMessage`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16877

#### postMessage(message, options)

> **postMessage**(`message`, `options`?): `void`

##### Parameters

• **message**: `any`

• **options?**: `WindowPostMessageOptions`

##### Returns

`void`

##### Inherited from

`Window.postMessage`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16878

***

### print()

> **print**(): `void`

#### Returns

`void`

#### Inherited from

`Window.print`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16879

***

### prompt()

> **prompt**(`message`?, `_default`?): `string`

#### Parameters

• **message?**: `string`

• **\_default?**: `string`

#### Returns

`string`

#### Inherited from

`Window.prompt`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16880

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

#### Parameters

• **callback**: `VoidFunction`

#### Returns

`void`

#### Inherited from

`Window.queueMicrotask`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16972

***

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

#### Returns

`void`

#### Deprecated

#### Inherited from

`Window.releaseEvents`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16882

***

### removeEventListener()

#### removeEventListener(type, listener, options)

> **removeEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

##### Type Parameters

• **K** *extends* keyof `WindowEventMap`

##### Parameters

• **type**: `K`

• **listener**

• **options?**: `boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.removeEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16896

#### removeEventListener(type, listener, options)

> **removeEventListener**(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

##### Parameters

• **type**: `string`

• **listener**: `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.removeEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16897

***

### reportError()

> **reportError**(`e`): `void`

#### Parameters

• **e**: `any`

#### Returns

`void`

#### Inherited from

`Window.reportError`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16973

***

### requestAnimationFrame()

> **requestAnimationFrame**(`callback`): `number`

#### Parameters

• **callback**: `FrameRequestCallback`

#### Returns

`number`

#### Inherited from

`Window.requestAnimationFrame`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:2196

***

### requestIdleCallback()

> **requestIdleCallback**(`callback`, `options`?): `number`

#### Parameters

• **callback**: `IdleRequestCallback`

• **options?**: `IdleRequestOptions`

#### Returns

`number`

#### Inherited from

`Window.requestIdleCallback`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16883

***

### resizeBy()

> **resizeBy**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Inherited from

`Window.resizeBy`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16884

***

### resizeTo()

> **resizeTo**(`width`, `height`): `void`

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Inherited from

`Window.resizeTo`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16885

***

### scroll()

#### scroll(options)

> **scroll**(`options`?): `void`

##### Parameters

• **options?**: `ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scroll`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16886

#### scroll(x, y)

> **scroll**(`x`, `y`): `void`

##### Parameters

• **x**: `number`

• **y**: `number`

##### Returns

`void`

##### Inherited from

`Window.scroll`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16887

***

### scrollBy()

#### scrollBy(options)

> **scrollBy**(`options`?): `void`

##### Parameters

• **options?**: `ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scrollBy`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16888

#### scrollBy(x, y)

> **scrollBy**(`x`, `y`): `void`

##### Parameters

• **x**: `number`

• **y**: `number`

##### Returns

`void`

##### Inherited from

`Window.scrollBy`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16889

***

### scrollTo()

#### scrollTo(options)

> **scrollTo**(`options`?): `void`

##### Parameters

• **options?**: `ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scrollTo`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16890

#### scrollTo(x, y)

> **scrollTo**(`x`, `y`): `void`

##### Parameters

• **x**: `number`

• **y**: `number`

##### Returns

`void`

##### Inherited from

`Window.scrollTo`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16891

***

### setInterval()

> **setInterval**(`handler`, `timeout`?, ...`arguments`?): `number`

#### Parameters

• **handler**: `TimerHandler`

• **timeout?**: `number`

• ...**arguments?**: `any`[]

#### Returns

`number`

#### Inherited from

`Window.setInterval`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16974

***

### setTimeout()

> **setTimeout**(`handler`, `timeout`?, ...`arguments`?): `number`

#### Parameters

• **handler**: `TimerHandler`

• **timeout?**: `number`

• ...**arguments?**: `any`[]

#### Returns

`number`

#### Inherited from

`Window.setTimeout`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16975

***

### stop()

> **stop**(): `void`

Cancels the document load.

#### Returns

`void`

#### Inherited from

`Window.stop`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16893

***

### structuredClone()

> **structuredClone**(`value`, `options`?): `any`

#### Parameters

• **value**: `any`

• **options?**: `StructuredSerializeOptions`

#### Returns

`any`

#### Inherited from

`Window.structuredClone`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:16976
