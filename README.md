#Rediscovery assesment

There are two wasys to get started

If you have docker you can run

```
docker-compose up --build
and visit http://localhost:4000
-- Hot reload works because it's in development
```

Running

```
yarn install
yarn start
and visit http:localhost:4000
```

Testing

```
yarn test
```

I used bootstrap css to handle things like the adaptive css on texts(truncating on smaller screens).
If this was a large project i would have used react/redux instead of react context for easier flow and management with state

@TODO if it was required
- Write more tests
- Onclick the select all or cancel select icon
