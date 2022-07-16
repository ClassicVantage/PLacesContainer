AFRAME.registerComponent("cursor-listener",{
schema:{
    selectItemId:{ default: "",type:"string"},
},
init:function(){
    this.handleMouseEnterEvents();

},
handlePlacesListState:function(){
    const id=this.el.getAttribute("id");
    const placesId=["taj-mahal","budapest","new-york","eiffel-tower"];
    if(placesId.includes(id)){
        const placesContainer=document.querySelection("#places-container");
        placesContainer.setAttribute("cursor-listener",{
            selectedItemId: id,
        });
        this.el.setAttribute("material",{
            color:"#D76B30",
            opacity:1,
        });
    }
},
handleMouseEnterEvents:function(){
    this.el.addEventListener("mouseenter", ()=>{
        this.handlePlacesListState();
    });
},
handleMouseLeaveEvents:function(){

},

});