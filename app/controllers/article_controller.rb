class ArticleController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)
    @article.save
    redirect_to root_path

  def article_params
    params.require(:article).permit(:title, :body)
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to root_path
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)
    redirect_to root_path
  end


end
