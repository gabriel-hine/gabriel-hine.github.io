%D = cat(1,dir('*.png'),dir('*.jpg'));
D = dir('1200px-PyTorch_logo_icon.svg.png');

for i = 1:length(D)

I = imread(D(i).name);

I = imresize(I,[128 128],'bicubic');

[a, name, c] = fileparts(D(i).name);

imwrite(I,['128x128_', name '.png'] );


end