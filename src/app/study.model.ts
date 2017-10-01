export class Study {
    dose: string;
    time: string;
    result: string;
    link: string;
}

const greenTeaStudies: Study[] = [
    {
        dose: '571mg Green Tea Extract, 1 hour cycling',
        time: '4 weeks',
        result: '-.97% body fat (GTE: 17.06 to 15.43 (-1.63%), placebo: 16.63 to 15.97 (-.66%))',
        link: 'https://jissn.biomedcentral.com/articles/10.1186/s12970-014-0062-7'
    },
    {
        dose: 'Green Tea Extract with 50mg caffeine, 90mg EGCG',
        time: '24 hours',
        result: '+4% energy expenditure',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/10584049?dopt=Abstract'
    },
    {
        dose: 'Green Tea Extract - 3 capsules',
        time: '24 hours',
        result: '+17% fat oxidation',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/18326618?dopt=Abstract'
    },
    {
        dose: 'Green Tea Extract with 843mg EGCG',
        time: '12 months',
        result: 'slightly reduced BMI for fatter subjects',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/26701796'
    },
    {
        dose: 'Green Tea with 625mg catechins, exercise',
        time: '12 weeks',
        result: '-1.2kg body weight vs placebo, same fat mass, decreased abdominal fat',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/19074207?dopt=Abstract'
    },
    {
        dose: 'Green tea containing 96mg or 583mg catechins',
        time: '12 weeks',
        result: 'greater fat loss in 583mg group',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/17557985?dopt=Abstract'
    },
    {
        dose: 'GTE with 572.8mg catechins',
        time: '10 weeks',
        result: 'increased body fat use during exercise',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/20459475?dopt=Abstract'
    },
    {
        dose: '270 EGCG',
        time: '6 days',
        result: 'no change in fat oxidation, no benefit over caffeine',
        link: 'http://journals.humankinetics.com/doi/abs/10.1123/ijsnem.19.6.624'
    },
    {
        dose: '300 mg EGCG',
        time: '2 days',
        result: '"potential to increase fat oxidation in men"',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/17906192/'
    },
    {
        dose: 'GTE containing 160mg catechins (70mg EGCG)',
        time: '3 weeks',
        result: 'GTE supplementation did not influence indices of fat and energy metabolism',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/19839000?dopt=Abstract'
    },
    {
        dose: 'GTE with 159mg catechins + exercise',
        time: '3 weeks',
        result: 'no significant effect on performance, energy metabolism',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/20533245?dopt=Abstract'
    },
    {
        dose: 'decaffeinated GTE 2 hours before exercise',
        time: '4 weeks',
        result: 'no effect on whole-body fat oxidation rates during exercise',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/24172767?dopt=Abstract'
    },
    {
        dose: 'Green Tea containing 270 EGCG and 150 caffeine',
        time: '3 months',
        result: 'increased resting energy expenditure, decreased body fat',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/16076989?dopt=Abstract'
    },
    {
        dose: 'Green Tea - 4 groups: (catechins/caffeine) 60/10, 458/104, 468/126, 886/198',
        time: '90 days',
        result: '-1.2kg body weight w/ highest dose, -0.7kg body fat w/ second highest dose',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/19680234?dopt=Abstract'
    },
    {
        dose: 'meta-analysis of 15 studies of GT catechins with caffeine',
        time: '-',
        result: '-1.38 kg body weight, -.44 kg with caffeine vs no caffeine',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/19906797?dopt=Abstract'
    },
    {
        dose: 'meta-analysis of 15 studies',
        time: '12-13 weeks',
        result: 'weight loss in 9 of the 15 studies',
        link: 'http://www.nature.com/ijo/journal/v33/n9/fig_tab/ijo2009135t1.html#figure-title'
    },
    {
        dose: '6 studies of green tea, 2 studies of oolong tea',
        time: '2-24 hours',
        result: 'increased energy expenditure/fat oxidation in 5/6 green tea and 2/2 oolong studies',
        link: 'https://www.nature.com/ijo/journal/v34/n4/fig_tab/ijo2009299t1.html#figure-title'
    },
    {
        dose: '16 studies of green tea, 5 studies of oolong',
        time: '6-24 weeks',
        result: 'significant weight loss/increased energy expenditure in 12/16 green tea and 5/5 oolong studies',
        link: 'https://www.nature.com/ijo/journal/v34/n4/fig_tab/ijo2009299t2.html#figure-title'
    }
];
const egcgStudies: Study[] = [
];

export const STUDIES = {
    EGCG: egcgStudies,
    GREEN_TEA: greenTeaStudies
};
