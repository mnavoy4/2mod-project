class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :source
      t.string :philosophy
      t.string :quote

      t.timestamps
    end
  end
end
