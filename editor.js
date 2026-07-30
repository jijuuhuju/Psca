function savePSCA(){

    const code = document.getElementById("code").value;

    const file = new Blob(
        [code],
        { type: "text/plain" }
    );

    const url = URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = url;
    link.download = "program.psca.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 3000);
}
