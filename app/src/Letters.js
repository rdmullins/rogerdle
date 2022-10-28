function Letters() {
    let row1String = "QWERTYUIOP";
    let row1Array = row1String.split("");
    let row2String = "ASDFGHJKL";
    let row2Array = row2String.split("");
    let row3String = "ZXCVBNM"
    let row3Array = row3String.split("");

    let row1Map = row1Array.map(letter => (
        <td key={letter}>{letter}</td>
    ));

    let row2Map = row2Array.map(letter => (
        <td key={letter}>{letter}</td>
    ));

    let row3Map = row3Array.map(letter => (
        <td key={letter}>{letter}</td>
    ));

    console.log(row1Array);
    console.log(row2Array);
    console.log(row3Array);

    console.log(row1Map);
    console.log(row2Map);
    console.log(row3Map);

    return (
        <table className="table table-border text-light p-3">
            <tbody>
            <tr>
                {row1Map}
            </tr>
            <tr>
                {row2Map}
            </tr>
            <tr>
                {row3Map}
            </tr>
            </tbody>
        </table>
    )
};

export default Letters;