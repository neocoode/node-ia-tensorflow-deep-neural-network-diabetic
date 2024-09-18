// src/data/patientsTestData.ts
import { PatientData } from '@data/patientsData';
import * as tf from '@tensorflow/tfjs-node';

export const testPatients: PatientData[] = [
  {
    name: 'Novo Paciente 1',
    age: 30,
    weight: 80,
    height: 1.80,
    bloodPressure: 125,
    diabetes: 0, // Estes valores serão previstos pelo modelo
    highBloodPressure: 0,
    obesity: 0,
  },
  {
    name: 'Novo Paciente 2',
    age: 50,
    weight: 88,
    height: 1.70,
    bloodPressure: 135,
    diabetes: 0,
    highBloodPressure: 0,
    obesity: 0,
  },
  {
    name: 'Novo Paciente 3',
    age: 38,
    weight: 76,
    height: 1.75,
    bloodPressure: 140,
    diabetes: 0,
    highBloodPressure: 0,
    obesity: 0,
  },
  {
    name: 'Novo Paciente 4',
    age: 60,
    weight: 95,
    height: 1.65,
    bloodPressure: 165,
    diabetes: 0,
    highBloodPressure: 0,
    obesity: 0,
  },
];

// Preparar os dados para previsão
export const testFeatures = tf.tensor2d(
  testPatients.map(patient => [
    patient.age,
    patient.weight,
    patient.height,
    patient.bloodPressure,
  ])
);
