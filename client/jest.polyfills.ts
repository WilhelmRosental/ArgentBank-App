/**
 * @note The block below contains polyfills for Node.js globals
 * required for Jest to function when running JSDOM tests.
 * These HAVE to be require's and HAVE to be in this exact
 * order.
 *
 * Consider migrating to a more modern test runner if
 * you don't want to deal with this.
 */

// Import the necessary polyfills
require("whatwg-fetch"); // Polyfill for fetch, Headers, Request, Response
const { TextDecoder, TextEncoder, ReadableStream } = require("util");
const { Blob } = require("buffer"); // Node.js native Blob polyfill

// Define global properties for TextDecoder, TextEncoder, ReadableStream
Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder, writable: true, configurable: true },
  TextEncoder: { value: TextEncoder, writable: true, configurable: true },
  ReadableStream: { value: ReadableStream, writable: true, configurable: true },
});

// Define global properties for Blob
Object.defineProperties(globalThis, {
  Blob: { value: Blob, writable: true, configurable: true },
});

// Note: whatwg-fetch already provides fetch, Headers, FormData, Request, and Response globally.