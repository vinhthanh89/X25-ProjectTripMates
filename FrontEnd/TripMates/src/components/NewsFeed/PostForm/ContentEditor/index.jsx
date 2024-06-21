/* eslint-disable react/prop-types */

import { useState } from "react";

import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/align.min.js";

const ContentEditor = ({
  changeContent,
  model,
}) => {

  return (
    <div className="">
      <FroalaEditor
        model={model}
        onModelChange={(e) => changeContent(e)}
        config={{
          fontSize: ['8', '10', '12', '14', '18', '30', '44' , '60', '96'],
          placeholderText: "Write something in here",
          height: 300,
          heightMax: 700,
        }}
      />
    </div>
  );
};

export default ContentEditor;
