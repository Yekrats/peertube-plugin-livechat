import { Model } from '@converse/skeletor/src/model.js'

/**
 * A chat room task.
 * @class
 * @namespace _converse.ChatRoomTask
 * @memberof _converse
 */
class ChatRoomTask extends Model {
  idAttribute = 'id'

  async saveItem () {
    console.log('Saving task ' + this.get('id') + '...')
    await this.collection.chatroom.taskManager.saveItem(this)
    console.log('Task ' + this.get('id') + ' saved.')
  }

  async deleteItem () {
    return this.collection.chatroom.taskManager.deleteItem(this)
  }
}

export {
  ChatRoomTask
}
