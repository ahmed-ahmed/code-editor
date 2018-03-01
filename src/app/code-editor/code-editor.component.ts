import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @ViewChild('output') _output: ElementRef;
  editor: any;
  showMultiple = false;
  toggleLanguage = true;
  htmlOptions = {
    theme: 'vs', language: 'html'
  };

  jsOptions = {
    theme: 'vs', language: 'javascript'
  };


  private _htmlCode: string;

  get htmlCode(): string {
      return this._htmlCode;
  }

  set htmlCode(value: string) {
    this._htmlCode = value;
    var doc = this._output.nativeElement.contentWindow.document;
    doc.open();
    doc.write(value);
    doc.close();
    console.log(value);
  }


  private _jsCode;
  get jsCode() {
    return this._jsCode;
  }

  set jsCode(value) {
    this._jsCode = value;

    let document = this._output.nativeElement.contentWindow.document;

    var script = document.createElement('script');
    script.text = `try {
        ${value}
    } catch(error) {
      throw error;
    }`;
    document.body.appendChild(script);
  }

  ngOnInit() {
    this.htmlCode = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
    </head>
    <body>
      <h1>Hi man how are you</h1>
      <h2>I'm fine thanks</h2>
      <h3>Forget about it</h3>
    </body>
    </html>`;
  }



   

  private originalModel ={ language: 'html' ,
   

  updateOptions() {
  }
}
// https://github.com/atularen/ngx-monaco-editor