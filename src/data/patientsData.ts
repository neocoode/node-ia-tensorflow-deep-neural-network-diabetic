// src/data/patientsData.ts
import * as tf from '@tensorflow/tfjs-node';

export interface PatientData {
  name: string;
  age: number;
  weight: number;
  height: number;
  bloodPressure: number;
  diabetes: number;
  highBloodPressure: number;
  obesity: number;
}

// Lista de pacientes para treinamento
export const trainingPatients: PatientData[] = [
  {
    name: 'Paciente 1',
    age: 25,
    weight: 70,
    height: 1.75,
    bloodPressure: 120,
    diabetes: 0,
    highBloodPressure: 0,
    obesity: 0,
  },
  {
    name: 'Paciente 2',
    age: 35,
    weight: 85,
    height: 1.68,
    bloodPressure: 130,
    diabetes: 1,
    highBloodPressure: 0,
    obesity: 1,
  },
  {
    name: 'Paciente 3',
    age: 40,
    weight: 68,
    height: 1.7,
    bloodPressure: 140,
    diabetes: 0,
    highBloodPressure: 1,
    obesity: 0,
  },
  {
    name: 'Paciente 4',
    age: 45,
    weight: 90,
    height: 1.65,
    bloodPressure: 150,
    diabetes: 1,
    highBloodPressure: 1,
    obesity: 1,
  },
  {
    name: 'Paciente 5',
    age: 50,
    weight: 95,
    height: 1.6,
    bloodPressure: 160,
    diabetes: 1,
    highBloodPressure: 1,
    obesity: 1,
  },
];

// Extrair as entradas (features) e as saídas (labels)
const trainingFeatures = trainingPatients.map((patient) => [
  patient.age,
  patient.weight,
  patient.height,
  patient.bloodPressure,
]);

const trainingLabels = trainingPatients.map((patient) => [
  patient.diabetes,
  patient.highBloodPressure,
  patient.obesity,
]);

// Converter em tensores
export const trainingData = tf.tensor2d(trainingFeatures);
export const outputData = tf.tensor2d(trainingLabels);
