# Predição de Diabetes usando Redes Neurais Profundas com TensorFlow.js

Este projeto implementa uma rede neural profunda para prever a probabilidade de um paciente ter diabetes com base em atributos fisiológicos, como idade, peso, IMC (Índice de Massa Corporal) e pressão arterial. O modelo é construído utilizando o TensorFlow.js e emprega uma arquitetura sequencial com múltiplas camadas ocultas. A rede é treinada em um conjunto de dados de pacientes e seus respectivos diagnósticos de diabetes, utilizando o otimizador Adam e a função de perda binary crossentropy para classificação binária.

Uma vez treinado, o modelo pode prever se um novo paciente está em risco de desenvolver diabetes, fornecendo uma pontuação de probabilidade que pode ajudar na tomada de decisões médicas. Este projeto pode ser adaptado para vários outros problemas de classificação binária, como detecção de fraudes ou predição de cancelamento de clientes.

## Documento Explicativo sobre o Código de Predição de Diabetes usando TensorFlow.js

### O que o código faz?

Este código implementa uma rede neural profunda para prever a probabilidade de um paciente ter diabetes com base em quatro características fisiológicas: **idade**, **peso**, **IMC (Índice de Massa Corporal)**, e **pressão arterial**. 

Ele utiliza o **TensorFlow.js**, uma biblioteca poderosa para criar e treinar redes neurais, e segue os seguintes passos:

1. **Definição de dados de entrada e saída**:
   - O código começa definindo os dados de entrada (características fisiológicas de cada paciente) e os dados de saída (se o paciente tem diabetes ou não).

2. **Criação de um modelo de rede neural**:
   - Utiliza-se um **modelo sequencial** de rede neural, onde as camadas são empilhadas uma após a outra. O modelo é composto por camadas ocultas densas com funções de ativação **ReLU** e uma camada de saída com a função de ativação **sigmoid**.

3. **Treinamento do modelo**:
   - O modelo é treinado com os dados fornecidos, ajustando os pesos de suas conexões durante 100 épocas, para minimizar a função de perda **binaryCrossentropy**.

4. **Previsão**:
   - Após o treinamento, o modelo é capaz de fazer previsões com novos dados. Nesse exemplo, ele é usado para prever se um novo paciente, com características fornecidas, tem ou não diabetes.

5. **Exibição da previsão**:
   - O código exibe a probabilidade de o paciente ter diabetes (um valor entre 0 e 1). Quanto mais próximo de 1, maior a probabilidade do paciente ter diabetes.

### O que é TensorFlow.js?

**TensorFlow.js** é uma biblioteca de JavaScript que permite criar, treinar e executar modelos de aprendizado de máquina diretamente no navegador ou no Node.js. Baseado no TensorFlow original, que foi criado em Python, o TensorFlow.js oferece funcionalidades de aprendizado de máquina, como redes neurais e aprendizado profundo, permitindo que desenvolvedores criem e treinem modelos de forma eficiente.

#### Principais características do TensorFlow.js:
1. **Execução no Navegador ou no Node.js**: Ele pode ser executado diretamente no navegador sem precisar de back-end ou, como neste exemplo, em um ambiente **Node.js**.
2. **Suporte a Redes Neurais**: O TensorFlow.js fornece abstrações para construir modelos de redes neurais profundas de maneira simples.
3. **GPU Acelerada**: Quando executado em navegadores, o TensorFlow.js pode tirar vantagem da aceleração de GPU para aumentar o desempenho.
4. **Portabilidade**: Modelos criados em Python podem ser convertidos e executados no TensorFlow.js, facilitando a transição para o ambiente de JavaScript.

### Como o TensorFlow.js está sendo usado no código?

Neste código, o TensorFlow.js é usado para criar e treinar um **modelo de rede neural profunda**. Vamos detalhar o que cada parte do código faz em relação ao uso do TensorFlow.js:

