function RanDiceGen(){
    const dicNumGen = Math.round(1+(6-1)*Math.random());
    let imgsLinkGen = `dice_imgs/dice${dicNumGen}.png`;
    document.querySelector("img").setAttribute("src",imgsLinkGen);

}