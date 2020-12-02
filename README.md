Software needed:
```
npm install serverless@1.38.0
npm install serverless-artillery@0.5.2
```
Optional:
```
npm install artillery@1.6.1
```

Replace `$YOUR_UNIQUE_ID` with your git tag in the `serverless.yml`


Installing:
```
slsart deploy
```

Running:
```
slsart invoke -p create_script.yml
```
Checking the script changes locally:
```
artillery run create_script.yml
```

Stopping the app:
```
slsart kill --region=us-east-1
```