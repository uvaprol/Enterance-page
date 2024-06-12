from flask import Flask, render_template, request
import pandas as pd

DEV_MODE = False
USERS_DB = pd.read_csv('users.csv')

app = Flask(__name__)

@app.route('/')
def main_render():
    return render_template('index.html')

@app.route('/Regestration')
def create_user():
    global USERS_DB
    try:
        print(USERS_DB.set_index('login').loc[request.args['login']])
    except:
        user = {
            'name'    : request.args['name'],
            'surname' : request.args['surname'],
            'tel'     : request.args['tel'],
            'login'   : request.args['login'],
            'password': request.args['password']
        }
        USERS_DB = USERS_DB._append(user, ignor_index=True)
        USERS_DB.to_csv('users.csv', index=False, header=True)
        return 'регистрация успешна'
    return 'логин занят'

@app.route('/Authorization')
def entered_user():
    global USERS_DB
    try:
        if USERS_DB.set_index('login').at[request.args['login'], 'password'] == request.args['password']:
            return 'Вход выполнен'
    except:
        pass
    return 'Вход не выполнен'

app.run(host='0.0.0.0', port=80, debug=DEV_MODE)

