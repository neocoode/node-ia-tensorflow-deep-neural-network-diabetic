// src/index.ts
import * as tf from '@tensorflow/tfjs-node';

import { testFeatures, testPatients } from '@data/patientsTestData';
import { createModel, trainModel } from '@models/diabetesModel';

(async () => {
  try {
    // Criar e treinar o modelo
    const model = createModel();
    await trainModel(model);

    // Fazer previsões para novos pacientes
    console.log('Previsões para novos pacientes:');
    const predictions = model.predict(testFeatures) as tf.Tensor;

    // Obter os resultados das previsões
    const predictionValues = predictions.arraySync() as number[][];

    // Gerar o relatório final
    testPatients.forEach((patient, index) => {
      const [diabetesProb, highBPProb, obesityProb] = predictionValues[index];
      console.log('----------------------------------------');
      console.log(`Nome: ${patient.name}`);
      console.log(`Idade: ${patient.age}`);
      console.log(`Pressão Arterial: ${patient.bloodPressure}`);
      console.log(`Obesidade: ${obesityProb >= 0.5 ? 'Sim' : 'Não'}`);
      console.log(`Diabetes: ${diabetesProb >= 0.5 ? 'Sim' : 'Não'}`);
      console.log(`Pressão Alta: ${highBPProb >= 0.5 ? 'Sim' : 'Não'}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
})();
