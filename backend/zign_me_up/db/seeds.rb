# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Seed an example User

User.create(name: "Bob", username: "Bobob", email: "bob1929@gmail.com", bday: "")


# Seed zodiac signs

Sign.create(name: "Aries", img_src: "", description: "When you speak, they follow, but be careful. That can make you seem bit bossy at times.")

Sign.create(name: "Taurus", img_src: "", description: "You are the friend who will constantly make you feel loved and appreciated.")

Sign.create(name: "Gemini", img_src: "", description: "You are like a chameleon, who can change their personality due to the vibe of a group and atmosphere.")

Sign.create(name: "Cancer", img_src: "", description: "You are loveable. You would take the time to do a small act for a friend because you know it will cheer them up.")

Sign.create(name: "Leo", img_src: "", description: "You are a great companion in many fun situations, but can be a little difficult to handle at times.")

Sign.create(name: "Virgo", img_src: "", description: "You are the planner of your friend group and most likely the most intelligent as well.")

Sign.create(name: "Libra", img_src: "", description: "You love equality and will look at every individual person to see what they need.")

Sign.create(name: "Scorpio", img_src: "", description: "You have a hard time making friends because of your shell, but when you do, they last a life time.")

Sign.create(name: "Saggitarius", img_src: "", description: "You are very open-minded, but can be immature at times.")

Sign.create(name: "Capricorn", img_src: "", description: "You like to prove doubters wrong and get things done on your own.")

Sign.create(name: "Aquarius", img_src: "", description: "You love to help people and you do it very well. If your friends take your advice it will most likely turn out for the best.")

Sign.create(name: "Pisces", img_src: "", description: "You are able to put yourself in other people's shoes easily and friendly towards everyone you encounter.")