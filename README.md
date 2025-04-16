# 🌊 Currency Converter 💱

**Convert currencies effortlessly with real-time exchange rates.** 🔄

</div>

<div align="center">

<!-- Badges -->
[![React][React-shield]][React-url]
[![JavaScript][JavaScript-shield]][JavaScript-url]
[![License][License-shield]][License-url]
[![Contributors][Contributors-shield]][Contributors-url]
[![Issues][Issues-shield]][Issues-url]
[![Forks][Forks-shield]][Forks-url]
[![Stars][Stars-shield]][Stars-url]

</div>

<!-- Accordion Navigation -->
<details open>
<summary>🌊 Table of Contents</summary>
<ol>
  <li><a href="#-about-the-project">About The Project</a></li>
  <li><a href="#-features">Features</a></li>
  <li><a href="#-components">Components</a></li>
  <li><a href="#%EF%B8%8F-project-structure">Project Structure</a></li>
  <li><a href="#-getting-started">Getting Started</a>
    <ul>
      <li><a href="#-prerequisites">Prerequisites</a></li>
      <li><a href="#-installation">Installation</a></li>
      <li><a href="#-running-the-app">Running the App</a></li>
    </ul>
  </li>
  <li><a href="#-dependencies">Dependencies</a></li>
  <li><a href="#-contributing">Contributing</a></li>
  <li><a href="#-license">License</a></li>
  <li><a href="#-contact">Contact</a></li>
  <li><a href="#-language-versions">Language Versions</a>
    <ul>
      <li><a href="#english-version">English Version</a></li>
      <li><a href="#portuguese-version">Portuguese Version</a></li>
    </ul>
  </li>
</ol>
</details>

---

## 📖 About The Project

