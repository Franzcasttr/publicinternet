class AddInternetSpeedsTable < ActiveRecord::Migration[8.1]
  def change
    create_table :internet_speeds, id: :uuid do |t|
      t.references :place, null: false, foreign_key: true, index: true, type: :uuid
      t.decimal :download_speed, null: false, scale: 2, precision: 15
      t.string :download_unit, null: false

      t.timestamps
    end
  end
end
