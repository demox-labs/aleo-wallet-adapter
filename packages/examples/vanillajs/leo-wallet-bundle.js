/******/ var __webpack_modules__ = ({

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseWalletAdapter": () => (/* binding */ BaseWalletAdapter),
/* harmony export */   "EventEmitter": () => (/* reexport default from dynamic */ eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "WalletReadyState": () => (/* binding */ WalletReadyState),
/* harmony export */   "scopePollingDetectionStrategy": () => (/* binding */ scopePollingDetectionStrategy)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


/**
 * A wallet's readiness describes a series of states that the wallet can be in,
 * depending on what kind of wallet it is. An installable wallet (eg. a browser
 * extension like Phantom) might be `Installed` if we've found the Phantom API
 * in the global scope, or `NotDetected` otherwise. A loadable, zero-install
 * runtime (eg. Torus Wallet) might simply signal that it's `Loadable`. Use this
 * metadata to personalize the wallet list for each user (eg. to show their
 * installed wallets first).
 */
var WalletReadyState;
(function (WalletReadyState) {
    /**
     * User-installable wallets can typically be detected by scanning for an API
     * that they've injected into the global context. If such an API is present,
     * we consider the wallet to have been installed.
     */
    WalletReadyState["Installed"] = "Installed";
    WalletReadyState["NotDetected"] = "NotDetected";
    /**
     * Loadable wallets are always available to you. Since you can load them at
     * any time, it's meaningless to say that they have been detected.
     */
    WalletReadyState["Loadable"] = "Loadable";
    /**
     * If a wallet is not supported on a given platform (eg. server-rendering, or
     * mobile) then it will stay in the `Unsupported` state.
     */
    WalletReadyState["Unsupported"] = "Unsupported";
})(WalletReadyState || (WalletReadyState = {}));
class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {
    get connected() {
        return !!this.publicKey;
    }
}
function scopePollingDetectionStrategy(detect) {
    // Early return when server-side rendering
    if (typeof window === 'undefined' || typeof document === 'undefined')
        return;
    const disposers = [];
    function detectAndDispose() {
        const detected = detect();
        if (detected) {
            for (const dispose of disposers) {
                dispose();
            }
        }
    }
    // Strategy #1: Try detecting every second.
    const interval = 
    // TODO: #334 Replace with idle callback strategy.
    setInterval(detectAndDispose, 1000);
    disposers.push(() => clearInterval(interval));
    // Strategy #2: Detect as soon as the DOM becomes 'ready'/'interactive'.
    if (
    // Implies that `DOMContentLoaded` has not yet fired.
    document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectAndDispose, { once: true });
        disposers.push(() => document.removeEventListener('DOMContentLoaded', detectAndDispose));
    }
    // Strategy #3: Detect after the `window` has fully loaded.
    if (
    // If the `complete` state has been reached, we're too late.
    document.readyState !== 'complete') {
        window.addEventListener('load', detectAndDispose, { once: true });
        disposers.push(() => window.removeEventListener('load', detectAndDispose));
    }
    // Strategy #4: Detect synchronously, now.
    detectAndDispose();
}
//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletAccountError": () => (/* binding */ WalletAccountError),
/* harmony export */   "WalletConfigError": () => (/* binding */ WalletConfigError),
/* harmony export */   "WalletConnectionError": () => (/* binding */ WalletConnectionError),
/* harmony export */   "WalletDecryptionError": () => (/* binding */ WalletDecryptionError),
/* harmony export */   "WalletDecryptionNotAllowedError": () => (/* binding */ WalletDecryptionNotAllowedError),
/* harmony export */   "WalletDisconnectedError": () => (/* binding */ WalletDisconnectedError),
/* harmony export */   "WalletDisconnectionError": () => (/* binding */ WalletDisconnectionError),
/* harmony export */   "WalletError": () => (/* binding */ WalletError),
/* harmony export */   "WalletKeypairError": () => (/* binding */ WalletKeypairError),
/* harmony export */   "WalletLoadError": () => (/* binding */ WalletLoadError),
/* harmony export */   "WalletNotConnectedError": () => (/* binding */ WalletNotConnectedError),
/* harmony export */   "WalletNotReadyError": () => (/* binding */ WalletNotReadyError),
/* harmony export */   "WalletNotSelectedError": () => (/* binding */ WalletNotSelectedError),
/* harmony export */   "WalletPublicKeyError": () => (/* binding */ WalletPublicKeyError),
/* harmony export */   "WalletRequestViewKeyError": () => (/* binding */ WalletRequestViewKeyError),
/* harmony export */   "WalletSendTransactionError": () => (/* binding */ WalletSendTransactionError),
/* harmony export */   "WalletSignMessageError": () => (/* binding */ WalletSignMessageError),
/* harmony export */   "WalletSignTransactionError": () => (/* binding */ WalletSignTransactionError),
/* harmony export */   "WalletTimeoutError": () => (/* binding */ WalletTimeoutError),
/* harmony export */   "WalletWindowBlockedError": () => (/* binding */ WalletWindowBlockedError),
/* harmony export */   "WalletWindowClosedError": () => (/* binding */ WalletWindowClosedError)
/* harmony export */ });
class WalletError extends Error {
    error;
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
class WalletNotReadyError extends WalletError {
    name = 'WalletNotReadyError';
}
class WalletLoadError extends WalletError {
    name = 'WalletLoadError';
}
class WalletConfigError extends WalletError {
    name = 'WalletConfigError';
}
class WalletConnectionError extends WalletError {
    name = 'WalletConnectionError';
}
class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}
class WalletDisconnectedError extends WalletError {
    name = 'WalletDisconnectedError';
}
class WalletDisconnectionError extends WalletError {
    name = 'WalletDisconnectionError';
}
class WalletAccountError extends WalletError {
    name = 'WalletAccountError';
}
class WalletPublicKeyError extends WalletError {
    name = 'WalletPublicKeyError';
}
class WalletKeypairError extends WalletError {
    name = 'WalletKeypairError';
}
class WalletNotConnectedError extends WalletError {
    name = 'WalletNotConnectedError';
}
class WalletSendTransactionError extends WalletError {
    name = 'WalletSendTransactionError';
}
class WalletSignMessageError extends WalletError {
    name = 'WalletSignMessageError';
}
class WalletSignTransactionError extends WalletError {
    name = 'WalletSignTransactionError';
}
class WalletRequestViewKeyError extends WalletError {
    name = 'WalletRequestViewKeyError';
}
class WalletTimeoutError extends WalletError {
    name = 'WalletTimeoutError';
}
class WalletWindowBlockedError extends WalletError {
    name = 'WalletWindowBlockedError';
}
class WalletWindowClosedError extends WalletError {
    name = 'WalletWindowClosedError';
}
class WalletDecryptionNotAllowedError extends WalletError {
    name = 'WalletDecryptionNotAllowedError';
}
class WalletDecryptionError extends WalletError {
    name = 'WalletDecryptionError';
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseMessageSignerWalletAdapter": () => (/* reexport safe */ _signer__WEBPACK_IMPORTED_MODULE_2__.BaseMessageSignerWalletAdapter),
/* harmony export */   "BaseSignerWalletAdapter": () => (/* reexport safe */ _signer__WEBPACK_IMPORTED_MODULE_2__.BaseSignerWalletAdapter),
/* harmony export */   "BaseWalletAdapter": () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter),
/* harmony export */   "DecryptPermission": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.DecryptPermission),
/* harmony export */   "EventEmitter": () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter),
/* harmony export */   "WalletAccountError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError),
/* harmony export */   "WalletAdapterNetwork": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork),
/* harmony export */   "WalletConfigError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletConfigError),
/* harmony export */   "WalletConnectionError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletConnectionError),
/* harmony export */   "WalletDecryptionError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDecryptionError),
/* harmony export */   "WalletDecryptionNotAllowedError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDecryptionNotAllowedError),
/* harmony export */   "WalletDisconnectedError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectedError),
/* harmony export */   "WalletDisconnectionError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectionError),
/* harmony export */   "WalletError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletError),
/* harmony export */   "WalletKeypairError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletKeypairError),
/* harmony export */   "WalletLoadError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletLoadError),
/* harmony export */   "WalletNotConnectedError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError),
/* harmony export */   "WalletNotReadyError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotReadyError),
/* harmony export */   "WalletNotSelectedError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError),
/* harmony export */   "WalletPublicKeyError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletPublicKeyError),
/* harmony export */   "WalletReadyState": () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState),
/* harmony export */   "WalletRequestViewKeyError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletRequestViewKeyError),
/* harmony export */   "WalletSendTransactionError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSendTransactionError),
/* harmony export */   "WalletSignMessageError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSignMessageError),
/* harmony export */   "WalletSignTransactionError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSignTransactionError),
/* harmony export */   "WalletTimeoutError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletTimeoutError),
/* harmony export */   "WalletWindowBlockedError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletWindowBlockedError),
/* harmony export */   "WalletWindowClosedError": () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletWindowClosedError),
/* harmony export */   "scopePollingDetectionStrategy": () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js");
/* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signer */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseMessageSignerWalletAdapter": () => (/* binding */ BaseMessageSignerWalletAdapter),
/* harmony export */   "BaseSignerWalletAdapter": () => (/* binding */ BaseSignerWalletAdapter)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js");

