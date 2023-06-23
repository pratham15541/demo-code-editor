"use strict";
let languageCode = "";
let compilerArgs = "";
let program = "";
let langMode = "";

function cSetup() {
  (languageCode = "6"),
    (compilerArgs = "-Wall -std=gnu99 -O2 -o a.out source_file.c"),
    (program =
      '//gcc 7.4.0\n#include  <stdio.h>\n\nint main(void)\n{\n    printf("Hello, world!\\n");\n    return 0;\n}'),
    (langMode = "c_cpp"),
    updateLang();
}

function keyUp(e) {
  editor.session.insert(editor.getCursorPosition(), e);
}
const loader = document.querySelector(".lds-ring");
const output = document.querySelector("#opCont");
const input = document.querySelector("#inpCont");
const splashBG = document.querySelector("#splashBG");
let editor = ace.edit("editor");

function updateLang() {
  editor.session.setMode(`ace/mode/${langMode}`),
    editor.session.setValue(program);
}

function run() {
  if ((hideInp(), languageCode == 36)) {
    return (
      showSplash(),
      $("#opContH").show("slow"),
      (loader.style.display = "none"),
      void updateIframe()
    );
  }
  loader.style.display = "block";
  let e = $("#argument").val();
  e == "" && (e = compilerArgs);
  const t = {
    LanguageChoice: languageCode,
    Program: editor.session.getValue(),
    Input: $("#input").val(),
    CompilerArgs: compilerArgs,
  };
  $.ajax({
    url: `https://code-compiler.p.rapidapi.com/v2`,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '924fbcb425mshfa4604f39157b54p11c1dcjsncac13b87ab03',
    'X-RapidAPI-Host': 'code-compiler.p.rapidapi.com'
  },

    type: "POST",
    data: t,
  })
    .done((e) => {
      if (
        (showSplash(),
        $(output).show("slow"),
        (loader.style.display = "none"),
        e.Result != null)
      ) {
        switch (languageCode) {
          case 16:
          case 33:
          case 34:
          case 35:
            $("#output").html(e.Result);
            break;
          default:
            $("#output").text(e.Result);
        }
      } else $("#output").text("No Output");
      (e.Errors != null
        ? $("#error").text(e.Errors)
        : $("#error").text("No Errors"),
      e.Warnings != null
        ? $("#warning").text(+e.Warnings)
        : $("#warning").text("No Warnings"),
      e.Stats != null
        ? $("#status").text(e.Stats)
        : $("#status").text("No Status"),
      e.Files != null) &&
        (window.open().document.body.innerHTML = `<!DOCTYPE html><html lang="en" dir="ltr"><head><meta name="viewport" content="width=device-width"><meta charset="utf-8"><title>OUTPUT | PROGMAN</title><style media="screen">img{width:90%;display:block;margin:0 auto;}</style></head><body><img src="data:image/png;base64,${e.Files[0]}" alt=""></body></html>`);
    })
    .fail((e, t) => {
      showSplash(),
        $(output).show("slow"),
        (loader.style.display = "none"),
        $("#output").text(`fail ${JSON.stringify(e)} ${JSON.stringify(t)}`);
    });
}

function hideOp() {
  $(output).hide("slow"), $("#opContH").hide("slow"), hideSplash();
}

function hideInp() {
  $(input).hide("slow"), hideSplash();
}

function showInputBox() {
  $(input).show("slow"), $("#argument").val(compilerArgs), showSplash();
}

function showSplash() {
  $("#splashBG").fadeIn("slow");
}

function hideSplash() {
  $("#splashBG").fadeOut("slow"), $("#outputT").text("");
}

function splashClicked() {
  hideSplash(), hideInp(), hideOp();
}

function updateIframe() {
  const e = $("#outputT").contents().find("html");
  const t = editor.session.getValue();
  e.html(t);
}


function getThemes() {
  const theme = document.querySelector("#themeSelector").value;
  return editor.setTheme(`${theme}`)
}

editor.setTheme(`ace/theme/chrome`),
(document.getElementById('editor').style.fontSize = '14px'),
  $(document).ready(() => {
    const e = document.URL.split("#");
    const t = Number(e[e.length - 1]);
    t != null && t <= 47 && t >= 1
      ? (loadLang(t),
        $(`#langSelector option[value=${t}]`).attr("selected", "selected"))
      : loadLang(7),
      ace.require("ace/ext/language_tools"),
      editor.setOptions({
        enableBasicAutocompletion: !0,
        enableSnippets: !0,
        enableLiveAutocompletion: !0,
      });
  });
$("#langSelector").change(() => {
  loadLang(Number($("#langSelector option:selected").val())),
    window.location.replace(`#${$("#langSelector option:selected").val()}`),
    $("#argument").val(compilerArgs);
});
loader.style.display = "none";

function copyToClipboard(){
  navigator.clipboard.writeText(editor.session.getValue())
}


