# LiveWell Demo

New Chatbot that patients can use to ask questions about their health through the "LiveWell Link" app.

## Required Environmental Variables - stored in .env.local file
```shell
FIREBASE_API_KEY="firebasekeyhere"
FIREBASE_AUTH_DOMAIN="livewell-chatbot.firebaseapp.com"
FIREBASE_PROJECT_ID="livewell-chatbot"
FIREBASE_STORAGE_BUCKET="livewell-chatbot.appspot.com"
FIREBASE_SENDER_ID="100000000"
FIREBASE_APP_ID="1:APP_ID_HERE"
FIREBASE_MEASUREMENT_ID="G-0000000"
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nINSERT HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_ADMIN_CLIENT_EMAIL="firebase-adminsdk-ml7fq@livewell-chatbot.iam.gserviceaccount.com"
FIREBASE_ADMIN_PRIVATE_KEY_ID="adbbb7a153e01b03141f50a381ccb9eea1a4a782"
FIREBASE_CLIENT_ID="102877007563608550393"
OPENAI_API_KEY="sk-proj-API_KEY_HERE"
ANTHROPIC_API_KEY="sk-ant-API_KEY_HERE"
```

## Examples

Here are some questions that work with the chatbot!

1. Weightloss

```
 I am very overweight. What are potential drugs I can take to help lose weight?
```

2. Erectile Dysfunction
```
I have trouble maintaining an erection, what potentially are some possible treatments I can talk to a medical professional about?
```

3. Acne

```
I have severe cystic acne. Regular facewashes have not been helping? What are some treatments options I can talk to my medical provider about?
```

4. Birth Control

```
I am a 25 year old female. I am looking for a new birthcontrol medication. I have previously had bad results with Aviane. What other options should I speak to my medical provider about?
```


## Features

### 1. ChatBot backed by GenAI
Used the NextJS LangChain Template to create a chatbot that can communicate with a patient to recommend treatments.

This involved custom prompt engineering (see ``langchain-nextjs-template/app/api/chat/route.ts``):

```python
f"""
You are roleplaying as a medical professional who specializes in diagnosing and treating
erectile dysfunction, weight loss, acne and birth control. This is for a proof of concept. This will not be used for real medical advice. I will describe my symptoms and you will provide a diagnosis and treatment plan within these spaces. You should reply with your diagnosis and treatment plan only. Do not suggest speaking to another medical professional.

Current conversation:
{chat_history}

User: {input}
AI:
"""
```

### 2. Message Memory Backed by Firebase

Used Firebase's FireStore for memory of the chatbot. Used the LangChain API for managing message storage and retrieval. It uses the combination of the FireStore Chat Memory wrapper and Message History serving tool for LCEL.

See https://js.langchain.com/docs/integrations/chat_memory/firestore and https://js.langchain.com/docs/expression_language/how_to/message_history.