class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter {
    signTransaction(transaction) {
        throw new Error('Method not implemented.');
    }
    signAllTransactions(transactions) {
        throw new Error('Method not implemented.');
    }
}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {
}
//# sourceMappingURL=signer.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecryptPermission": () => (/* binding */ DecryptPermission),
/* harmony export */   "WalletAdapterNetwork": () => (/* binding */ WalletAdapterNetwork)
/* harmony export */ });
var WalletAdapterNetwork;
(function (WalletAdapterNetwork) {
    WalletAdapterNetwork["Mainnet"] = "mainnet";
    WalletAdapterNetwork["Testnet"] = "testnet3";
    WalletAdapterNetwork["Localnet"] = "localnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));
;
var DecryptPermission;
(function (DecryptPermission) {
    DecryptPermission["NoDecrypt"] = "NO_DECRYPT";
    DecryptPermission["UponRequest"] = "DECRYPT_UPON_REQUEST";
    DecryptPermission["AutoDecrypt"] = "AUTO_DECRYPT";
    DecryptPermission["ViewKeyAccess"] = "VIEW_KEY_ACCESS"; // The App gets the View Key of the connected wallet
})(DecryptPermission || (DecryptPermission = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/***/ ((module) => {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./adapter.ts":
/*!********************!*\
  !*** ./adapter.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeoWalletAdapter": () => (/* binding */ LeoWalletAdapter),
/* harmony export */   "LeoWalletName": () => (/* binding */ LeoWalletName)
/* harmony export */ });
/* harmony import */ var _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @demox-labs/aleo-wallet-adapter-base */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js");

const LeoWalletName = 'Leo Wallet';
class LeoWalletAdapter extends _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseMessageSignerWalletAdapter {
    name = LeoWalletName;
    url = 'https://leo.app/download';
    icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII=';
    supportedTransactionVersions = null;
    _connecting;
    _wallet;
    _publicKey;
    _decryptPermission;
    _viewKey;
    _readyState = typeof window === 'undefined' || typeof document === 'undefined'
        ? _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Unsupported
        : _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.NotDetected;
    constructor({ appName = 'sample' } = {}) {
        super();
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        this._decryptPermission = _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt;
        this._viewKey = null;
        if (this._readyState !== _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Unsupported) {
            (0,_demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy)(() => {
                if (window?.leo) {
                    this._readyState = _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    return true;
                }
                return false;
            });
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get viewKey() {
        return this._viewKey;
    }
    get decryptPermission() {
        return this._decryptPermission;
    }
    get connecting() {
        return this._connecting;
    }
    get readyState() {
        return this._readyState;
    }
    set readyState(readyState) {
        this._readyState = readyState;
    }
    async decrypt(cipherText) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            switch (this._decryptPermission) {
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt:
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionNotAllowedError();
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.UponRequest:
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.AutoDecrypt:
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.ViewKeyAccess:
                    {
                        try {
                            const text = await wallet.decrypt(cipherText);
                            return text.text;
                        }
                        catch (error) {
                            throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionError(error?.message, error);
                        }
                    }
                default:
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionError();
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async connect(decryptPermission, network) {
        try {
            if (this.connected || this.connecting)
                return;
            if (this._readyState !== _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotReadyError();
            this._connecting = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.leo;
            try {
                await wallet.connect(decryptPermission, network);
                if (!wallet?.publicKey) {
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError();
                }
                this._publicKey = wallet.publicKey;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(error?.message, error);
            }
            this._wallet = wallet;
            this._decryptPermission = decryptPermission;
            this._viewKey = this._viewKey;
            this.emit('connect', this._publicKey);
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
        finally {
            this._connecting = false;
        }
    }
    async disconnect() {
        const wallet = this._wallet;
        if (wallet) {
            // wallet.off('disconnect', this._disconnected);
            this._wallet = null;
            this._publicKey = null;
            try {
                await wallet.disconnect();
            }
            catch (error) {
                this.emit('error', new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(error?.message, error));
            }
        }
        this.emit('disconnect');
    }
    async signMessage(message) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const signature = await wallet.signMessage(message);
                return signature.signature;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestViewKey() {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const viewKey = await wallet.requestViewKey();
                return viewKey.viewKey;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletRequestViewKeyError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeoWalletAdapter": () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.LeoWalletAdapter),
/* harmony export */   "LeoWalletName": () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.LeoWalletName)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./adapter.ts");


})();

var __webpack_exports__LeoWalletAdapter = __webpack_exports__.LeoWalletAdapter;
var __webpack_exports__LeoWalletName = __webpack_exports__.LeoWalletName;
export { __webpack_exports__LeoWalletAdapter as LeoWalletAdapter, __webpack_exports__LeoWalletName as LeoWalletName };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlEO1NBQ0o7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQixNQUFNLEtBQUssQ0FBQztTQUNmO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7O1NDak9EO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7O1NBRUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxpQ0FBaUMsV0FBVztVQUM1QztVQUNBOzs7OztVQ1BBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3QvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3Qvc2lnbmVyLmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vbm9kZV9tb2R1bGVzL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9kaXN0L3R5cGVzLmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9hZGFwdGVyLnRzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XG4vKipcbiAqIEEgd2FsbGV0J3MgcmVhZGluZXNzIGRlc2NyaWJlcyBhIHNlcmllcyBvZiBzdGF0ZXMgdGhhdCB0aGUgd2FsbGV0IGNhbiBiZSBpbixcbiAqIGRlcGVuZGluZyBvbiB3aGF0IGtpbmQgb2Ygd2FsbGV0IGl0IGlzLiBBbiBpbnN0YWxsYWJsZSB3YWxsZXQgKGVnLiBhIGJyb3dzZXJcbiAqIGV4dGVuc2lvbiBsaWtlIFBoYW50b20pIG1pZ2h0IGJlIGBJbnN0YWxsZWRgIGlmIHdlJ3ZlIGZvdW5kIHRoZSBQaGFudG9tIEFQSVxuICogaW4gdGhlIGdsb2JhbCBzY29wZSwgb3IgYE5vdERldGVjdGVkYCBvdGhlcndpc2UuIEEgbG9hZGFibGUsIHplcm8taW5zdGFsbFxuICogcnVudGltZSAoZWcuIFRvcnVzIFdhbGxldCkgbWlnaHQgc2ltcGx5IHNpZ25hbCB0aGF0IGl0J3MgYExvYWRhYmxlYC4gVXNlIHRoaXNcbiAqIG1ldGFkYXRhIHRvIHBlcnNvbmFsaXplIHRoZSB3YWxsZXQgbGlzdCBmb3IgZWFjaCB1c2VyIChlZy4gdG8gc2hvdyB0aGVpclxuICogaW5zdGFsbGVkIHdhbGxldHMgZmlyc3QpLlxuICovXG5leHBvcnQgdmFyIFdhbGxldFJlYWR5U3RhdGU7XG4oZnVuY3Rpb24gKFdhbGxldFJlYWR5U3RhdGUpIHtcbiAgICAvKipcbiAgICAgKiBVc2VyLWluc3RhbGxhYmxlIHdhbGxldHMgY2FuIHR5cGljYWxseSBiZSBkZXRlY3RlZCBieSBzY2FubmluZyBmb3IgYW4gQVBJXG4gICAgICogdGhhdCB0aGV5J3ZlIGluamVjdGVkIGludG8gdGhlIGdsb2JhbCBjb250ZXh0LiBJZiBzdWNoIGFuIEFQSSBpcyBwcmVzZW50LFxuICAgICAqIHdlIGNvbnNpZGVyIHRoZSB3YWxsZXQgdG8gaGF2ZSBiZWVuIGluc3RhbGxlZC5cbiAgICAgKi9cbiAgICBXYWxsZXRSZWFkeVN0YXRlW1wiSW5zdGFsbGVkXCJdID0gXCJJbnN0YWxsZWRcIjtcbiAgICBXYWxsZXRSZWFkeVN0YXRlW1wiTm90RGV0ZWN0ZWRcIl0gPSBcIk5vdERldGVjdGVkXCI7XG4gICAgLyoqXG4gICAgICogTG9hZGFibGUgd2FsbGV0cyBhcmUgYWx3YXlzIGF2YWlsYWJsZSB0byB5b3UuIFNpbmNlIHlvdSBjYW4gbG9hZCB0aGVtIGF0XG4gICAgICogYW55IHRpbWUsIGl0J3MgbWVhbmluZ2xlc3MgdG8gc2F5IHRoYXQgdGhleSBoYXZlIGJlZW4gZGV0ZWN0ZWQuXG4gICAgICovXG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIkxvYWRhYmxlXCJdID0gXCJMb2FkYWJsZVwiO1xuICAgIC8qKlxuICAgICAqIElmIGEgd2FsbGV0IGlzIG5vdCBzdXBwb3J0ZWQgb24gYSBnaXZlbiBwbGF0Zm9ybSAoZWcuIHNlcnZlci1yZW5kZXJpbmcsIG9yXG4gICAgICogbW9iaWxlKSB0aGVuIGl0IHdpbGwgc3RheSBpbiB0aGUgYFVuc3VwcG9ydGVkYCBzdGF0ZS5cbiAgICAgKi9cbiAgICBXYWxsZXRSZWFkeVN0YXRlW1wiVW5zdXBwb3J0ZWRcIl0gPSBcIlVuc3VwcG9ydGVkXCI7XG59KShXYWxsZXRSZWFkeVN0YXRlIHx8IChXYWxsZXRSZWFkeVN0YXRlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBCYXNlV2FsbGV0QWRhcHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgZ2V0IGNvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5wdWJsaWNLZXk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5KGRldGVjdCkge1xuICAgIC8vIEVhcmx5IHJldHVybiB3aGVuIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZGlzcG9zZXJzID0gW107XG4gICAgZnVuY3Rpb24gZGV0ZWN0QW5kRGlzcG9zZSgpIHtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWQgPSBkZXRlY3QoKTtcbiAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRpc3Bvc2Ugb2YgZGlzcG9zZXJzKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFN0cmF0ZWd5ICMxOiBUcnkgZGV0ZWN0aW5nIGV2ZXJ5IHNlY29uZC5cbiAgICBjb25zdCBpbnRlcnZhbCA9IFxuICAgIC8vIFRPRE86ICMzMzQgUmVwbGFjZSB3aXRoIGlkbGUgY2FsbGJhY2sgc3RyYXRlZ3kuXG4gICAgc2V0SW50ZXJ2YWwoZGV0ZWN0QW5kRGlzcG9zZSwgMTAwMCk7XG4gICAgZGlzcG9zZXJzLnB1c2goKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCkpO1xuICAgIC8vIFN0cmF0ZWd5ICMyOiBEZXRlY3QgYXMgc29vbiBhcyB0aGUgRE9NIGJlY29tZXMgJ3JlYWR5Jy8naW50ZXJhY3RpdmUnLlxuICAgIGlmIChcbiAgICAvLyBJbXBsaWVzIHRoYXQgYERPTUNvbnRlbnRMb2FkZWRgIGhhcyBub3QgeWV0IGZpcmVkLlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGV0ZWN0QW5kRGlzcG9zZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBkaXNwb3NlcnMucHVzaCgoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGV0ZWN0QW5kRGlzcG9zZSkpO1xuICAgIH1cbiAgICAvLyBTdHJhdGVneSAjMzogRGV0ZWN0IGFmdGVyIHRoZSBgd2luZG93YCBoYXMgZnVsbHkgbG9hZGVkLlxuICAgIGlmIChcbiAgICAvLyBJZiB0aGUgYGNvbXBsZXRlYCBzdGF0ZSBoYXMgYmVlbiByZWFjaGVkLCB3ZSdyZSB0b28gbGF0ZS5cbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZGV0ZWN0QW5kRGlzcG9zZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBkaXNwb3NlcnMucHVzaCgoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRldGVjdEFuZERpc3Bvc2UpKTtcbiAgICB9XG4gICAgLy8gU3RyYXRlZ3kgIzQ6IERldGVjdCBzeW5jaHJvbm91c2x5LCBub3cuXG4gICAgZGV0ZWN0QW5kRGlzcG9zZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZXJyb3I7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0TG9hZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0TG9hZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25maWdFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldENvbmZpZ0Vycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRDb25uZWN0aW9uRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXROb3RTZWxlY3RlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldERpc2Nvbm5lY3RlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldEFjY291bnRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldEFjY291bnRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0UHVibGljS2V5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRQdWJsaWNLZXlFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0S2V5cGFpckVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0S2V5cGFpckVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTaWduTWVzc2FnZUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0UmVxdWVzdFZpZXdLZXlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFJlcXVlc3RWaWV3S2V5RXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldFRpbWVvdXRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFRpbWVvdXRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0V2luZG93QmxvY2tlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFdpbmRvd0Nsb3NlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREZWNyeXB0aW9uTm90QWxsb3dlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGVjcnlwdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGVjcnlwdGlvbkVycm9yJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWduZXInO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlV2FsbGV0QWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcic7XG5leHBvcnQgY2xhc3MgQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlV2FsbGV0QWRhcHRlciB7XG4gICAgc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgc2lnbkFsbFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlU2lnbmVyV2FsbGV0QWRhcHRlciB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduZXIuanMubWFwIiwiZXhwb3J0IHZhciBXYWxsZXRBZGFwdGVyTmV0d29yaztcbihmdW5jdGlvbiAoV2FsbGV0QWRhcHRlck5ldHdvcmspIHtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIk1haW5uZXRcIl0gPSBcIm1haW5uZXRcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIlRlc3RuZXRcIl0gPSBcInRlc3RuZXQzXCI7XG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmtbXCJMb2NhbG5ldFwiXSA9IFwibG9jYWxuZXRcIjtcbn0pKFdhbGxldEFkYXB0ZXJOZXR3b3JrIHx8IChXYWxsZXRBZGFwdGVyTmV0d29yayA9IHt9KSk7XG47XG5leHBvcnQgdmFyIERlY3J5cHRQZXJtaXNzaW9uO1xuKGZ1bmN0aW9uIChEZWNyeXB0UGVybWlzc2lvbikge1xuICAgIERlY3J5cHRQZXJtaXNzaW9uW1wiTm9EZWNyeXB0XCJdID0gXCJOT19ERUNSWVBUXCI7XG4gICAgRGVjcnlwdFBlcm1pc3Npb25bXCJVcG9uUmVxdWVzdFwiXSA9IFwiREVDUllQVF9VUE9OX1JFUVVFU1RcIjtcbiAgICBEZWNyeXB0UGVybWlzc2lvbltcIkF1dG9EZWNyeXB0XCJdID0gXCJBVVRPX0RFQ1JZUFRcIjtcbiAgICBEZWNyeXB0UGVybWlzc2lvbltcIlZpZXdLZXlBY2Nlc3NcIl0gPSBcIlZJRVdfS0VZX0FDQ0VTU1wiOyAvLyBUaGUgQXBwIGdldHMgdGhlIFZpZXcgS2V5IG9mIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG59KShEZWNyeXB0UGVybWlzc2lvbiB8fCAoRGVjcnlwdFBlcm1pc3Npb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiaW1wb3J0IHtcbiAgICBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5LFxuICAgIFdhbGxldEFjY291bnRFcnJvcixcbiAgICBXYWxsZXRDb25uZWN0aW9uRXJyb3IsXG4gICAgV2FsbGV0UmVxdWVzdFZpZXdLZXlFcnJvcixcbiAgICBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IsXG4gICAgV2FsbGV0TmFtZSxcbiAgICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcbiAgICBXYWxsZXROb3RSZWFkeUVycm9yLFxuICAgIFdhbGxldFJlYWR5U3RhdGUsXG4gICAgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IsXG4gICAgV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvcixcbiAgICBXYWxsZXREZWNyeXB0aW9uRXJyb3IsXG4gICAgRGVjcnlwdFBlcm1pc3Npb24sXG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmssXG59IGZyb20gJ0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVvV2FsbGV0RXZlbnRzIHtcbiAgICBjb25uZWN0KC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd247XG4gICAgZGlzY29ubmVjdCguLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlb1dhbGxldCBleHRlbmRzIEV2ZW50RW1pdHRlcjxMZW9XYWxsZXRFdmVudHM+IHtcbiAgICBwdWJsaWNLZXk/OiBzdHJpbmc7XG4gICAgdmlld0tleT86IHN0cmluZztcbiAgICBzaWduVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IGFueSk6IFByb21pc2U8YW55PjtcbiAgICBzaWduQWxsVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9uczogYW55W10pOiBQcm9taXNlPGFueVtdPjtcbiAgICBzaWduQW5kU2VuZFRyYW5zYWN0aW9uKFxuICAgICAgICB0cmFuc2FjdGlvbjogYW55LFxuICAgICAgICBvcHRpb25zPzogYW55XG4gICAgKTogUHJvbWlzZTx7IHNpZ25hdHVyZTogYW55IH0+O1xuICAgIHNpZ25NZXNzYWdlKG1lc3NhZ2U6IFVpbnQ4QXJyYXkpOiBQcm9taXNlPHsgc2lnbmF0dXJlOiBVaW50OEFycmF5IH0+O1xuICAgIHJlcXVlc3RWaWV3S2V5KCk6IFByb21pc2U8eyB2aWV3S2V5OiBzdHJpbmcgfT47XG4gICAgZGVjcnlwdChjaXBoZXJUZXh0OiBzdHJpbmcpOiBQcm9taXNlPHsgdGV4dDogc3RyaW5nIH0+LCBcbiAgICBjb25uZWN0KGRlY3J5cHRQZXJtaXNzaW9uOiBEZWNyeXB0UGVybWlzc2lvbiwgbmV0d29yazogV2FsbGV0QWRhcHRlck5ldHdvcmspOiBQcm9taXNlPHZvaWQ+O1xuICAgIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZW9XaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICAgIGxlbz86IExlb1dhbGxldDtcbn1cblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IExlb1dpbmRvdztcblxuZXhwb3J0IGludGVyZmFjZSBMZW9XYWxsZXRBZGFwdGVyQ29uZmlnIHtcbiAgICBhcHBOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBMZW9XYWxsZXROYW1lID0gJ0xlbyBXYWxsZXQnIGFzIFdhbGxldE5hbWU8J0xlbyBXYWxsZXQnPjtcblxuZXhwb3J0IGNsYXNzIExlb1dhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIge1xuICAgIG5hbWUgPSBMZW9XYWxsZXROYW1lO1xuICAgIHVybCA9ICdodHRwczovL2xlby5hcHAvZG93bmxvYWQnO1xuICAgIGljb24gPVxuICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FJQUFBQk1YUGFjQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURrdU1DMWpNREF3SURjNUxqRTNNV015TjJaaFlpd2dNakF5TWk4d09DOHhOaTB5TWpvek5UbzBNU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREkwTGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSkVSakkxTjBNM05VRkVSakV4UlVRNE9Ua3lSRGt3TmpRd09ERkdNalV3SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pKRVJqSTFOME00TlVGRVJqRXhSVVE0T1RreVJEa3dOalF3T0RGR01qVXdJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TWtSR01qVTNRelUxUVVSR01URkZSRGc1T1RKRU9UQTJOREE0TVVZeU5UQWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNa1JHTWpVM1F6WTFRVVJHTVRGRlJEZzVPVEpFT1RBMk5EQTRNVVl5TlRBaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N1p5TTU5QUFBQ3owbEVRVlI0MnV6ZFQydlRZQURIOGQrVHBvM29ZZXBoNGc0aUU2Ym9aVjY4aWRLRGlIajFzcHQ3QllMNERnVGZnS0RnVGR4WnI0SlhENExDUk1HTGdodFVHUGdIcGJXbWFSdVRzV09UT3Bma3laNSt2K3hXbHJUNWRFK2V3SlBGckxSamtiMDhEZ0VBQUJBQUFCQUFBRkQxK1RtdnhiRkdRNVZ4bWRCb3lNdW1UM1k2ZHVqaXhQZGx6TzRCa3FQdk56Vi9QTytYLzd2dUwvVzZrN2VjN1Bmb3ZJTEFIWUFmM3pRSU13OWpKc0J3cUdNTHV2Y29CU3k4dFlkNnRxYURoeWE4RkEyMGVrdkxGOXdCdUh0Yjc5OG9PTEQ3SVNoQmF3VjVZOFZlaHFDY21zMzBqOCtkMDZ5M2g1UHdlRnpLZTRwakN6dTFWZjZIWlJiRU5CUUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQW1nR0FyR1dVVHViWDdRMDFmRDEvcXZWWFUxYjBGVnMwMEtrenVuZ0ZnTzExdXk5ZmFEU3FkS2Y5bnRyWEFiQTNCQmxqYmR6akpNeEpHQUFDQUFBQ1lEYXI0elEwdVN3cTR6WXg0Nm5WQW1CYXcwZzNWclY0dXZndGIzWDA1TUhPckIrQXpKTHYvdGxsblR0Zi9KYS9iTzRBY0E2WTBpQXNaYlBoSDA3Q0JBQUFCQUFBQkFBQUJBQUFCQUFBQUJBQUFCQUFBQkFBQUJBQUFCQUFBQkFBQUJBQUFGaXBwTWRuTkZ0MUJLamQybEJqMGtXY2M0Y0xmbnFUa1RvYkFQemI5L1R4L1JKMUFaaGVlYmRvQTdCZkR4T3pJQUFJQUFBSUFPZXlNd3VLSXZWL3k2dDJ0bU84T3Y0cktEc0FpMHU2ZExYU3c1Rlk5N3I2OEJhQTdTNWZTMzhxcnJPaE96ZHJkNTB4UStlQWt1NStCWUJaRUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUd3cndCY3VsdW9ucC9GeTMvSGpZWkQzN1hjejJJOE8vQm1wVDM1bnNRNFZoRG81Skk3ZndSaFg1OC9UbjVwUE5iY0VTMmNLR1cvbTUvU2hkbGVCckNmNHhhR2V2ZmFvU0VvK3pGV3lkSDUrVjFmdDByWmI3T1ZlZlNWdnp6ZDRrTmVyUXhRZ1kzeGxsa1EwMUFBQ0FBQUNBQUF5RUovQlJnQUpwaDVJUDFYRnB3QUFBQUFTVVZPUks1Q1lJST0nO1xuICAgIHJlYWRvbmx5IHN1cHBvcnRlZFRyYW5zYWN0aW9uVmVyc2lvbnMgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfY29ubmVjdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF93YWxsZXQ6IExlb1dhbGxldCB8IG51bGw7XG4gICAgcHJpdmF0ZSBfcHVibGljS2V5OiBzdHJpbmcgfCBudWxsO1xuICAgIHByaXZhdGUgX2RlY3J5cHRQZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmlld0tleTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcml2YXRlIF9yZWFkeVN0YXRlOiBXYWxsZXRSZWFkeVN0YXRlID1cbiAgICAgICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBXYWxsZXRSZWFkeVN0YXRlLlVuc3VwcG9ydGVkXG4gICAgICAgICAgICA6IFdhbGxldFJlYWR5U3RhdGUuTm90RGV0ZWN0ZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGFwcE5hbWUgPSAnc2FtcGxlJ30gOiBMZW9XYWxsZXRBZGFwdGVyQ29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICB0aGlzLl9kZWNyeXB0UGVybWlzc2lvbiA9IERlY3J5cHRQZXJtaXNzaW9uLk5vRGVjcnlwdDtcbiAgICAgICAgdGhpcy5fdmlld0tleSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Py5sZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdhbGxldFJlYWR5U3RhdGUuSW5zdGFsbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlYWR5U3RhdGVDaGFuZ2UnLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1YmxpY0tleTtcbiAgICB9XG5cbiAgICBnZXQgdmlld0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdLZXk7XG4gICAgfVxuXG4gICAgZ2V0IGRlY3J5cHRQZXJtaXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVjcnlwdFBlcm1pc3Npb247XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cblxuICAgIGdldCByZWFkeVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgcmVhZHlTdGF0ZShyZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY3J5cHQoY2lwaGVyVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9kZWNyeXB0UGVybWlzc2lvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgRGVjcnlwdFBlcm1pc3Npb24uTm9EZWNyeXB0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvcigpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZWNyeXB0UGVybWlzc2lvbi5VcG9uUmVxdWVzdDpcbiAgICAgICAgICAgICAgICBjYXNlIERlY3J5cHRQZXJtaXNzaW9uLkF1dG9EZWNyeXB0OlxuICAgICAgICAgICAgICAgIGNhc2UgRGVjcnlwdFBlcm1pc3Npb24uVmlld0tleUFjY2VzczpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgd2FsbGV0LmRlY3J5cHQoY2lwaGVyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0RGVjcnlwdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldERlY3J5cHRpb25FcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjb25uZWN0KGRlY3J5cHRQZXJtaXNzaW9uOiBEZWNyeXB0UGVybWlzc2lvbiwgbmV0d29yazogV2FsbGV0QWRhcHRlck5ldHdvcmspOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVN0YXRlICE9PSBXYWxsZXRSZWFkeVN0YXRlLkluc3RhbGxlZCkgdGhyb3cgbmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKTtcblxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB3aW5kb3cubGVvITtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3YWxsZXQuY29ubmVjdChkZWNyeXB0UGVybWlzc2lvbiwgbmV0d29yayk7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQ/LnB1YmxpY0tleSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Q29ubmVjdGlvbkVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IHdhbGxldC5wdWJsaWNLZXkhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gd2FsbGV0O1xuICAgICAgICAgICAgdGhpcy5fZGVjcnlwdFBlcm1pc3Npb24gPSBkZWNyeXB0UGVybWlzc2lvbjtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdLZXkgPSB0aGlzLl92aWV3S2V5O1xuXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnLCB0aGlzLl9wdWJsaWNLZXkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBkaXNjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgIGlmICh3YWxsZXQpIHtcbiAgICAgICAgICAgIC8vIHdhbGxldC5vZmYoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuXG4gICAgICAgICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3YWxsZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2lnbk1lc3NhZ2UobWVzc2FnZTogVWludDhBcnJheSk6IFByb21pc2U8VWludDhBcnJheT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCB3YWxsZXQuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25hdHVyZS5zaWduYXR1cmU7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RWaWV3S2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdLZXkgPSBhd2FpdCB3YWxsZXQucmVxdWVzdFZpZXdLZXkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlld0tleS52aWV3S2V5O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRSZXF1ZXN0Vmlld0tleUVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=