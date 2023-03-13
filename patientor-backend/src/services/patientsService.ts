import { v1 as uuid } from 'uuid';
import patientsData from "../../data/patients";
import { NonSensitivePatients, Patient, NewPatient } from "../types";

const getNonSensitivePatients = (): NonSensitivePatients[] => {
  return patientsData.map(({ id, name, gender, occupation, dateOfBirth }) => ({
    id,
    name,
    gender,
    occupation,
    dateOfBirth,
  }));
};

const addPatient = ( patient: NewPatient ): Patient  => {
  const addedPatient = {
    id: uuid(),
    ...patient
  };
  patientsData.push(addedPatient);
  return addedPatient;
};

const getPatientById = (id: string): Patient | undefined => {
  return patientsData.find(patient => patient.id === id);
};


export default {
  getNonSensitivePatients,
  addPatient,
  getPatientById
};