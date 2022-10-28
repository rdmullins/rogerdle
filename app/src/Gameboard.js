function Gameboard() {

    let gridRow = [];

    for (let j=1; j<=6; j++) {
        gridRow.push(<div className="col-2 display-5 text-center bg-dark g-2 text-light">{j}</div>);
    };
    
    let grid = [];

    for (let i=1; i<=6; i++) {
        grid.push(<div className="row">{gridRow}</div>);
    }
   console.log(grid);

    return (
        <div className="row">
            {grid}
        </div>
    )
};

export default Gameboard;