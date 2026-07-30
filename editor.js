
function savePSCA(){

    const code = document.getElementById("code").value;

    const file = new Blob(
        [code],
        { type: "application/octet-stream" }
    );

    const url = URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = url;
    link.download = "program.psca";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
}
