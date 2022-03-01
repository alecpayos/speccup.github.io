from flask import Flask, render_template, request
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy import (
    create_engine, 
    Sequence, 
    Column, 
    Integer, 
    String, 
    DateTime
)

app = Flask(__name__,
            static_url_path='',
            static_folder='./build',
            template_folder='./build')

engine = create_engine('postgresql://postgres:alec@localhost:5432/speccup', echo=True)
Base = declarative_base()

Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


class User(Base):
    __tablename__ = 'user_info'
    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    first_log = Column(DateTime(timezone=True), server_default=func.now())

    # User basic information
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String(15))
    birthdate = Column(DateTime(timezone=False), nullable=False )
    mobile_number = Column(String(20), nullable=False)
    country = Column(String(60))
    state = Column(String(40))
    city = Column(String(60))
    zip_code = Column(String(15))
    street = Column(String(90))

    # User account information
    username = Column(String(40), nullable=False, unique=True)
    email_address = Column(String(40), nullable=False)
    password = Column(String(80), nullable=False)

    # User credit information
    subscription_type = Column(String(60), nullable=False)
    card_type = Column(String(20), nullable=False)
    card_number = Column(String(40), nullable=False)
    cvc = Column(String(20), nullable=False)

@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def handleError(e):
    return render_template('index.html')

@app.route('/stream', methods=['GET', 'POST'])
def stream():
    if request.method == 'POST':
        newUser = User(
            first_name = request.json['firstName'],
            last_name = request.json['lastName'],
            age = request.json['age'],
            gender = request.json['gender'],
            birthdate = request.json['birthdate'],
            mobile_number = request.json['mobileNumber'],
            country = request.json['country'],
            state = request.json['state'],
            city = request.json['city'],
            zip_code = request.json['zipCode'],
            street = request.json['street'],
            user_name = request.json['userName'],
            email_address = request.json['emailAddress'],
            password = request.json['password'],
            subscription_type = request.json['subcriptionType'],
            card_type = request.json['cardType'],
            card_number = request.json['cardNumber'],
            cvc = request.json['cvc']
        )

    session.add(newUser)
    session.commit()

    return newUser


if __name__ == "__main__":
    app.run() 
