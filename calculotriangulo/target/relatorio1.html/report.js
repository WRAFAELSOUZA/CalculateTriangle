$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Steps.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#utf-8"
    }
  ],
  "line": 2,
  "name": "CalculateTriangle",
  "description": "",
  "id": "calculatetriangle",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in \u003cside1\u003e,\u003cside2\u003e,\u003cside3\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "calculatetriangle;validate-scenario;",
  "rows": [
    {
      "cells": [
        "side1",
        "side2",
        "side3",
        "result"
      ],
      "line": 11,
      "id": "calculatetriangle;validate-scenario;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "Triângulo Equilátero"
      ],
      "line": 12,
      "id": "calculatetriangle;validate-scenario;;2"
    },
    {
      "cells": [
        "1",
        "1",
        "2",
        "Triângulo Isósceles"
      ],
      "line": 13,
      "id": "calculatetriangle;validate-scenario;;3"
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "Triângulo Escaleno"
      ],
      "line": 14,
      "id": "calculatetriangle;validate-scenario;;4"
    },
    {
      "cells": [
        "1",
        "2",
        "1",
        "Triângulo Isósceles"
      ],
      "line": 15,
      "id": "calculatetriangle;validate-scenario;;5"
    },
    {
      "cells": [
        "1",
        "2",
        "2",
        "Triângulo Isósceles"
      ],
      "line": 16,
      "id": "calculatetriangle;validate-scenario;;6"
    },
    {
      "cells": [
        "0",
        "1",
        "1",
        "Valor não forma um Triângulo"
      ],
      "line": 17,
      "id": "calculatetriangle;validate-scenario;;7"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "Valor não forma um Triângulo"
      ],
      "line": 18,
      "id": "calculatetriangle;validate-scenario;;8"
    },
    {
      "cells": [
        "1",
        "1",
        "0",
        "Valor não forma um Triângulo"
      ],
      "line": 19,
      "id": "calculatetriangle;validate-scenario;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "Valor não forma um Triângulo"
      ],
      "line": 20,
      "id": "calculatetriangle;validate-scenario;;10"
    },
    {
      "cells": [
        "\"x\"",
        "1",
        "1",
        "Preencha todos os lados"
      ],
      "line": 21,
      "id": "calculatetriangle;validate-scenario;;11"
    },
    {
      "cells": [
        "1",
        "\"y\"",
        "1",
        "Preencha todos os lados"
      ],
      "line": 22,
      "id": "calculatetriangle;validate-scenario;;12"
    },
    {
      "cells": [
        "1",
        "1",
        "\"z\"",
        "Preencha todos os lados"
      ],
      "line": 23,
      "id": "calculatetriangle;validate-scenario;;13"
    },
    {
      "cells": [
        "1",
        "1",
        "",
        "Preencha todos os lados"
      ],
      "line": 24,
      "id": "calculatetriangle;validate-scenario;;14"
    },
    {
      "cells": [
        "1",
        "",
        "1",
        "Preencha todos os lados"
      ],
      "line": 25,
      "id": "calculatetriangle;validate-scenario;;15"
    },
    {
      "cells": [
        "",
        "1",
        "1",
        "Preencha todos os lados"
      ],
      "line": 26,
      "id": "calculatetriangle;validate-scenario;;16"
    },
    {
      "cells": [
        "",
        "",
        "",
        "Preencha todos os lados"
      ],
      "line": 27,
      "id": "calculatetriangle;validate-scenario;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8292841645,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,1,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Triângulo Equilátero\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 740097098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 144938013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 695346891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Equilátero",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 44865209,
  "status": "passed"
});
formatter.after({
  "duration": 674709203,
  "status": "passed"
});
formatter.before({
  "duration": 3282079393,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,1,2",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Triângulo Isósceles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 634834384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 132489055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 610099766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 37397584,
  "status": "passed"
});
formatter.after({
  "duration": 705499721,
  "status": "passed"
});
formatter.before({
  "duration": 3523074174,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,2,3",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Triângulo Escaleno\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 645803098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 130607359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 747588568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Escaleno",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 26874996,
  "status": "passed"
});
formatter.after({
  "duration": 659420495,
  "status": "passed"
});
formatter.before({
  "duration": 3405280703,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,2,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Triângulo Isósceles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 701846501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 140958198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 568063742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 40735377,
  "status": "passed"
});
formatter.after({
  "duration": 664406357,
  "status": "passed"
});
formatter.before({
  "duration": 3369613591,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,2,2",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Triângulo Isósceles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 1091462701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 196828946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 581816969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 32746468,
  "status": "passed"
});
formatter.after({
  "duration": 649389007,
  "status": "passed"
});
formatter.before({
  "duration": 3374456982,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 0,1,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Valor não forma um Triângulo\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 896292689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 134949085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 615370568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valor não forma um Triângulo",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 41360194,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângulo]\u003e but was:\u003c[Triângulo Isósceles]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 663041720,
  "status": "passed"
});
formatter.before({
  "duration": 3239646444,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,0,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Valor não forma um Triângulo\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 639433885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "0",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 134421763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 732850423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valor não forma um Triângulo",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 38325453,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângulo]\u003e but was:\u003c[Triângulo Isósceles]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 646559822,
  "status": "passed"
});
formatter.before({
  "duration": 3381401510,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,1,0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Valor não forma um Triângulo\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 644540787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 131195049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 745976720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valor não forma um Triângulo",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 42231618,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângulo]\u003e but was:\u003c[Triângulo Isósceles]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 635173355,
  "status": "passed"
});
formatter.before({
  "duration": 3540129575,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 0,0,0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Valor não forma um Triângulo\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 662125925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "0",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 155758824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 633608595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valor não forma um Triângulo",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 30444302,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângul]o\u003e but was:\u003c[Triângulo Equiláter]o\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 737502445,
  "status": "passed"
});
formatter.before({
  "duration": 3370865943,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in \"x\",1,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 657063093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"x\"",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 146071136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 580547412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 30121933,
  "status": "passed"
});
formatter.after({
  "duration": 662389434,
  "status": "passed"
});
formatter.before({
  "duration": 3806951048,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,\"y\",1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 677843251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "\"y\"",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 134388862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 446655688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 31772115,
  "status": "passed"
});
formatter.after({
  "duration": 659652915,
  "status": "passed"
});
formatter.before({
  "duration": 4156508303,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,1,\"z\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 5657583472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "\"z\"",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 140085265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 391673871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 38524972,
  "status": "passed"
});
formatter.after({
  "duration": 3838946829,
  "status": "passed"
});
formatter.before({
  "duration": 3663150685,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,1,",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 652955296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 167236447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 392336721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 27180763,
  "status": "passed"
});
formatter.after({
  "duration": 699302559,
  "status": "passed"
});
formatter.before({
  "duration": 2962797708,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in 1,,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 638784015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 137189071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 431981836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 27003581,
  "status": "passed"
});
formatter.after({
  "duration": 665574796,
  "status": "passed"
});
formatter.before({
  "duration": 3218674011,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in ,1,1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 612271534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 131130153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 382724493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 28604562,
  "status": "passed"
});
formatter.after({
  "duration": 651144834,
  "status": "passed"
});
formatter.before({
  "duration": 3220536390,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate scenario",
  "description": "",
  "id": "calculatetriangle;validate-scenario;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user access the url \"https://calculadoratriangulo.herokuapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user write the value in ,,",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user press on \"calcular\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the result is \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://calculadoratriangulo.herokuapp.com",
      "offset": 25
    }
  ],
  "location": "Steps.the_user_access_the_url(String)"
});
formatter.result({
  "duration": 656303955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "Steps.the_user_write_the_value_in(String,String,String)"
});
formatter.result({
  "duration": 122338036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calcular",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_press_on_button(String)"
});
formatter.result({
  "duration": 394656694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 15
    }
  ],
  "location": "Steps.the_result_is(String)"
});
formatter.result({
  "duration": 31477817,
  "status": "passed"
});
formatter.after({
  "duration": 646795260,
  "status": "passed"
});
});