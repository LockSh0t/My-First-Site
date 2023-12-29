function Background(props: {children: JSX.Element[]}): JSX.Element {
    return (
      <div className='container'>
        {props.children}
      </div>
    );
}

export default Background;