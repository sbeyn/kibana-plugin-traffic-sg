
kibana-plugin-traffic
=====================


Introduction
-------------

Ce plugin permet la création d'un graphique de type feu tricolor sur Kibana Version 4.2.2, 4.3.0, 4.4.0, 4.5.0:

* Définition du label
* Définition des niveaux

Contenu
-------
```
.
├── index.js
├── package.json
├── public
│   ├── traffic_sg_controller.js
│   ├── traffic_sg.html
│   ├── traffic_sg.js
│   ├── traffic_sg.less
│   └── traffic_sg_params.html
└── README.md
```
Le plugin a été créé à partir des librairies Kibana et basé sur le framework Angularjs.


Installation
------------

```
        $ cd <path>/kibana/installedPlugins
        $ git clone <depot> traffic-sg
```


Désinstallation
---------------

```
        $ bin/kibana plugin  --remove traffic_sg
```

