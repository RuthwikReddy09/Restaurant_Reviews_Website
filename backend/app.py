from flask import Flask,request,jsonify,redirect,session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS,cross_origin

app=Flask(__name__)
app.config['SECRET_KEY']="thisismyapp"
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:@localhost/UserDetails"
# db.init_app(app)
CORS(app,supports_credentials=True)
db=SQLAlchemy(app)

class User(db.Model):
    phone = db.Column(db.String(10), primary_key=True,nullable=False)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255),unique=True,nullable=False)
class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    name = db.Column(db.String(25),nullable=False)
    location = db.Column(db.String(25), nullable=False)
    rating = db.Column(db.Integer,nullable=False)
    review = db.Column(db.String(255),nullable=False)
    url = db.Column(db.String(255),nullable=False)

   
with app.app_context():
    db.create_all()

@app.route("/restos")
def resto():
    restos=[]
    for i in Reviews.query.all():
        restos.append({"name":f"{i.name}","location":f"{i.location}","rating":f"{i.rating}","review":f"{i.review}","url":f"{i.url}","key":f"{i.id}"})
    return jsonify(restos)

@app.route("/signup",methods=["POST"])
def signup():
    phone = request.json["phone"]
    username = request.json["username"]
    password = request.json["password"]
    cpassword = request.json["cpassword"]
    print(phone,username,password)
    entry=User(phone=phone,username=username,password=password)
    db.session.add(entry)
    db.session.commit()
    return "Registered Successfully"
   
@app.route("/login",methods=["POST"])
def login():
    if 'user' in session:
        return "session"
    username = request.json["username"]
    password = request.json["password"]
    info = User.query.all()
    for i in info:
      if username==i.username and password==i.password:
          session['user']=username
          print(session)
          return "Login Successful"
    return "Invalid Credentials"


@app.route("/addReview",methods=["POST"])
def add():
    name=request.json['name']
    location=request.json['location']
    rating=request.json['rating']
    review=request.json['review']
    url=request.json['url']
    entry=Reviews(name=name,location= location,rating= rating,review=review,url=url)
    db.session.add(entry)
    db.session.commit()
    return "Review Added Successfully"

@app.route("/logout")
def logout():
    session.clear()
    print(session)
    return "Logged Out"

@app.route("/get")
def get():
    return jsonify(session)

if __name__ =="__main__":
    app.run(debug=True)

