class CreateSigns < ActiveRecord::Migration[6.0]
  def change
    create_table :signs do |t|
      t.string :name
      t.string :img_src
      t.string :description

      t.timestamps
    end
  end
end
