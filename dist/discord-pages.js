"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/*
MIT License
Copyright (c) 2022 Moros0741

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-----------------------------------------------------------------------------
-----------------------------------------------------------------------------
// Compiling for both ejs and cjs
//https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html
*/
// Path: src\discord-pages.js.ts
const Paginator_1 = tslib_1.__importDefault(require("./Classes/Paginator"));
const Page_1 = tslib_1.__importDefault(require("./Classes/Page"));
const PaginatorTypes_1 = require("./Enums/PaginatorTypes");
const ComponentTypes_1 = require("./Enums/ComponentTypes");
exports.default = Paginator_1.default;
exports = Paginator_1.default, Page_1.default, PaginatorTypes_1.PaginatorTypes, ComponentTypes_1.ComponentTypes;
//# sourceMappingURL=discord-pages.js.map