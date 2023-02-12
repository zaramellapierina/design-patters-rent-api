# design-patters-rent-api
This project is an api for Rent Apartments. The first approach it be able to search and see the details of the apartments. 
## Table of contents:

- [Getting started](#getting-started)
- [Design Patterns](#design-patterns)
	- [Factory Method](#factory-method)
    - [Builder](#builder)

# Getting started
# Design Patterns
# Factory Method
It's a creational pattern, that allow to create new implementations of object families based on an common abstraction definition.

The pattern was implemented for create differents apartments typologies. The TypologyFactory has two implementation ButterflyTipology and TwoDOneBTypology. The files are in:
    - /src/domain/entities/typologies/factory
        - /src/domain/entities/typologies/factory/TypologyFactory.ts
        - /src/domain/entities/typologies/factory/impl

Also, the Simple Factory patterns was used, for delegate the creation of the implemented TypologyFactory.

# Builder
Javascript is based on this pattern .filter().toString(). Allow to build objects by concatenations of actions.
This Eg. It's an aproximation of this pattern.
The files are in:
    - src/adapters/utils/queryBuilder
    - Used in: src/adapters/controller/RentFilterController.ts


#Work in progress
- Create array for specific building typologies, not all typologies type
- Add de filter by typology.
