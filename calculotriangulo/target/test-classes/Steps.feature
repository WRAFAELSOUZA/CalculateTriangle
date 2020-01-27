#utf-8
Feature: CalculateTriangle

  Scenario Outline: Validate scenario
    Given the user access the url "https://calculadoratriangulo.herokuapp.com"
    When the user write the value in <side1>,<side2>,<side3>
    And the user press on "calcular" button
    Then the result is "<result>"

    Examples: 
      | side1 | side2 | side3 | result                       |
      |     1 |     1 |     1 | Triângulo Equilátero         |
      |     1 |     1 |     2 | Triângulo Isósceles          |
      |     1 |     2 |     3 | Triângulo Escaleno           |
      |     1 |     2 |     1 | Triângulo Isósceles          |
      |     1 |     2 |     2 | Triângulo Isósceles          |
      |     0 |     1 |     1 | Valor não forma um Triângulo |
      |     1 |     0 |     1 | Valor não forma um Triângulo |
      |     1 |     1 |     0 | Valor não forma um Triângulo |
      |     0 |     0 |     0 | Valor não forma um Triângulo |
      | "x"   |     1 |     1 | Preencha todos os lados      |
      |     1 | "y"   |     1 | Preencha todos os lados      |
      |     1 |     1 | "z"   | Preencha todos os lados      |
      |     1 |     1 |       | Preencha todos os lados      |
      |     1 |       |     1 | Preencha todos os lados      |
      |       |     1 |     1 | Preencha todos os lados      |
      |       |       |       | Preencha todos os lados      |
