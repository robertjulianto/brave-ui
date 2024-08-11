type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
}

const Button = (props: ButtonProps) => {
    const {text, ...defaultProps} = props
    return (
        <button className='text-center text-white p-2 bg-red-500 mx-auto mt-4 w-full' {...defaultProps} >
            {text}
        </button>
    );
};

export default Button;