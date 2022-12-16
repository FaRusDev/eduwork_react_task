import React from 'react'

import Card from './Card/Card'

class Berita extends React.Component{
    state  = {
        berita : [],
        loading : true,
        params : '',
        input: '',
    }

    ambildata(){
        try {
            fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=8533aefa02d7472c9016654acd4709cd`)
            .then((resp) => resp.json())
            .then((data)=>{
                console.log(data)
                this.setState({berita:data.articles, loading:false})
                
            })

        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.ambildata()
    }


    cariData = async (param,api_key) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${param}&apiKey=${api_key}`);
            const data = await response.json();
            this.setState({berita:data.articles, loading:false})
            
        }catch(error){
            console.log(error)
        }
    }
    

    componentDidUpdate(prevProps,prevState){
        if(prevState.params !== this.state.params){
            if(this.state.params === ''){
                this.ambildata()
            }
            this.setState({berita:[]})
            this.cariData(this.state.params,'8533aefa02d7472c9016654acd4709cd')
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({params:this.state.input})

    }

    render(){
        const {berita} = this.state
        return (
            <div>
                {this.state.loading && <h1>Loading</h1>}
                <div className="m-3">
                    <form  className='flex ' onSubmit={(e)=>this.handleSubmit(e)}>
                        <input type="text" name="cari" defaultValue={this.state.input} onChange={(e)=>this.setState({input:e.target.value})} id="cari" placeholder='cari berita' className='w-full h-10 border border-gray-500 rounded-md' />
                        <button type='submit' className='h-10 mx-3 bg-orange-300 p-2 rounded-md hover:bg-orange-500 hover:text-white'>cari</button>
                    </form>
                    {
                        berita.map((b)=>
                            <Card key={`${b.title} ${b.content}`} title={b.title} image={b.urlToImage} content={b.content}/>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Berita
