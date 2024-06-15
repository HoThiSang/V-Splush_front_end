import styled from "styled-components";
const StyleLink=styled.a`

${props => props.className};
color: ${props=> props.color || 'black'}; 
padding: ${props => props.size || '6px 12px 6px 12px'};
`
const StyleButton=styled.button`
  border-radius: 5px;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '40px'};

`

function Button({title,href,onClick,className,color,size,width,height}){
    let Component = StyleButton;
    const props={}
    if(href && className ==='btn btn-outline-success'){
        Component= StyleLink;
        props.href=href
    }
    if(onClick){
        props.onClick=onClick
    }
  
    return (
        <>
            <Component className={`btn ${className}`} color={color} size={size} 
            {...props} width={width} height= {height}>{title}</Component>
        </>
    );
}

export  default Button;

