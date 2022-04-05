import React from "react";

{/* Story 4: 
    When the 'Upload receipt'-button is clicked it changes its message to 'Choose a file' 
*/}

const FileButton = () => {
    
    const [msg,setCount] = React.useState('Upload receipt');

    const handleClick = () => {
        setCount('Choose a file')
    };
    return (
        <div>
                <button onClick={handleClick}>
                    {msg}
                    </button> 
        </div>
    );
};

export default FileButton;