This project is a simple yet effective currency converter application built with React. It fetches real-time exchange rate data from an external API (you'll need to configure which one in `api.js`) to provide accurate conversions between various currencies.

---

## ✨ Features

*   **Real-time Conversion:** Utilizes live exchange rates fetched from an API.
*   **Currency Selection:** Allows users to choose both source and target currencies from a list.
*   **Amount Input:** Clear input field for the amount to be converted.
*   **Result Display:** Shows the converted amount clearly.
*   **Component-Based:** Built with reusable React components for better structure and maintainability.

---

## 📚 Components

The application is structured using the following core React components:

1.  **`AmountInput`**
    *   💧 **Purpose:** Allows users to enter the numeric amount they wish to convert.
    *   **Props:**
        *   `label`: Text label for the input field.
        *   `value`: Current value of the input field.
        *   `onChange`: Callback function triggered when the input value changes.
2.  **`ConversionResult`**
    *   💧 **Purpose:** Displays the final calculated converted currency amount.
    *   **Props:**
        *   `amount`: The converted amount to display.
3.  **`CurrencySelector`**
    *   💧 **Purpose:** Provides dropdown menus for selecting the source and target currencies.
    *   **Props:**
        *   `label`: Text label for the selection dropdown.
        *   `currencies`: An array or object containing the available currency codes/names.
        *   `value`: The currently selected currency value.
        *   `onChange`: Callback function triggered when a currency selection changes.

---

## 🏗️ Project Structure

```
.
├── public/
│   └── index.html        # Main HTML template
├── src/
│   ├── components/
│   │   ├── AmountInput.js
│   │   ├── ConversionResult.js
│   │   └── CurrencySelector.js
│   ├── utils/
│   │   └── api.js          # API fetching and conversion logic
│   ├── App.js              # Main application component (routing/layout)
│   └── CurrencyConverterApp.js # Core converter logic component
├── .gitignore
├── package.json
├── README.md
└── ...                   # Other config files (babel, eslint, etc.)
```

---

## 🚀 Getting Started

Follow these steps to get the project running locally.

### 💧 Prerequisites

*   Node.js and npm (or yarn) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
*   An API key from an exchange rate provider (you'll need to integrate this into `src/utils/api.js`).

### 💧 Installation

1.  Clone the repository:
    ```sh
    git clone <your-repository-url>
    cd <repository-directory>
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
    *(Or `yarn install` if you use Yarn)*

### 💧 Running the App

1.  Start the development server:
    ```sh
    npm start
    ```
    *(Or `yarn start`)*
2.  Open your browser and navigate to `http://localhost:3000` (or the port specified in the output).

---

## 📦 Dependencies

*   **`react`**: Core library for building the user interface.
*   **`react-dom`**: For interacting with the DOM.
*   **`react-scripts`**: Configuration and scripts provided by Create React App for building, testing, and running the application.
*   *(You might need an HTTP client like `axios` or use the native `fetch` API in `api.js`)*

---

## 🤝 Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please refer to the `CONTRIBUTING.md` file for details on our code of conduct and the process for submitting pull requests.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information. *(Assuming MIT License - Create a LICENSE file if you haven't)*

---

## 📧 Contact

Leonardo M. Bernardo

*   <a href="mailto:leonardo.bernardo@professor.pb.gov.br">leonardo.bernardo@professor.pb.gov.br</a>
*   <a href="mailto:lmbernardo752011@gmail.com">lmbernardo752011@gmail.com</a>

Project Link: [https://github.com/<your-username>/<your-repo-name>](https://github.com/<your-username>/<your-repo-name>) *(Replace with actual link)*

---

## 🌐 Language Versions

<details>
<summary>View Full Text Versions</summary>

### <a name="english-version"></a> English

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

#### Project Structure
*(See <a href="#%EF%B8%8F-project-structure">Project Structure</a> section above)*

#### Contributing 🤝

Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines outlined in the [CONTRIBUTING.md] file.

#### Contact 📧

If you have any questions or suggestions regarding this project, feel free to contact us at [leonardo.bernardo@professor.pb.gov.br](mailto:leonardo.bernardo@professor.pb.gov.br).

Thank you for using the Currency Converter! Happy converting! 🎉

---

### <a name="portuguese-version"></a> Português

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

#### Estrutura do Projeto
*(Veja a seção <a href="#%EF%B8%8F-project-structure">Estrutura do Projeto</a> acima)*

#### Contribuições 🤝

Contribuições para este projeto são bem-vindas! Se você gostaria de contribuir, siga as diretrizes descritas no arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

#### Contato 📧

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato conosco em [leonardo.bernardo@professor.pb.gov.br](mailto:leonardo.bernardo@professor.pb.gov.br) ou [lmbernardo752011@gmail.com](mailto:lmbernardo752011@gmail.com).

Obrigado por usar o Conversor de Moedas! Feliz conversão! 🎉

</details>

---

<!-- MARKDOWN LINKS & IMAGES -->
<!-- TODO: Replace placeholders with actual links -->
[React-shield]: https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black&color=8a2be2
[React-url]: https://reactjs.org/
[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black&color=8a2be2
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[License-shield]: https://img.shields.io/github/license/<your-username>/<your-repo-name>?style=flat-square&color=8a2be2
[License-url]: https://github.com/<your-username>/<your-repo-name>/blob/main/LICENSE
[Contributors-shield]: https://img.shields.io/github/contributors/<your-username>/<your-repo-name>.svg?style=flat-square&color=8a2be2
[Contributors-url]: https://github.com/<your-username>/<your-repo-name>/graphs/contributors
[Issues-shield]: https://img.shields.io/github/issues/<your-username>/<your-repo-name>.svg?style=flat-square&color=8a2be2
[Issues-url]: https://github.com/<your-username>/<your-repo-name>/issues
[Forks-shield]: https://img.shields.io/github/forks/<your-username>/<your-repo-name>.svg?style=flat-square&color=8a2be2
[Forks-url]: https://github.com/<your-username>/<your-repo-name>/network/members
[Stars-shield]: https://img.shields.io/github/stars/<your-username>/<your-repo-name>.svg?style=flat-square&color=8a2be2
[Stars-url]: https://github.com/<your-username>/<your-repo-name>/stargazers
[CONTRIBUTING.md]: https://github.com/<your-username>/<your-repo-name>/blob/main/CONTRIBUTING.md
```
