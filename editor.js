function savePSCA(){

    const code = document.getElementById("code").value;

    const file = new Blob(
        [code],
        {type:"text/plain"}
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download = "main.psca";

    link.click();
}
