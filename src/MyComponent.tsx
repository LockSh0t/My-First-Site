function MyComponent(props: {name: string}): JSX.Element {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default MyComponent;
