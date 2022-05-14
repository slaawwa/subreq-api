# subreq-api


## Subscription on camera

### DELETE
`/topic/id`
200

### POST
`/topic`
Request: 
`{
 “name”: “Your topic name”,
}`
Response: topic model json


### GET
`/topics`
Response `{ topics: [{ topic model }] }`

### POST
`/startTopic`
`{
 “id”: “topicId”
}`

### POST
`/stopTopic`
`{
 “id”: “topicId”
}`

### GET 
`/rules`
```
[ rules: {
 id: “uuid”,
 active: false,
 name: “Name”,
 configuration: [
  {
   key: “JsonKey”,
   value: “JsonValueOfKey”
  }
 ],
 target: {
  url: “url”,
  queryParams: [{ key: “value” }],
  body: { key: value }
 }
}]
```

### POST
`/rule`
```
{
 name: “Name”,
 configuration: [
  {
   key: “JsonKey”,
   value: “JsonValueOfKey”
  }
 ],
 target: {
  url: “url”,
  queryParams: [{ key: “value” }],
  body: { key: value }
 }
}
```

### DELETE
`/rule/id`

### POST
`/activateRule`
```
{
 “id”: “ruleId”
}
```

### POST
`/deactivateRule`
```
{
 “id”: “ruleId”
}
```

Socket json logs:
```
{
 topic: [ topic model ],
 rules: [ {rule model} ],
 date: “Date”
}
```
