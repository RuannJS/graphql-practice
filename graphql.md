**GRAPHQL ENTITIES**

_GraphQL entities are created with the @ObjectType() decorator_

GraphQL entity is a Model.

_The entity attributes are created with the @Field() decorator_

You have to tell GraphQL which attribute type you created.

Field ((type) => String)

There are special types, like an ID.

Field((type)=>ID)

_We can also create GraphQL DTO'S to validate field inputs_

@InputType() decorator tells GraphQL that the entity is an input validator.

To validate fields we use class-validator decorators.

_Inputs and outputs are handled in the RESOLVER_

Resolver is just like the CONTROLLER for REST API'S, but for GraphQL

Inside the Resolvers we have Queries and Mutations

Query => Read data

Mutations => Add, update or delete data
