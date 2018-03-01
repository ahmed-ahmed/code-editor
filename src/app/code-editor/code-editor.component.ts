import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  private editorOptions = 
  {
    theme: 'vs-dark', 
    language: 'javascript'
  };

  private code: string= 'function x() {\nconsole.log("Hello world!");\n}';


  constructor() { }

  ngOnInit() {
   
    // require.config({ paths: { 'vs': 'monaco-editor/min/vs' }});
    // require(['vs/editor/editor.main'], function() {
    //   var editor = monaco.editor.create(document.getElementById('container'), {
    //     value: [
    //       'function x() {',
    //       '\tconsole.log("Hello world!");',
    //       '}'
    //     ].join('\n'),
    //     language: 'javascript'
    //   });
    // });
  

    // var editor = monaco;
    
    // .editor.create(document.getElementById('container'), {
		// 	value: [
		// 		'function x() {',
		// 		'\tconsole.log("Hello world!");',
		// 		'}'
		// 	].join('\n'),
		// 	language: 'javascript'
		// });



  }

}
// https://github.com/atularen/ngx-monaco-editor