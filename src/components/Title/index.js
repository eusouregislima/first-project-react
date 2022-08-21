import React from "react";

import {H1} from "./styles";

function Title({children}){ //usando o props
    return <H1>{children}</H1>;    
}

export default Title;