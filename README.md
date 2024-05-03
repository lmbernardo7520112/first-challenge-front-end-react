### Currency Converter 💱

#### [English](#english) | [Português](#portuguese)

---

### <a name="english"></a> English

Welcome to the Currency Converter project! This React application allows you to convert currencies using real-time exchange rates obtained from an API. 🔄

#### Components 📚

1. **AmountInput**

   - This component allows users to enter the amount to be converted.
   - Props:
     - `label`: Label for the input field.
     - `value`: Value of the input field.
     - `onChange`: Function to handle input changes.

2. **ConversionResult**

   - This component displays the converted amount.
   - Props:
     - `amount`: The converted amount to be displayed.

3. **CurrencySelector**

   - This component allows users to select source and target currencies.
   - Props:
     - `label`: Label for the select input.
     - `currencies`: List of available currencies.
     - `value`: Value of the selected currency.
     - `onChange`: Function to handle currency selection changes.

#### Functionality ⚙️

The `CurrencyConverterApp` component provides the main functionality of the application. It fetches currencies from an external API, allows users to select source and target currencies, enter the amount to be converted, and displays the converted amount.

#### How to Use 🚀

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.
5. Select source and target currencies, enter the amount to convert, and click the Convert button to see the result.

#### Dependencies 📦

This project relies on the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.
- `react-scripts`: Scripts and configuration used by Create React App.
  
## Project Structure
- `/src/components`: Contains React components.
  - `AmountInput`: Component for entering the amount to be converted.
  - `ConversionResult`: Component to display the conversion result.
  - `CurrencySelector`: Component for selecting source and target currencies.
- `/src/utils`: Contains utility functions.
  - `api.js`: Functions for fetching currencies and handling currency conversion.
- `/src`: Main application files.
  - `App.js`: Main application component.
  - `CurrencyConverterApp.js`: Currency Converter application component.
- `/public`: Contains public files.
  - `index.html`: Main HTML file.
- `/`: Other project configuration files.


#### Contributing 🤝

Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines outlined in the [CONTRIBUTING.md] file.

#### Contact 📧

If you have any questions or suggestions regarding this project, feel free to contact us at [mailto:leonardo.bernardo@professor.pb.gov.br].

Thank you for using the Currency Converter! Happy converting! 🎉

---

### <a name="portuguese"></a> Português

Bem-vindo ao projeto Conversor de Moedas! Este aplicativo React permite que você converta moedas usando taxas de câmbio em tempo real obtidas de uma API. 🔄

#### Componentes 📚

1. **AmountInput**

   - Este componente permite que os usuários insiram o valor a ser convertido.
   - Props:
     - `label`: Rótulo para o campo de entrada.
     - `value`: Valor do campo de entrada.
     - `onChange`: Função para lidar com as mudanças de entrada.

2. **ConversionResult**

   - Este componente exibe o valor convertido.
   - Props:
     - `amount`: O valor convertido a ser exibido.

3. **CurrencySelector**

   - Este componente permite que os usuários selecionem as moedas de origem e destino.
   - Props:
     - `label`: Rótulo para o campo de seleção.
     - `currencies`: Lista de moedas disponíveis.
     - `value`: Valor da moeda selecionada.
     - `onChange`: Função para lidar com as mudanças de seleção de moeda.

#### Funcionalidade ⚙️

O componente `CurrencyConverterApp` fornece a funcionalidade principal do aplicativo. Ele busca moedas de uma API externa, permite que os usuários selecionem as moedas de origem e destino, insiram o valor a ser convertido e exibe o valor convertido.

#### Como Usar 🚀

1. Clone o repositório para sua máquina local.
2. Instale as dependências usando `npm install`.
3. Execute o aplicativo usando `npm start`.
4. Abra seu navegador e acesse `http://localhost:3000`.
5. Selecione as moedas de origem e destino, insira o valor a ser convertido e clique no botão Converter para ver o resultado.

#### Dependências 📦

Este projeto depende das seguintes dependências:

- `react`: Biblioteca JavaScript para construir interfaces de usuário.
- `react-dom`: Pacote React para trabalhar com o DOM.
- `react-scripts`: Scripts e configuração usados pelo Create React App.

## Estrutura do Projeto
- `/src/components`: Contém os componentes React.
  - `AmountInput`: Componente para inserir o valor a ser convertido.
  - `ConversionResult`: Componente para exibir o resultado da conversão.
  - `CurrencySelector`: Componente para selecionar as moedas de origem e destino.
- `/src/utils`: Contém funções utilitárias.
  - `api.js`: Funções para buscar moedas e lidar com a conversão de moedas.
- `/src`: Arquivos principais da aplicação.
  - `App.js`: Componente principal da aplicação.
  - `CurrencyConverterApp.js`: Componente da aplicação Conversor de Moedas.
- `/public`: Contém arquivos públicos.
  - `index.html`: Arquivo HTML principal.
- `/`: Outros arquivos de configuração do projeto.


#### Contribuições 🤝

Contribuições para este projeto são bem-vindas! Se você gostaria de contribuir, siga as diretrizes descritas no arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

#### Contato 📧

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato conosco em [seu_email@example.com](mailto:leonardo.bernardo@professor.pb.gov.br).

Obrigado por usar o Conversor de Moedas! Feliz conversão! 🎉
