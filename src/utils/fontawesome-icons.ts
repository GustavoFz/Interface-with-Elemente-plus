import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleQuestion,
  faFloppyDisk,
  faLightbulb,
  faMap,
  faPaperPlane
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFloppyDisk, faPaperPlane, faLightbulb, faCircleQuestion, faMap)

export default FontAwesomeIcon
