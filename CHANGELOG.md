# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/kienhoefr/Drinklist/compare/v2.1.0...v2.1.1) (2023-02-28)


### Bug Fixes

* **express:** exclude deleted entities and system users from stats ([ee0449a](https://github.com/kienhoefr/Drinklist/commit/ee0449a25387593d807c4a72d981ff603f27e862))
* **express:** limit top beverage stat to five entries ([b2b87ec](https://github.com/kienhoefr/Drinklist/commit/b2b87ec0296bfd776d68eadd6ec2fef040b0779b))

## [2.1.0](https://github.com/kienhoefr/Drinklist/compare/v2.0.3...v2.1.0) (2023-02-28)


### Features

* add option to get counts of multiple transaction types ([628af37](https://github.com/kienhoefr/Drinklist/commit/628af371afa56cabef8cdb9bf1bcaf1362720a79))
* **angular:** add pagination features to transaction lists ([eb67143](https://github.com/kienhoefr/Drinklist/commit/eb67143b87e067a524917c43692db484d0447cfb)), closes [#7](https://github.com/kienhoefr/Drinklist/issues/7)


### Bug Fixes

* **angular:** more API implementation fixes ([9ce493d](https://github.com/kienhoefr/Drinklist/commit/9ce493d427c566272901e2d4c0cb46d48743dea9))
* **express:** send a response on transaction rollback ([c7bd743](https://github.com/kienhoefr/Drinklist/commit/c7bd7438754b61cf693d6d1211da8a311aac7b9c))
* **sql:** stock now decreases when ordering a beverage ([44f9064](https://github.com/kienhoefr/Drinklist/commit/44f90642df5f76b3b5dd1f6229f05ecb0e23056f))

### [2.0.3](https://github.com/kienhoefr/Drinklist/compare/v2.0.2...v2.0.3) (2023-01-25)


### Bug Fixes

* **angular:** correctly implement api endpoints ([6f6f72b](https://github.com/kienhoefr/Drinklist/commit/6f6f72b97069a14c2cff3ecf27d369a613f2757d))

### [2.0.2](https://github.com/kienhoefr/Drinklist/compare/v2.0.1...v2.0.2) (2023-01-24)


### Bug Fixes

* **express:** fix jwt.decode() is not a function ([7696994](https://github.com/kienhoefr/Drinklist/commit/76969946a00e8ad412bda1bb2c77338bb7c7d0f2))

### [2.0.1](https://github.com/kienhoefr/Drinklist/compare/v2.0.0...v2.0.1) (2023-01-24)

## [2.0.0](https://github.com/kienhoefr/Drinklist/compare/1.4.0...v2.0.0) (2022-12-26)


### ⚠ BREAKING CHANGES

* **express:** remove JWT signature from session list
* **angular:** implement login with JWT
* **express:** use JWT as login tokens

### Features

* **angular/admin:** adapt admin UI to new API ([3f546a5](https://github.com/kienhoefr/Drinklist/commit/3f546a5d4caba13accc6323862f01b42bc11093d))
* **angular:** adapt user UI to API changes ([b898603](https://github.com/kienhoefr/Drinklist/commit/b8986036727060e7346496563bea0bdc88a478c2))
* **angular:** implement login with JWT ([509b811](https://github.com/kienhoefr/Drinklist/commit/509b811b198e529848c72e86ec929169f049b2eb))
* build docker images for dev branch ([b81c84e](https://github.com/kienhoefr/Drinklist/commit/b81c84eaffa4341c12a7dc30a561096df5c7ae23))
* **express:** add base controller ([cd00174](https://github.com/kienhoefr/Drinklist/commit/cd00174ef5f6e00ad4907623a4975d1fc2a6869e))
* **express:** add endpoint for retrieving single beverages by id ([ba4f9bb](https://github.com/kienhoefr/Drinklist/commit/ba4f9bbef62d729e6d0d22bb02a4b8e3c067c6ab))
* **express:** add some error logging to DbService ([eca4ce3](https://github.com/kienhoefr/Drinklist/commit/eca4ce362a61ead9505eae40e5d17dd3faab8d6f))
* **express:** add transactions controller ([fd2104e](https://github.com/kienhoefr/Drinklist/commit/fd2104ebdd0b673925f7ba7c26bceaa0a2165c64))
* **express:** change async handler ([f51aa29](https://github.com/kienhoefr/Drinklist/commit/f51aa29c734bb6d613754d4e9b2c4622b626fed0))
* **express:** change database migration to work with new transaction types ([5d460eb](https://github.com/kienhoefr/Drinklist/commit/5d460eb605d48a0e7d9b78e34c298b7c3c926a67))
* **express:** convert database fields to camelCase on retrieval ([26704dd](https://github.com/kienhoefr/Drinklist/commit/26704dd93581faf64024d31019ddf635109e0f81))
* **express:** only set deleted flag upon user deletion ([63afde3](https://github.com/kienhoefr/Drinklist/commit/63afde3379ce9b7f098b158be991515f0d13daa8))
* **express:** use JWT as login tokens ([9ae8985](https://github.com/kienhoefr/Drinklist/commit/9ae8985c2254a8cc59efad2064aa26f25541c1fb))
* **first-start:** add initial configuration webpage ([9e3bf43](https://github.com/kienhoefr/Drinklist/commit/9e3bf435db3591224cb78117a993618f16b1b1a4))
* **frontend/admin:** add settings page to edit user-settings from the web ([01f0af7](https://github.com/kienhoefr/Drinklist/commit/01f0af7001e9ee9da85dc796b29e06c637474203))
* push to docker hub with workflows ([863de1c](https://github.com/kienhoefr/Drinklist/commit/863de1c9495c8db4e8aab46fe62210d5c8080cde))
* **sql:** add table for beverage stock movements ([8c51562](https://github.com/kienhoefr/Drinklist/commit/8c51562b04a7e2269a50b8be5de499c073eddc7e))
* stock display on user detail can now be toggled via settings ([3568496](https://github.com/kienhoefr/Drinklist/commit/35684969642e290f2c453a03ffc52af4450964d5))


### Bug Fixes

* admins can now set user balances again ([b8b4c38](https://github.com/kienhoefr/Drinklist/commit/b8b4c38c7dee05241fc837fc761751a552047985))
* **angular/admin:** add ID to User and Beverage in UI ([ef8f39c](https://github.com/kienhoefr/Drinklist/commit/ef8f39ce12b42bc10aa92bb6f922252c5180d4ae))
* **angular/user:** don't show footer on user list if ticker is disabled ([cefdaa9](https://github.com/kienhoefr/Drinklist/commit/cefdaa91812fea0c8d777d149e011f49a55dcd08))
* **angular:** add missing locale strings ([f6c07b8](https://github.com/kienhoefr/Drinklist/commit/f6c07b87283ab4e9d3a940683f42710ea83f28b6))
* **angular:** add name attribute ([03f1155](https://github.com/kienhoefr/Drinklist/commit/03f1155ab2abffd54d73c7fc98100243043ce344))
* **angular:** don't display hidden users even if backend sends them ([a8d5c9f](https://github.com/kienhoefr/Drinklist/commit/a8d5c9fcced78e7bb42a7e66ac6d4f9dd086731a))
* **angular:** prefer ESM imports ([4f266a2](https://github.com/kienhoefr/Drinklist/commit/4f266a2cfcc92bf44494c4a44fe4f88a42d4cf01))
* **angular:** remove unnecessary string literal ([db2d6b5](https://github.com/kienhoefr/Drinklist/commit/db2d6b50a5aad167e34301958a6b8e998a764b92))
* change nomenclature to transactions in stats ([ac5cb35](https://github.com/kienhoefr/Drinklist/commit/ac5cb357c473608e6171366285fd217d1ddc99b8))
* **ci:** update GitHub Actions dependencies ([394b62b](https://github.com/kienhoefr/Drinklist/commit/394b62b6d09f6de65ed95aecf1833447b5fd0b96))
* **express:** add Connection header on setup API calls ([38c53c7](https://github.com/kienhoefr/Drinklist/commit/38c53c751308c21552675658b92c643e03b294f9))
* **express:** add ON DELETE to FK relationships ([3ee1d5c](https://github.com/kienhoefr/Drinklist/commit/3ee1d5c6ac0b8ca5f2cfbbe419deabd2cd06f352))
* **express:** change route initialization ([902cab1](https://github.com/kienhoefr/Drinklist/commit/902cab1a77a2453792cfb17a5366d82d308025eb))
* **express:** correctly determine txnType in getUserTransactions ([d581046](https://github.com/kienhoefr/Drinklist/commit/d5810466bff2eb8f9fe808246ad8c71891a76e50))
* **express:** don't try to get keys of undefined ([0a91b32](https://github.com/kienhoefr/Drinklist/commit/0a91b32f608dc4f83d7442bc289865b4a62981b9))
* **express:** fix incomplete implementation of undoBeverageTransaction ([b92bf71](https://github.com/kienhoefr/Drinklist/commit/b92bf71099520c8c33e51c51b55fce437ff18a33))
* **express:** fix return statements where return type is ambiguous ([8bf1380](https://github.com/kienhoefr/Drinklist/commit/8bf13800dfc145a8459a45c29a5405701a1648c5))
* **express:** fix shutdown logic ([aeb6de1](https://github.com/kienhoefr/Drinklist/commit/aeb6de1d869ded21874d315887f47a7233861930))
* **express:** fix topBeverages view definition ([b8af502](https://github.com/kienhoefr/Drinklist/commit/b8af50247d1ef9525516a48e4d24ecde99a0f5f9))
* **express:** fix typo ([5247482](https://github.com/kienhoefr/Drinklist/commit/52474825d5ae93f647490cc2961ae4a76c2748d5))
* **express:** losen too restrictive permission constraints ([3d0d1e7](https://github.com/kienhoefr/Drinklist/commit/3d0d1e79b740436d3c507847589119b0905e3013))
* **express:** make sure data dir exists before migrating ([f427653](https://github.com/kienhoefr/Drinklist/commit/f427653e5065e7358851883e230b17114f852576))
* **express:** partially revert aeb6de1d869ded21874d315887f47a7233861930 ([1ddd44c](https://github.com/kienhoefr/Drinklist/commit/1ddd44c5244112b327cc634ddf8a910c0abfe227))
* **express:** remove JWT signature from session list ([5d7a04b](https://github.com/kienhoefr/Drinklist/commit/5d7a04bd540717199c4a73721052c95deeffa2d1))
* **express:** return semantically correct status on wrong login ([44fe0bf](https://github.com/kienhoefr/Drinklist/commit/44fe0bf6d5c4d70830d3cc95d11ebb158abd1845))
* **first-start:** don't change origin when port does not change ([4911e9a](https://github.com/kienhoefr/Drinklist/commit/4911e9a0cbdd9821c155be8b59b05f09af7dc90f))
* remove docker workaround ([2ee25fc](https://github.com/kienhoefr/Drinklist/commit/2ee25fcb81465c66fa51cc3e212f2f257c0a9bf2))
* **sql:** change transaction.amount row affinity to INTEGER ([51461b7](https://github.com/kienhoefr/Drinklist/commit/51461b70320efcc19d4414e36b8f14666a64779b))

## [1.3.0](https://github.com/kienhoefr/Drinklist/compare/1.2.0...1.3.0) (2021-03-08)


### Features

* **express/api:** add api module ([c12b492](https://github.com/kienhoefr/Drinklist/commit/c12b49242f3f793bf3f086e50225b1d634fec80c))
* **express/api:** add auth service, middleware and controller ([95f4bff](https://github.com/kienhoefr/Drinklist/commit/95f4bff2544d25fea7f7933abfce65db992506cc))
* **express/api:** add backup endpoint ([f17c82f](https://github.com/kienhoefr/Drinklist/commit/f17c82f7ff48991ba2f1d413b2347799df6a62d7))
* **express/api:** add beverages controller and service ([ff85d8c](https://github.com/kienhoefr/Drinklist/commit/ff85d8cd056d76b949fce70b79407af1d98e3402))
* **express/api:** add db service ([67ece96](https://github.com/kienhoefr/Drinklist/commit/67ece9670ad3ede92106e07ebdb1d06113de1280))
* **express/api:** add dedicated api 404 handler ([a330eba](https://github.com/kienhoefr/Drinklist/commit/a330ebab8a9cdabcf6f37674efd6efd6ac4b1053))
* **express/api:** add orders controller and service ([18249ae](https://github.com/kienhoefr/Drinklist/commit/18249aeb8844f28cf887be67e65de08987a781f4))
* **express/api:** add stats controller and service ([859be2d](https://github.com/kienhoefr/Drinklist/commit/859be2d621e01431e8b17a4883835dc00245224c))
* **express/api:** add user controller and service ([7f5d435](https://github.com/kienhoefr/Drinklist/commit/7f5d435d2fc2592cc7a93473dedbdfbdf6886fd9))
* **express/frontend:** add frontend module ([e018417](https://github.com/kienhoefr/Drinklist/commit/e018417ce7e29dc0c65a1da5418e67cfb0d43863))
* **express:** add error log on request failure due to error ([2bb7eec](https://github.com/kienhoefr/Drinklist/commit/2bb7eec9afcd698f99a2a0c5b6efcba05cdc1831))
* **express:** setup basic express structure ([892542f](https://github.com/kienhoefr/Drinklist/commit/892542fd588c1ae34591ac63c606bcbb06a20943))
* **setup:** update setup to respect new config file structure and use better-sqlite3 ([eda84aa](https://github.com/kienhoefr/Drinklist/commit/eda84aa4e6203a45f09e896c275a23927ca17a8e))


### Bug Fixes

* **angular/admin:** better handle empty databases ([8a2f77d](https://github.com/kienhoefr/Drinklist/commit/8a2f77d58d5b9071a656cf0efc27040b5ed7d7f4))
* **Dockerfile:** make sure npm is always able to install dependencies ([31afc07](https://github.com/kienhoefr/Drinklist/commit/31afc07cb27e35c99932efb39ebe43c620399870))
* **express/api:** add invalid request handler to logout endpoint ([5dc16fd](https://github.com/kienhoefr/Drinklist/commit/5dc16fd32079c388a9abeca6932d31d48a30dc25))
* **express/api:** add missing return statements when sending error responses ([e17d1b5](https://github.com/kienhoefr/Drinklist/commit/e17d1b51ec391b150d49176fa62699a12ed6aadb))
* **express/api:** add missing slash ([5a4a732](https://github.com/kienhoefr/Drinklist/commit/5a4a732877a325184a7aa3763ea75a803b371479))
* **express/api:** fix order creation ([f2a5575](https://github.com/kienhoefr/Drinklist/commit/f2a5575403d09e45a7366ca7dd1c9532d40beab5))
* **express/api:** use correct method ([5aba5b1](https://github.com/kienhoefr/Drinklist/commit/5aba5b1f84bd81650e1b168ed218c88d9bf8cfde))
* fix angular config ([6c559ec](https://github.com/kienhoefr/Drinklist/commit/6c559ecef390b1df6eb146ced0034e57d413b5ad))
* **setup:** add required html tags and attributes to default legal and imprint files ([ef237d8](https://github.com/kienhoefr/Drinklist/commit/ef237d808195717a6883e1442ed430c2c6498450))

## [1.2.0](https://github.com/kienhoefr/Drinklist/compare/v1.0.0...1.2.0) (2021-02-01)


### Features

* **api:** add several REST endpoints for statistics ([9951124](https://github.com/kienhoefr/Drinklist/commit/99511240150f05d421982e713dee9561c25c38ef))
* **api:** beverages can now be created with stock ([385b704](https://github.com/kienhoefr/Drinklist/commit/385b70487efa81a4b596e127fdab256d779ecc36))
* **frontend/admin:** add admin dashboard which displays some statistics ([7597ae8](https://github.com/kienhoefr/Drinklist/commit/7597ae8f6b4ea720964f7cde06e83d6e1f1e6b49))
* **frontend/admin:** add admin page wrapping all admin content ([24d9d17](https://github.com/kienhoefr/Drinklist/commit/24d9d176d4b9cf13b6e868bcd72ff882630f66e4))
* **frontend/admin:** add beverages module ([6a47dba](https://github.com/kienhoefr/Drinklist/commit/6a47dbac9f66e208883ee804bed5b01bc17c7d4f))
* **frontend/admin:** add download DB dump button ([92c8a28](https://github.com/kienhoefr/Drinklist/commit/92c8a2806d35ddea7b78e99bc3cc88ce88d1b437))
* **frontend/admin:** add history module ([33ea6ae](https://github.com/kienhoefr/Drinklist/commit/33ea6ae40ba2ed7763d16d0ec75ebe65c9c202c2))
* **frontend/admin:** add tokens module ([a5f789f](https://github.com/kienhoefr/Drinklist/commit/a5f789f8482a18df5170a117f87407db69a4fae9))
* **frontend/admin:** add users module ([930c0d3](https://github.com/kienhoefr/Drinklist/commit/930c0d3059a99c5ea5e6e71d3b6414ec844b582f))
* **frontend/admin:** admin module selector can now have spacers ([8a9c0a3](https://github.com/kienhoefr/Drinklist/commit/8a9c0a363f1aa41027100133543ada5da7351b48))
* **frontend/AdminBeverages:** add list search ([0e2f73f](https://github.com/kienhoefr/Drinklist/commit/0e2f73fa52daaddcdec6ae75e7f41173c2274142))
* **frontend/admin:** improve UX of admin-modals, also add form validation to modals ([f71f1b2](https://github.com/kienhoefr/Drinklist/commit/f71f1b29c04a8f541117324486fc6d0190dd645b))
* **frontend/AdminLogin:** add admin login page ([2efa162](https://github.com/kienhoefr/Drinklist/commit/2efa1627b86bff808161a5e07dd80b48e030d9e2))
* **frontend/login:** add error handling ([107afa2](https://github.com/kienhoefr/Drinklist/commit/107afa271ecd8711db65335738984f91c51f0e53))
* **frontend/login:** skip login page if user is already logged in ([1418e04](https://github.com/kienhoefr/Drinklist/commit/1418e04295bc24f5f369a69ba82c40efc2dec507))
* **frontend/user-list:** add user-list ([6ce06a7](https://github.com/kienhoefr/Drinklist/commit/6ce06a73c0029575f8cf3c1d11098917e83d7dc2))
* **frontend/UserLogin:** clear password field password is rejected ([8ee85ce](https://github.com/kienhoefr/Drinklist/commit/8ee85ce553a8d5050a5e47440d422fe8b53e380d))
* **frontend:** add 'recently bought' ticker ([541e27e](https://github.com/kienhoefr/Drinklist/commit/541e27e7809665030e2274f9a00fe9c6155e547e))
* **frontend:** implement user detail page ([8806658](https://github.com/kienhoefr/Drinklist/commit/8806658efdff2950a67273674f7f396fda2e01a3))


### Bug Fixes

* always display top 5 beverages, substituting deleted beverages with next beverage ([8845604](https://github.com/kienhoefr/Drinklist/commit/88456045cebdc51c3c4ab28f072303f22c79226d))
* **api:** filter out transactions without beverage when calculating the top 5 beverages ([1f3fcb8](https://github.com/kienhoefr/Drinklist/commit/1f3fcb842a5a75131fe1225f0b7d4c036b9276ca))
* **api:** top beverages now have the correct sorting ([4c193bf](https://github.com/kienhoefr/Drinklist/commit/4c193bfd338dd969d437fe01c3dbff2c8a9e0572))
* downgrade sqlite3 package to v5.0.0 ([1c2d9df](https://github.com/kienhoefr/Drinklist/commit/1c2d9df9d820fa66945d385eca55244424748dd6))
* **frontend/AdminBeverages:** first table column no longer glitches when row count becomes zero ([982f976](https://github.com/kienhoefr/Drinklist/commit/982f9762236aab469b990a3e381c8ebaba316bf1))
* **frontend/AdminBeverages:** remove unnecessary horizontal rule ([0a6ed98](https://github.com/kienhoefr/Drinklist/commit/0a6ed98420d4711c1e1501ef047299c10d05631c))
* **frontend/AdminDashboard:** catch undefined values in template bindings ([4382006](https://github.com/kienhoefr/Drinklist/commit/438200692ec831c96d320eb55e40d47c0520b893))
* **frontend/admin:** remove debug module selector from sidebar ([8a174e0](https://github.com/kienhoefr/Drinklist/commit/8a174e0222489faf527ca9b784443bfa8266ae41))
* **frontend/AuthService:** adminToken now returns the correct token ([63e42a4](https://github.com/kienhoefr/Drinklist/commit/63e42a4f4363053ee946c64a340ed8687848a1f1))
* **frontend/AuthService:** handle different api behavior for admin and user token ([bc48d8c](https://github.com/kienhoefr/Drinklist/commit/bc48d8c273bc7f3598d3a79403f7cf6b086cbe72))
* **frontend/config:** trim trailing slash on api url ([a596d8a](https://github.com/kienhoefr/Drinklist/commit/a596d8ac717289f8c74ba0e8ffcca3f72ee4f32d))
* **frontend/UserDetailPage:** add workaround for race-condition described by 43e26d51 ([665242b](https://github.com/kienhoefr/Drinklist/commit/665242b24f7fc2abc632ba0a80132e9fbbcb9cbb))
* **frontend/UserService:** fix typo in comment ([9f93543](https://github.com/kienhoefr/Drinklist/commit/9f935431fb3c0fb6c7fb61d3d870d4884c1cdd4d))
* **frontend:** correctly assess whether we're in user or admin mode and whether we're logged in ([799eb9c](https://github.com/kienhoefr/Drinklist/commit/799eb9ce167fde39afdb97ca6250dce7f0a2ba8a))
* **frontend:** no longer ignore API returning 0 for counting stats ([8c385e3](https://github.com/kienhoefr/Drinklist/commit/8c385e3421daad895f183bc8921e96c29be6e410))
* **frontend:** remove leftover debug output ([576b36f](https://github.com/kienhoefr/Drinklist/commit/576b36f05d02cebca40dc8641dc3033998aaffee))
* **frontend:** use correct data type on getUsers() ([16c90e1](https://github.com/kienhoefr/Drinklist/commit/16c90e1fdc989e78e07e6e7748f0970a88dd958e))
* **setup:** remove adminPath from settings ([86df6dd](https://github.com/kienhoefr/Drinklist/commit/86df6dda7114e0a5785a9c9c64a58d342f726a8f))

## 1.0.0 (2019-11-27)
