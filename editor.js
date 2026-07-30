function savePSCA(){

    const code = document.getElementById("code").value;

    let name = document.getElementById("fileName").value;

    if(name === ""){
        name = "main";
    }

    if(!name.endsWith(".psca")){
        name += ".psca";
    }


    const file = new Blob(
        [code],
        { type: "application/octet-stream" }
    );


    const url = URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = url;
    link.download = name;


    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


    URL.revokeObjectURL(url);
}
