import pandas as pd
df = pd.DataFrame(columns=[
    'name',
    'surname',
    'tel',
    'login',
    'password'
])

df.to_csv('users.csv', index=False, header=True)
df = pd.read_csv('users.csv')
print(df)
