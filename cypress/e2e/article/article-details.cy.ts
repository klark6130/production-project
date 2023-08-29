
let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(article => {
      currentArticleId = article.id;
      // cy.log('JSON', JSON.stringify(article));
      cy.visit(`articles/${article.id}`);
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  })
  it('Видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  })

  it('Видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationList').should('exist');
  })

  it('Оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  })

  it('ставит оценку', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'some feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  })
})