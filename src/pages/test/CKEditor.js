import React, { useEffect, useState } from "react";
import "./test.scss";
function CKEditor() {
  const [editorData, setEditorData] = useState("");
  useEffect(() => {
    window.CKEDITOR.replace("editor1", {
      // Configuration options
      toolbarGroups: [
        { name: "clipboard", groups: ["clipboard", "undo"] },
        { name: "editing", groups: ["find", "selection"] },
        { name: "document", groups: ["mode", "document"] },
        { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
        //{ name: 'links', groups: [ 'Link', 'Unlink', 'Anchor' ] },
        {
          name: "paragraph",
          groups: ["list", "indent", "blocks", "align"],
        },
        { name: "colors" },
        { name: "styles" },
        { name: "insert", groups: ["Table"] },
      ],
      format_tags: "p;h1;h2;h3",
      removeButtons:
        "Subscript,Superscript,Strike,CreateDiv,Source,Replace,Blockquote,PasteFromWord,Image,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe",
      removeDialogTabs: "image:advanced;link:advanced",
      removePlugins: "resize,bottomarea",
    });

    // When CKEditor is fully initialized
    window.CKEDITOR.on("instanceReady", function (evt) {
      // Add Spell checker config data
      window.WEBSPELLCHECKER_CONFIG = {
        autoSearch: true,
        autoDestroy: true,
        autocorrect: true,
        autocomplete: true,
        enforceAI: true,
        serviceId: process.env.REACT_APP_SPELL_CHECKER_ID,
        serviceProtocol: "https",
        servicePort: "443",
        serviceHost: "svc.webspellchecker.net",
        servicePath: "api",
      };
      window.WEBSPELLCHECKER.init({
        container: document.querySelector("#cke_1_contents"),
      });

      // Get the CKEditor instance
      const editor = evt.editor;
      //To Set Data Initially
      editor.setData("<p>This is the initial content.</p>");

      // Bind a function to the 'change' event
      editor.on("change", function () {
        // Get the data/content from CKEditor
        const newData = editor.getData();
        setEditorData(newData);
      });
    });
  }, []);
  return (
    <div>
      <div name="editor1" id="editor"></div>
      <>{editorData}</>
      <div dangerouslySetInnerHTML={{ __html: editorData }} />
    </div>
  );
}

export default CKEditor;