#### 1. **Importação e Definição dos Dados**:

```typescript
import * as tf from '@tensorflow/tfjs-node'; // Usando TensorFlow para Node.js

const trainingData = tf.tensor2d([
  [25, 180, 75, 120],
  [35, 200, 85, 130],
  [40, 150, 70, 140],
  [45, 220, 90, 150],
  [50, 250, 100, 160]
]);

const outputData = tf.tensor2d([
  [0],  // Sem diabetes
  [1],  // Com diabetes
  [0],  // Sem diabetes
  [1],  // Com diabetes
  [1]   // Com diabetes
]);
```

Aqui, o **TensorFlow.js** cria tensores 2D (matrizes numéricas) para representar os dados de entrada e saída. O tensor é a estrutura de dados fundamental do TensorFlow, que permite que as operações matemáticas sejam realizadas de maneira eficiente em GPUs e CPUs.

#### 2. **Construção do Modelo de Rede Neural**:

```typescript
const model = tf.sequential();

model.add(tf.layers.dense({ units: 128, activation: 'relu', inputShape: [4] }));
model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
```

- O modelo é **sequencial**, o que significa que as camadas são empilhadas uma após a outra.
- São adicionadas três camadas densas (fully connected):
  - A primeira camada densa tem 128 neurônios e usa a função de ativação **ReLU** (Rectified Linear Unit), que ajuda a rede a aprender padrões complexos.
  - A segunda camada densa tem 64 neurônios, também com ativação **ReLU**.
  - A camada de saída tem 1 neurônio e usa a função de ativação **sigmoid**. Isso é ideal para tarefas de **classificação binária**, já que a sigmoid produz uma saída entre 0 e 1.

#### 3. **Compilação e Treinamento do Modelo**:

```typescript
model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy']
});

await model.fit(trainingData, outputData, {
  epochs: 100,
  batchSize: 1,
});
```

- **Compilação do modelo**:
  - O otimizador **Adam** é usado para ajustar os pesos da rede durante o treinamento. É um dos otimizadores mais usados em redes neurais profundas devido à sua eficiência.
  - A função de perda **binaryCrossentropy** é adequada para problemas de classificação binária (onde queremos prever 0 ou 1).
  - Durante o treinamento, o **métrico de precisão** (**accuracy**) é monitorado, que mede o quão bem o modelo está aprendendo.
  
- **Treinamento**:
  - O método `model.fit()` treina o modelo pelos dados fornecidos durante **100 épocas**. Cada época representa uma passagem completa por todos os dados de treinamento.

#### 4. **Previsão e Exibição dos Resultados**:

```typescript
const newPatientData = tf.tensor2d([[30, 195, 80, 125]]);
const prediction = model.predict(newPatientData);

if (Array.isArray(prediction)) {
  prediction.forEach(tensor => tensor.print());
} else {
  (prediction as tf.Tensor).print();
}
```

- **Previsão**:
  - Após o treinamento, um novo paciente é representado por suas características (idade, peso, IMC, e pressão arterial), e a função `model.predict()` é chamada para fazer uma previsão.
  
- **Exibição do resultado**:
  - O valor previsto é exibido usando o método `print()` do TensorFlow, que imprime o tensor no console. O valor será um número entre 0 e 1, indicando a probabilidade do paciente ter diabetes. Se o valor for próximo de 1, o modelo prevê que o paciente provavelmente tem diabetes.

<img width="664" alt="image" src="https://github.com/user-attachments/assets/1eb730a3-a5a8-401b-9585-868d9dd33397">


### Conclusão:

Este projeto demonstra o poder do **TensorFlow.js** para criar e treinar uma rede neural profunda para classificação binária, como a previsão de diabetes com base em características fisiológicas. O uso do TensorFlow.js em ambientes de Node.js facilita o desenvolvimento de aplicações de aprendizado de máquina no backend, tornando o treinamento de redes neurais mais acessível em projetos JavaScript.
