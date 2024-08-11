type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    textLabel: string;
}

const FormInput = (props: FormInputProps) => {
    const { textLabel, ...defaultProps } = props;
    return (
        <div className='flex flex-col py-2'>
            <label className='font-bold text-left p-2'>{textLabel}</label>
            <input className='border p-2 bg-red-500 text-white' {...defaultProps}/>
        </div>
    );
};

export default FormInput;