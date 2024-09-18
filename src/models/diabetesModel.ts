// src/models/diabetesModel.ts
import { outputData, trainingData } from '@data/patientsData';
import * as tf from '@tensorflow/tfjs-node';

// Função para criar o modelo
export function createModel() {
  // Criar um modelo sequencial de rede neural
  const model = tf.sequential();

  // Adicionar camadas densas (ocultas) com funções de ativação ReLU
  model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [4] }));
  model.add(tf.layers.dense({ units: 32, activation: 'relu' }));

  // Camada de saída com 3 neurônios e ativação sigmoid para múltiplas classificações
  model.add(tf.layers.dense({ units: 3, activation: 'sigmoid' }));

  // Compilar o modelo com o otimizador Adam e a função de perda binaryCrossentropy
  model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
  });

  return model;
}

// Função para treinar o modelo com os dados de entrada e saída
export async function trainModel(model: tf.Sequential) {
  await model.fit(trainingData, outputData, {
    epochs: 100,
    batchSize: 1,
  });
  console.log('Modelo treinado com sucesso!');
}
