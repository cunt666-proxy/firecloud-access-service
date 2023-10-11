# 📁 Collection: Account ( Manager )


## End-point: Read List
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/accounts
>```
### Response: 200
```json
[
    {
        "_id": "652460544282c45b045fe0d3",
        "username": "adminson",
        "password": "$2a$10$EPRbw8GTqmG7lbhHrGLT..LQM49nefoevRwpzPODibbYvx0064Mn6",
        "isRoot": true,
        "isVerified": false,
        "keys": {
            "privateKey": "0b91ab574b79a41537d98de925a38bb61293f6b5e2123e862b2fe113549dd0be18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4",
            "publicKey": "18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4"
        },
        "createdAt": 1696882773042,
        "updatedAt": 1696886544175,
        "lastLoggedIn": 1696888494761
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read By ID
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/accounts/652460544282c45b045fe0d3
>```
### Response: 200
```json
{
    "_id": "652460544282c45b045fe0d3",
    "username": "adminson",
    "password": "$2a$10$EPRbw8GTqmG7lbhHrGLT..LQM49nefoevRwpzPODibbYvx0064Mn6",
    "isRoot": true,
    "isVerified": false,
    "keys": {
        "privateKey": "0b91ab574b79a41537d98de925a38bb61293f6b5e2123e862b2fe113549dd0be18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4",
        "publicKey": "18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4"
    },
    "createdAt": 1696882773042,
    "updatedAt": 1696886544175,
    "lastLoggedIn": 1696888494761
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update By ID
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: PATCH
>```
>http://127.0.0.1:3011/v1/api/accounts/652460544282c45b045fe0d3
>```
### Body (**raw**)

```json
{
    "username": "manager"
}
```

### Response: 200
```json
{
    "username": "manager",
    "password": "$2a$10$EPRbw8GTqmG7lbhHrGLT..LQM49nefoevRwpzPODibbYvx0064Mn6",
    "isRoot": true,
    "isVerified": false,
    "keys": {
        "privateKey": "0b91ab574b79a41537d98de925a38bb61293f6b5e2123e862b2fe113549dd0be18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4",
        "publicKey": "18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4"
    },
    "createdAt": 1696882773042,
    "updatedAt": 1696890067478,
    "lastLoggedIn": 1696888494761,
    "_id": "652460544282c45b045fe0d3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete By ID
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: DELETE
>```
>http://127.0.0.1:3011/v1/api/accounts/652460544282c45b045fe0d3
>```
### Response: 400
```json
{
    "status": 400,
    "error": "Account cannot be deleted."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Policies ( Manager )


## End-point: Create
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/policies
>```
### Body (**raw**)

```json
{
    "rules": [
        { "action": "read", "subject": "account" }
    ]
}
```

### Response: 400
```json
{
    "status": 400,
    "error": "Rules is required option"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update
### Method: PATCH
>```
>http://127.0.0.1:3011/v1/api/policies/6524802f80f91893af070abb
>```
### Body (**raw**)

```json
{
    "rules": [
        { "action": "create", "subject": "account" }
    ]
}
```

### Response: 200
```json
{
    "rules": [
        {
            "action": "create",
            "subject": "account",
            "_id": "652482371769b341a70f5e2a"
        }
    ],
    "owner": "652460544282c45b045fe0d3",
    "createdAt": 1696890927475,
    "updatedAt": 1696891447890,
    "_id": "6524802f80f91893af070abb"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read List
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/policies
>```
### Response: 200
```json
[
    {
        "_id": "6524802f80f91893af070abb",
        "rules": [
            {
                "action": "read",
                "subject": "account",
                "_id": "6524802f80f91893af070abd"
            }
        ],
        "owner": "652460544282c45b045fe0d3",
        "createdAt": 1696890927475,
        "updatedAt": 1696890927475
    },
    {
        "_id": "6524806680f91893af070abe",
        "rules": [
            {
                "action": "read",
                "subject": "account",
                "_id": "6524806680f91893af070ac0"
            }
        ],
        "owner": "652460544282c45b045fe0d3",
        "createdAt": 1696890982852,
        "updatedAt": 1696890982852
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read By ID
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/policies/6524806680f91893af070abe
>```
### Response: 200
```json
{
    "_id": "6524806680f91893af070abe",
    "rules": [
        {
            "action": "read",
            "subject": "account",
            "_id": "6524806680f91893af070ac0"
        }
    ],
    "owner": "652460544282c45b045fe0d3",
    "createdAt": 1696890982852,
    "updatedAt": 1696890982852
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete
### Method: DELETE
>```
>http://127.0.0.1:3011/v1/api/policies/6524806680f91893af070ab3
>```
### Response: 200
```json
{
    "status": true
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Account


## End-point: Registration
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/account
>```
### Body (**raw**)

```json
{
    "username": "admin",
    "password": "password"
}
```

### Response: 400
```json
{
    "status": 400,
    "error": "Username must be at least 4 characters long, Password must be at least 6 characters long"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: PATCH
>```
>http://127.0.0.1:3011/v1/api/account
>```
### Body (**raw**)

```json
{
    "username": "adminson",
    "password": "newpassword"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.._Naln079Qxm-0Pnfp3ObnQ.Owv-oNE-69qmf9Vj25RB5gH_lpi9qkQ6kx6tuybpZj4Xx-wj3qgOBpVGaYI115GxzsjWjhguNbhnmW1IakZDFoHtqiA_ME8IadEd5OoIl2oYRluYt1KOVmnkRSpenSGe70vPStfC9HctaPluu_08Tzznz9BWOAWVL3JT57CPXs80En7ahVB6-i5l-AZryEelHDXeZgg9bJAUqbETNsmweWeR4qS4qEq_HMP8sgR0HqfFtVu06yN5EUdg-gACvW8QlWye7vdqVcFcpYnYVd0qbg.c8P8zzt_ABO4XvZcLlSdJw|string|


### Response: 400
```json
{
    "status": 400,
    "error": "Username must be at least 4 characters long, Password must be at least 6 characters long"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Token
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/account/token
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJkaXIiCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..2k-a6Ep4sSOQHuw0Kmg_Vg.eaiHtTs65yITSAYWrnLfQJODeEBe8tGgRN3ol-qW0lLJ0SQaTJaMWZP6KSHgn6YwOj06jGMArvGw4Pg-zcvwY4K5Ph-tISS1P_1Jcaf_wDnuXDErxyCd89J07Ez-FPgv831-h1EFt_lNQcaMDYJeYpTThhXSmE-URj9mt4PbspoI8DVfRWkEUNdPqD-LBZQCwSc250lW-NWjZdF382zzkJ-rJkehpmAP3UnkXLPgtT61fmI1FHRc_Z5PitBu6IKgoT0E0wANgcQ8Zkze_HdbVQ.szJRP1M0ak8g_saTecfUmQ|string|


### Response: 200
```json
{
    "_id": "652460544282c45b045fe0d3",
    "username": "admin",
    "password": "$2a$10$F4mB09gDpzUSi1ZPTtVjZ.OQ8FbfApWw99ZmqyV4H8l.n4OKt1W2y",
    "isRoot": true,
    "isVerified": false,
    "keys": {
        "privateKey": "0b91ab574b79a41537d98de925a38bb61293f6b5e2123e862b2fe113549dd0be18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4",
        "publicKey": "18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4"
    },
    "createdAt": 1696882773042,
    "updatedAt": 1696882773043,
    "lastLoggedIn": 1696882864268,
    "token": {
        "_id": "652460af70326bee7e3dc543",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696969263,
        "salt": "$2a$10$LJ1b3cvlxrDJwl3jcVOOme",
        "createdAt": 1696882863728
    },
    "policy": {
        "h": false,
        "l": {},
        "p": "manage",
        "g": "all",
        "A": [
            {
                "action": "manage",
                "subject": "all"
            }
        ],
        "j": {}
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Refresh
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/account/token/refresh
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..5x4bwH6VBIj8oXYZsEC1lg.f2HizKnkXE9JKM1DPHLdZdQhDirqzss3KRnQWBFc44X6EVYkjz0XFprHGwIwTIuoO3Ms9uU0em645SCtxy81-z2RUuboewDTT13krW53bp4-ptJsUSm1BuvnC4fkQB0ltOEynMydZuRlTaV-Yu4OcbPi2wlnw-KAXZD3lAkyrLQRcuOl3u8ATA5hEhUQBxqJynzwnoK9gGqcBS-Vl-dZK8SV73AB-yOE-ZaJ6T__VMdBbajVuNC8u6jKwPuEvxYPGn8Tp-k8Ebj8eH729e5sCQ.d27ihdkvt8NgnxhyOPCkTw|string|


### Response: 200
```json
{
    "_id": "652460544282c45b045fe0d3",
    "username": "adminson",
    "password": "$2a$10$EPRbw8GTqmG7lbhHrGLT..LQM49nefoevRwpzPODibbYvx0064Mn6",
    "isRoot": true,
    "isVerified": false,
    "keys": {
        "privateKey": "0b91ab574b79a41537d98de925a38bb61293f6b5e2123e862b2fe113549dd0be18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4",
        "publicKey": "18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4"
    },
    "createdAt": 1696882773042,
    "updatedAt": 1696886544175,
    "lastLoggedIn": 1696888336169,
    "token": {
        "access": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..PmoL8H2xL1p9QFJZofWH-A.Mb5kZDkrHyQVqoAK1Pq3_uMUNwwuo9CKtbWJeVggXZAG0n2fmMEb_wQnWux2OCrbT-9uT4ZNipriadE1ad7bxqtg3C15bviWvGEvQqXflbFlbAygUi_5WeuaODwdjz49Spbl1_o0r1n1uYcB8cP80LRejuMfwShcshbF94Msf7LDSRAGf4-xuGl2GdyWZ3I4gJW5Cgg_vnZIZVoHg8RQz7WQm_srt_dInx_NaJQXhacAPcQyD9oQosvQOCE2IPPsyb28KdbHVYLgj3DoLxkQ2Q.qVW6J0hfneqMxYljoNsYJA",
        "refresh": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..O4mNFhGvYyukLYVqysFRTQ.Lyrkga0Tewf6ovxqFNqX4UJQz9T9Fk7YOtX9RikfhD7Rqvjn5xcqehGyqypelqh59USRXw3ny-CPwmPLdjPBsjISlilpwuNczmBeyfpQf0yD4o_j65jQlKvbYKkduOSn0Nhnv9qEdtivMmynTLI4hIXsfi0m1nN4zS-UH6j8DZ19w3HpgNiH_d9OCFOWlsjC9K0RLX7XyKUCp8i1paUrBxkRBAJhMF0CBEOMlboRuOkQ53zPNcGisNIag6wC9jjqbM6xlTiRAZuk5ONMOecl1Q.Il4jeYbH1vXzvyXYH5-jLQ"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Local
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/account/local
>```
### Body (**raw**)

```json
{
    "username": "adminson",
    "password": "newpassword"
}
```

### Response: 200
```json
{
    "_id": "652460544282c45b045fe0d3",
    "username": "admin",
    "password": "$2a$10$F4mB09gDpzUSi1ZPTtVjZ.OQ8FbfApWw99ZmqyV4H8l.n4OKt1W2y",
    "isRoot": true,
    "isVerified": false,
    "keys": {
        "privateKey": "0b91ab574b79a41537d98de925a38bb61293f6b5e2123e862b2fe113549dd0be18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4",
        "publicKey": "18a6d8e7111113643cebeecad007d9b54fa915ba5ac86539e4a5ee2c3e5c68c4"
    },
    "createdAt": 1696882773042,
    "updatedAt": 1696882773043,
    "lastLoggedIn": 1696882773043,
    "token": {
        "access": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..2k-a6Ep4sSOQHuw0Kmg_Vg.eaiHtTs65yITSAYWrnLfQJODeEBe8tGgRN3ol-qW0lLJ0SQaTJaMWZP6KSHgn6YwOj06jGMArvGw4Pg-zcvwY4K5Ph-tISS1P_1Jcaf_wDnuXDErxyCd89J07Ez-FPgv831-h1EFt_lNQcaMDYJeYpTThhXSmE-URj9mt4PbspoI8DVfRWkEUNdPqD-LBZQCwSc250lW-NWjZdF382zzkJ-rJkehpmAP3UnkXLPgtT61fmI1FHRc_Z5PitBu6IKgoT0E0wANgcQ8Zkze_HdbVQ.szJRP1M0ak8g_saTecfUmQ",
        "refresh": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..-vHMs2C4tc6OII4_iOnKEA.yn-kZOjaM7gq67Y8x_UstAN_81VQmJzCuypVLj-bIJDgrk41LThOyKsQf4k-dbb64G8d_h4ZoapKC8uUlPQLRLM1NsB3QJK6o2yIQFIY4j9gBGuQ0lJt-73p1ZGL28KPf0EUu6mRgkhyYYrjttDT1iM7pjjyFpeWIOU8afNYOTMHESCg9AYkm4AF0Zul155OzVp62rogXAacxPbPRdEp124mAgqweFCm9oskGWp3-abcjWBnDkbfILBF6MScnn0tpyJnJT9KJHZqa5ptmmkcmg.o0YC2hgbd2bNmRR2D4GMgQ"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete
The tests in this request validate that:

- the response code is 200
- the response is a JSON object
- the response has an 'arg' object
- the response has 'headers' object
- the response has a 'URL' property
### Method: DELETE
>```
>http://127.0.0.1:3011/v1/api/account
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..2k-a6Ep4sSOQHuw0Kmg_Vg.eaiHtTs65yITSAYWrnLfQJODeEBe8tGgRN3ol-qW0lLJ0SQaTJaMWZP6KSHgn6YwOj06jGMArvGw4Pg-zcvwY4K5Ph-tISS1P_1Jcaf_wDnuXDErxyCd89J07Ez-FPgv831-h1EFt_lNQcaMDYJeYpTThhXSmE-URj9mt4PbspoI8DVfRWkEUNdPqD-LBZQCwSc250lW-NWjZdF382zzkJ-rJkehpmAP3UnkXLPgtT61fmI1FHRc_Z5PitBu6IKgoT0E0wANgcQ8Zkze_HdbVQ.szJRP1M0ak8g_saTecfUmQ|string|


### Response: 400
```json
{
    "status": 400,
    "error": "Account cannot be deleted."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Policy


## End-point: Create
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/policy
>```
### Body (**raw**)

```json
{
    "rules": [
        { "action": "read", "subject": "account" }
    ]
}
```

### Response: 400
```json
{
    "status": 400,
    "error": "Rules is required option"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update
### Method: PATCH
>```
>http://127.0.0.1:3011/v1/api/policy/6524802f80f91893af070abb
>```
### Body (**raw**)

```json
{
    "rules": [
        { "action": "create", "subject": "account" }
    ]
}
```

### Response: 200
```json
{
    "rules": [
        {
            "action": "create",
            "subject": "account",
            "_id": "652482371769b341a70f5e2a"
        }
    ],
    "owner": "652460544282c45b045fe0d3",
    "createdAt": 1696890927475,
    "updatedAt": 1696891447890,
    "_id": "6524802f80f91893af070abb"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read List
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/policy
>```
### Response: 200
```json
[
    {
        "_id": "6524802f80f91893af070abb",
        "rules": [
            {
                "action": "read",
                "subject": "account",
                "_id": "6524802f80f91893af070abd"
            }
        ],
        "owner": "652460544282c45b045fe0d3",
        "createdAt": 1696890927475,
        "updatedAt": 1696890927475
    },
    {
        "_id": "6524806680f91893af070abe",
        "rules": [
            {
                "action": "read",
                "subject": "account",
                "_id": "6524806680f91893af070ac0"
            }
        ],
        "owner": "652460544282c45b045fe0d3",
        "createdAt": 1696890982852,
        "updatedAt": 1696890982852
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read By ID
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/policy/6524806680f91893af070abe
>```
### Response: 200
```json
{
    "_id": "6524806680f91893af070abe",
    "rules": [
        {
            "action": "read",
            "subject": "account",
            "_id": "6524806680f91893af070ac0"
        }
    ],
    "owner": "652460544282c45b045fe0d3",
    "createdAt": 1696890982852,
    "updatedAt": 1696890982852
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete
### Method: DELETE
>```
>http://127.0.0.1:3011/v1/api/policy/6524806680f91893af070ab3
>```
### Response: 200
```json
{
    "status": true
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Token


## End-point: Read List
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/token
>```
### Response: 200
```json
[
    {
        "_id": "652460554282c45b045fe0d5",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696969173,
        "salt": "$2a$10$Bt5N7CBJik9M4HR5x1.Kn.",
        "createdAt": 1696882773837
    },
    {
        "_id": "652460af70326bee7e3dc543",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696969263,
        "salt": "$2a$10$LJ1b3cvlxrDJwl3jcVOOme",
        "createdAt": 1696882863728
    },
    {
        "_id": "65246f019a5ed8b6bcc67f0a",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696972929,
        "salt": "$2a$10$PR0yMTM0.HElVYLHn8Nk1u",
        "createdAt": 1696886529217
    },
    {
        "_id": "6524739045ce00505766ce46",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696974096,
        "salt": "$2a$10$GlAuZfOJOU8t03fVQMTtQe",
        "createdAt": 1696887696402
    },
    {
        "_id": "652473c46017edca7930d552",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696974148,
        "salt": "$2a$10$q5k9qwm9Uk.uWwUdlBkFYu",
        "createdAt": 1696887748827
    },
    {
        "_id": "652476aeb265c32e8d17d428",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696974894,
        "salt": "$2a$10$gQtXTZARdxyq.feZ1xEiKO",
        "createdAt": 1696888494565
    },
    {
        "_id": "65247e5a99ae65ef967c0617",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696976858,
        "salt": "$2a$10$iJu2qGN4qD/Q4H6MCkbabO",
        "createdAt": 1696890458905
    },
    {
        "_id": "6524815a80f91893af070ac1",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696977626,
        "salt": "$2a$10$6O6AcazkwGGpPerIxKKVc.",
        "createdAt": 1696891226688
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read By ID
### Method: GET
>```
>http://127.0.0.1:3011/v1/api/token/652460554282c45b045fe0d5
>```
### Response: 200
```json
[
    {
        "_id": "652460554282c45b045fe0d5",
        "account": "652460544282c45b045fe0d3",
        "oneTime": false,
        "expiredAt": 1696969173,
        "salt": "$2a$10$Bt5N7CBJik9M4HR5x1.Kn.",
        "createdAt": 1696882773837
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete
### Method: DELETE
>```
>http://127.0.0.1:3011/v1/api/token/652460554282c45b045fe0d5
>```
### Response: 200
```json
{
    "status": true
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create
### Method: POST
>```
>http://127.0.0.1:3011/v1/api/token
>```
### Body (**raw**)

```json
{
    "oneTime": false, // default
    "expiredAt": 3600, //default
    "policy": "6524802f80f91893af070abb" // policy_id
}
```

### Response: 200
```json
{
    "token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..u0k1B_v3okzGNAegSmzH6g.Ws3vhZSrYeQqqUS5-T6CAW_bQunXjRJ8imui8JHi7PGt9Q6piIYgsJFa2wTUhdsc0JCl3YEaVit3CyHdvcq_BUJTFtGTlk8fxD3BVxm7y2HPT6fl9-FdGG-pi2pnszGvPdL-CZZI5viIpY3dgi2uT2t-IoZYChcOQFBgHY00eLbTdVC4dZfeQ9xNXjpXUusjI9WXxI_0MZOPo9vUpA1vjaUaH_JUVVVjMhnjcd7vLPb7DqoDTtpiqjk6mH1TkoD5W5KvVc7ikYO5XpxbrTyeO4WkRyZSu1j_sj4_TPOvrxv4UOnDF96FuhmPeklUhLzoJZi9mvfvuLxbxh4sWjOmbDgMPzChVKEmh0UPsqDKtJk.XRnTXWa-3cIuR8VgKlj1XQ"
}
```
