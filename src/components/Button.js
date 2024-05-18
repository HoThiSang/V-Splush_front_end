// note chỉ nhập class dạng : btn btn-outline-success or btn btn-primary
function Button({title,href,onClick,className}){
    let Component ='button'
    const props={}
    if(href && className ==='btn btn-outline-success'){
        Component= 'a'
        props.href=href
    }
    if(onClick){
        props.onClick=onClick
    }
  
    return (
        <>
            <Component className={className} {...props}>{title}</Component>
        </>
    );
}

export  default Button;