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
  "duration": 12896311404,
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
  "duration": 1126279215,
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
  "duration": 148606325,
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
  "duration": 662317595,
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
  "duration": 35060706,
  "status": "passed"
});
formatter.after({
  "duration": 707447823,
  "status": "passed"
});
formatter.before({
  "duration": 3927755112,
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
  "duration": 850747728,
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
  "duration": 144451139,
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
  "duration": 641556151,
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
  "duration": 42992869,
  "status": "passed"
});
formatter.after({
  "duration": 2104998600,
  "status": "passed"
});
formatter.before({
  "duration": 4435895849,
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
  "duration": 647804023,
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
  "duration": 135004624,
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
  "duration": 713382683,
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
  "duration": 40956931,
  "status": "passed"
});
formatter.after({
  "duration": 899637425,
  "status": "passed"
});
formatter.before({
  "duration": 3422843203,
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
  "duration": 608599902,
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
  "duration": 140886359,
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
  "duration": 564532769,
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
  "duration": 28049169,
  "status": "passed"
});
formatter.after({
  "duration": 677914185,
  "status": "passed"
});
formatter.before({
  "duration": 3337769638,
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
  "duration": 642294764,
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
  "duration": 136931295,
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
  "duration": 762759857,
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
  "duration": 30103822,
  "status": "passed"
});
formatter.after({
  "duration": 814396638,
  "status": "passed"
});
formatter.before({
  "duration": 3269365415,
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
  "duration": 652313877,
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
  "duration": 136320363,
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
  "duration": 521020426,
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
  "duration": 39840107,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângulo]\u003e but was:\u003c[Triângulo Isósceles]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 637699489,
  "status": "passed"
});
formatter.before({
  "duration": 3413911333,
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
  "duration": 658873856,
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
  "duration": 129464879,
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
  "duration": 557080842,
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
  "duration": 43381644,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângulo]\u003e but was:\u003c[Triângulo Isósceles]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 636762263,
  "status": "passed"
});
formatter.before({
  "duration": 3222131032,
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
  "duration": 654032275,
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
  "duration": 132314891,
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
  "duration": 529652867,
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
  "duration": 28343769,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângulo]\u003e but was:\u003c[Triângulo Isósceles]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 704577889,
  "status": "passed"
});
formatter.before({
  "duration": 3336061200,
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
  "duration": 661523745,
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
  "duration": 134317627,
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
  "duration": 565384875,
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
  "duration": 36406630,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Valor não forma um Triângul]o\u003e but was:\u003c[Triângulo Equiláter]o\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat calculotriangulo.Steps.the_result_is(Steps.java:61)\r\n\tat ✽.Then the result is \"Valor não forma um Triângulo\"(Steps.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 640585723,
  "status": "passed"
});
formatter.before({
  "duration": 3305308714,
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
  "duration": 644502452,
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
  "duration": 137576639,
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
  "duration": 407044982,
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
  "duration": 28624786,
  "status": "passed"
});
formatter.after({
  "duration": 642489453,
  "status": "passed"
});
formatter.before({
  "duration": 3547208425,
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
  "duration": 641269097,
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
  "duration": 135610727,
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
  "duration": 429071757,
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
  "duration": 27773586,
  "status": "passed"
});
formatter.after({
  "duration": 969303657,
  "status": "passed"
});
formatter.before({
  "duration": 3248479913,
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
  "duration": 622183493,
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
  "duration": 140217775,
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
  "duration": 648076891,
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
  "duration": 31437973,
  "status": "passed"
});
formatter.after({
  "duration": 1340859012,
  "status": "passed"
});
formatter.before({
  "duration": 3349860005,
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
  "duration": 628652616,
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
  "duration": 128804443,
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
  "duration": 461972769,
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
  "duration": 27759097,
  "status": "passed"
});
formatter.after({
  "duration": 636621603,
  "status": "passed"
});
formatter.before({
  "duration": 3288072206,
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
  "duration": 653547212,
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
  "duration": 131645401,
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
  "duration": 537230060,
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
  "duration": 30132800,
  "status": "passed"
});
formatter.after({
  "duration": 712446966,
  "status": "passed"
});
formatter.before({
  "duration": 3308274332,
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
  "duration": 651237802,
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
  "duration": 130397577,
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
  "duration": 533210704,
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
  "duration": 29522471,
  "status": "passed"
});
formatter.after({
  "duration": 658175690,
  "status": "passed"
});
formatter.before({
  "duration": 3365571899,
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
  "duration": 643463807,
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
  "duration": 124844852,
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
  "duration": 452534102,
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
  "duration": 32779972,
  "status": "passed"
});
formatter.after({
  "duration": 643455959,
  "status": "passed"
});
});