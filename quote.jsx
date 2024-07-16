const quoteData = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteData[0]
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    this.setState({
      quote: quoteData[randomIndex]
    });
  }

  render() {
    const { quote } = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;

    return (
      <div id="quote-box">
        <div className="quote-content">
          <i className="fas fa-quote-left"></i>
          <p id="text">{quote.text}</p>
          <i className="fas fa-quote-right"></i>
        </div>
        <p id="author">- {quote.author}</p>
        <div className="buttons">
          <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
          <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Tweet
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById('root'));