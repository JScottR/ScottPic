import React from "react";

function GalleryView(props) {

    const id = props.match.params.id;

    if(!id){
        return(<div>
            Gallery Not Found
        </div>)
    }
    return (
        <div>
            <p>Gallery id= {id}</p>
        </div>

    )
};

export default GalleryView;