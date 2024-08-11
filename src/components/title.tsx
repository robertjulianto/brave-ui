type TitleProps = {
    text: string;
}

const Title = (props: TitleProps) => {
    return (
        <h1 className='text-center text-4xl font-bold text-red-500'>
            {props.text}
        </h1>
    );
};

export default Title;