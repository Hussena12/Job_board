import React from "react";
import {
  HtmlEditor,
  Toolbar,
  RichTextEditorComponent,
  Image,
  Link,
  QuickToolbar,
  Inject,
} from "@syncfusion/ej2-react-richtexteditor";

const TextEditor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-24 bg-white rounded-3xl">
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default TextEditor;
