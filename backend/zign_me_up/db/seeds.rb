# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# To delete seeded data run 'rails console' and use the 'destroy_all' method with dot notation like this 'User.destroy_all'


# Seed zodiac signs

Sign.create(name: "Aries", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/aries.png", description: "When you speak, they follow, but be careful. That can make you seem bit bossy at times.")

Sign.create(name: "Taurus", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/taurus.png", description: "You are the friend who will constantly make you feel loved and appreciated.")

Sign.create(name: "Gemini", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/gemini.png", description: "You are like a chameleon, who can change their personality due to the vibe of a group and atmosphere.")

Sign.create(name: "Cancer", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/cancer.png", description: "You are loveable. You would take the time to do a small act for a friend because you know it will cheer them up.")

Sign.create(name: "Leo", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/leo.png", description: "You are a great companion in many fun situations, but can be a little difficult to handle at times.")

Sign.create(name: "Virgo", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/virgo.png", description: "You are the planner of your friend group and most likely the most intelligent as well.")

Sign.create(name: "Libra", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/libra.png", description: "You love equality and will look at every individual person to see what they need.")

Sign.create(name: "Scorpio", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/scorpius.png", description: "You have a hard time making friends because of your shell, but when you do, they last a life time.")

Sign.create(name: "Saggitarius", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/sagittarius.png", description: "You are very open-minded, but can be immature at times.")

Sign.create(name: "Capricorn", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/capricorn.png", description: "You like to prove doubters wrong and get things done on your own.")

Sign.create(name: "Aquarius", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/aquarius.png", description: "You love to help people and you do it very well. If your friends take your advice it will most likely turn out for the best.")

Sign.create(name: "Pisces", img_src: "https://raw.githubusercontent.com/ID25/rails_emoji_picker/master/lib/generators/rails_emoji_picker/emoji/pisces.png", description: "You are able to put yourself in other people's shoes easily and friendly towards everyone you encounter.")


# Seed a User example

User.create(name: "Bob", username: "Bobob", email: "bob1929@gmail.com", day: 1, month: 12, sign_id: 1)

User.create(name: "Stacy", username: "Staceee", email: "stacy1999@gmail.com", day: 13, month: 3, sign_id: 4)