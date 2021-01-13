# Apollo GraphQL
### **What is GraphQl**

>GraphQL is one of the most modern ways of building and querying APIs. It is a syntax that describes how to ask for data, and is generally used to load data from a server to a client. GraphQL is a query language for your API.\
With GraphQL, the user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same.
>>GraphQL was developed internally by Facebook in 2012.

>GraphQL has three main characteristics:

>- It lets the client specify exactly what data it needs.
>- It makes it easier to aggregate data from multiple sources.
>- It uses a type system to describe data.

>It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned.

>A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON back to the client.

### **Schema**
>The GraphQL schema is at the center of every GraphQL server. Every data graph uses a schema to define the types of data it includes. It defines the server's API, allowing clients to know which operations can be performed by the server.\
The schema is written using the GraphQL schema language (Schema Definition Language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API.
You can define root types that define the group of operations that the API allows.\
There are three root types:
>- Query
>- Mutation
>- Subscription
>>The query type is compulsory for any GraphQL schema, while the other two are optional.\

>Your GraphQL server uses a schema to describe the shape of your data graph. This schema defines a hierarchy of types with fields that are populated from your back-end data stores.

### **Resolvers**
> Apollo Server needs to know how to populate data for every field in your schema so that it can respond to requests for that data. To accomplish this, it uses resolvers. Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler and resolves a value for a type or field in a schema.\
Resolvers can return objects or scalars like Strings, Numbers, Booleans, etc. 
>> If you don't define a resolver for a particular field, Apollo Server automatically defines a default resolver for it.\

> Every resolver in every language receives four arguments:
>- root — Result from the previous/parent type
>- args — Arguments provided to the field
>- context — a Mutable object that is provided to all resolvers
>- info — Field-specific information relevant to the query (used rarely)

> Each field on each type is backed by a resolver provided by the GraphQL server developer. When a field is executed, the corresponding resolver is called to produce the next value. If a field produces a scalar value like a string or number, then the execution completes.

# **GraphQL vs REST**
REST (Representational state transfer) is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.
A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.
>When a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.\

### **Key difference**
#### Data fetching
>The most significant improvement that GraphQL introduced is data fetching. In a typical REST API, to fetch or retrieve data from a server, we might end up making requests to multiple endpoints. But with GraphQL, we only have one endpoint with which we access data on a server. With a single request, we can get an object and its related objects./

### Network Requests
> REST implementation have different endpoints and to fetch the data, we will have to make different requests to the server. In the GraphQL implementation on the other hand only a single request to the server is enough. GraphQL reduces network requests by allowing us fetch or retrieve all the data we need in a single query.

### Over/Under Fetching
> It is easy to fetch more than the data you need with REST, because each endpoint in a REST API has a fixed data structure which it is meant to return whenever it is hit. So, most times we just make do with the data we need and end up ignoring the rest. Also, REST makes it easy to under fetch data hence making us perform additional requests to other endpoints in order to fetch associated data./
With GraphQL that is not the case. Because GraphQL is a declarative data fetching specification and a query language, we only fetch what we need from the server by constructing our query to only include what we need.

### Error Handling
> Error handling in REST is pretty straightforward, we simply check the HTTP headers to get the status of a response. Depending on the HTTP status code ( 404, 503, 500 etc) we get, we can easily tell what the error is and how to go about resolving it. GraphQL on the other hand, when operated over HTTP, we will always get a 200 OK response status. When an error occurs while processing GraphQL queries, the complete error message is sent to the client with the response.
