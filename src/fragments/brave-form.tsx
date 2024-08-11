import { FormEvent, SetStateAction, useState } from "react";
import Title from "../components/title";
import Button from "../components/button";
import FormInput from "../components/form-input";
import axios from "axios";
import MessagePanel from "../components/message-panel";

type Person = {
  ageOfDeath: number,
  yearOfDeath: number
};

const BraveForm = () => {

    const [message, setMessage] = useState('');
    
    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        ageOfDeathPersonA: { value: number };
        yearOfDeathPersonA: { value: number };
        ageOfDeathPersonB: { value: number };
        yearOfDeathPersonB: { value: number };

      };
  
      const ageOfDeathPersonA = target.ageOfDeathPersonA.value;
      const yearOfDeathPersonA = target.yearOfDeathPersonA.value;

      const ageOfDeathPersonB = target.ageOfDeathPersonB.value;
      const yearOfDeathPersonB = target.yearOfDeathPersonB.value;
  
      if (
        ageOfDeathPersonA.toString() == ''
        || yearOfDeathPersonA.toString() == ''
        || ageOfDeathPersonB.toString() == ''
        || yearOfDeathPersonB.toString() == ''
      ) {
        setMessage('TELL ME YOUR PEOPLE!!!!');
      }
      
  
      else {
        const personA: Person = {
          ageOfDeath: ageOfDeathPersonA,
          yearOfDeath: yearOfDeathPersonA,
        }

        const personB: Person = {
          ageOfDeath: ageOfDeathPersonB,
          yearOfDeath: yearOfDeathPersonB,
        }
        const data = {
          personA,
          personB
        }
  
        axios.post(`${import.meta.env.VITE_SERVICE_API}/brave`, data, {
          headers: {
            "Content-Type": "application/json"
          },
        }).then((res: { data: { result: SetStateAction<number>; }; }) => {
            const kill: number = res.data.result as number;
            if (kill >= 0)
              setMessage(`I'll kill ${kill} people here!!! HUAHAHAHA!!!`);
            else
              setMessage(`${kill}? ARE YOU JOKING TO ME? TELL ME YOUR PEOPLE!`);
        });
      }
    };

    return (
        <>
          <Title text="Hahahaha!!" />
          <Title text="TELL MEE YOUR PEOLE!!" />
            <form method="post" onSubmit={onSubmitForm} className='border p-4 m-4'> 
                <div className="flex flex-row justify-center gap-4 mt-4">
                  <div className="border p-2">
                    <Title text="Person A" />
                    <FormInput textLabel='Age of Death' name='ageOfDeathPersonA' />
                    <FormInput textLabel='Year of Death' name='yearOfDeathPersonA' />
                  </div>
                  <div className="border p-2">
                    <Title text="Person B" />
                    <FormInput textLabel='Age of Death' name='ageOfDeathPersonB' />
                    <FormInput textLabel='Year of Death' name='yearOfDeathPersonB' />
                  </div>
                </div>
                <Button text='Submit' type='submit' />
            </form>
            <MessagePanel message={message} />
        </>
    );
};

export default BraveForm;