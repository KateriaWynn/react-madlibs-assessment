import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import Select from './Select';

const MadlibForm = () => {
  return (
    <div className="madlib-form">
      <h1>Mad Libs Guided Imagery</h1>
      <p>A mindfulness exercice by Chicago Mind</p>
      <Formik
        initialValues={{
          breathsOne: '',
          nounOne: '',
          nounTwo: '',
          nounThree: '',
          moodOne: '',
          nounFour: '',
          nounFive: '',
          nounSix: '',
          moodTwo: '',
          breathsTwo: '',
        }}
        validationSchema={Yup.object({
          breathsOne: Yup.string()
            .oneOf(['1', '2', '3', '4'])
            .required('Required'),
          nounOne: Yup.string().required('Required'),
          nounTwo: Yup.string().required('Required'),
          nounThree: Yup.string().required('Required'),
          moodOne: Yup.string()
            .oneOf(['Happy', 'Calm', 'Peaceful'])
            .required('Required'),
          nounFour: Yup.string().required('Required'),
          nounFive: Yup.string().required('Required'),
          nounSix: Yup.string().required('Required'),
          moodTwo: Yup.string()
            .oneOf(['Content', 'Relaxed', 'Calm'])
            .required('Required'),
          breathsTwo: Yup.string()
            .oneOf(['1', '2', '3', '4'])
            .required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <Select name="breathsOne">
            <option value="">Choose a number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <TextInput
            name="nounOne"
            type="text"
            placeholder="Name a relaxing place"
          />
          <TextInput
            name="nounTwo"
            type="text"
            placeholder="Name one thing in your relaxing place"
          />
          <TextInput
            name="nounThree"
            type="text"
            placeholder="Name another thing in your relaxing place"
          />
          <Select name="moodOne">
            <option value="">Choose a word</option>
            <option value="Happy">Happy</option>
            <option value="Calm">Calm</option>
            <option value="Peaceful">Peaceful</option>
          </Select>
          <TextInput
            name="nounFour"
            type="text"
            placeholder="Name a soothing or favorite smell"
          />
          <TextInput
            name="nounFive"
            type="text"
            placeholder="Name a favorite food"
          />
          <TextInput
            name="nounSix"
            type="text"
            placeholder="Name your favorite animal with fur"
          />
          <Select name="moodTwo">
            <option value="">Choose a word</option>
            <option value="Content">Content</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Calm">Calm</option>
          </Select>
          <Select name="breathsTwo">
            <option value="">Choose a number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MadlibForm;
