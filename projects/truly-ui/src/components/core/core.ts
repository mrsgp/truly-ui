/*
    MIT License

    Copyright (c) 2018 Temainfo Software

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
*/

import { Component, ViewEncapsulation, ApplicationRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'tl-core',
    template: '<span></span>',
    styleUrls: ['./styles/theming/_all-theme.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TlCore {
  private theme = 'default';

  constructor(private app: ApplicationRef, private renderer: Renderer2) {}

  setTheme(theme) {
    setTimeout(() => {
      this.theme = `tl-${theme}-theme`;
      if (this.app.components.length ) {
        this.renderer.addClass(this.app.components[0].location.nativeElement, this.theme);
      }
    }, 200);
  }
}