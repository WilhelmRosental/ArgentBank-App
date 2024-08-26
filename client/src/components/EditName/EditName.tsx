import { useDispatch, useSelector } from "react-redux";
import { useState, ChangeEvent, FormEvent } from "react";
import { getUserToken } from "@/app/store/selector";
import { usePutProfileNameMutation } from "@/app/api/formLoginApi";
import { userSlice } from "@/app/store/userSlice";
import { IResponseFetch, IResponseProfile, IUser } from "../../types";
import { EditButton, Button, Form, FormSection } from "./EditName.styles"; // Assurez-vous d'importer les composants stylisés

export default function EditName() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [credentials, setCredentials] = useState<{
    firstName: string;
    lastName: string;
  }>({
    firstName: "",
    lastName: "",
  });
  const token = useSelector(getUserToken);

  const [putProfileName] = usePutProfileNameMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const putUsernameResult: IResponseFetch<IResponseProfile> =
        await putProfileName({
          token,
          body: credentials,
        });
      const updateSlice = putUsernameResult.data as IUser;
      dispatch(userSlice.actions.setUser(updateSlice));
      setIsOpen(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
    }
  };

  if (isOpen) {
    return (
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </FormSection>
        <FormSection>
          <Button type="submit">Save</Button>
          <Button type="reset" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </FormSection>
      </Form>
    );
  } else {
    return <EditButton onClick={() => setIsOpen(true)}>Edit Name</EditButton>;
  }
}
