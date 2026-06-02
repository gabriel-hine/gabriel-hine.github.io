function saveContact() {
  // vCard 3.0 — broadly supported by iOS and Android contact apps
  var vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Hine;Gabriel;Emile;;Ph.D.",
    "FN:Gabriel Emile Hine",
    "TITLE:Iris Authentication Technical Owner",
    "ORG:Smart Eye",
    "EMAIL;TYPE=WORK,INTERNET:gabriel.hine@smarteye.ai",
    "EMAIL;TYPE=HOME,INTERNET:direct@gabrielhine.io",
    "URL:https://gabriel-hine.github.io/",
    "URL;TYPE=LinkedIn:https://www.linkedin.com/in/gabriel-emile-hine/",
    "END:VCARD"
  ].join("\r\n");

  var blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "gabriel-hine.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}