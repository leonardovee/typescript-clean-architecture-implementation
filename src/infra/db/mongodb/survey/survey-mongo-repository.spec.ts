import { SurveyMongoRepository } from './survey-mongo-repository'
import { MongoHelper } from '../helper/helper-mongo'
import { Collection } from 'mongodb'

let surveyCollection: Collection

const makeSut = (): SurveyMongoRepository => {
  return new SurveyMongoRepository()
}

describe('Survey Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL ?? '')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('survey')
    await surveyCollection.deleteMany({})
  })

  test('Should return survey on add success', async () => {
    const sut = makeSut()
    await sut.add({
      question: 'any_question',
      answers: [{
        image: 'any_image',
        answer: 'any_answer'
      }, {
        answer: 'other_answer'
      }]
    })
    const survey = await surveyCollection.findOne({ question: 'any_question' })
    expect(survey).toBeTruthy()
  })
})
